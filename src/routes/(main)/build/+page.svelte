<ONSloader isLoading={isLoading}/>
<nav>
  <div class="nav-left">
    <button
      class="text"
      on:click={() => goto(`${base}/draw/${'#' + (store.compressed || '')}`)}
    >
      <Icon type="chevron" rotation={180} /><span>Edit area</span>
    </button>
  </div>
  <div class="nav-right">
    <button
      title={state.showSave ? 'Close save options' : 'Save selected area'}
      use:tooltip
      on:click={() => (state.showSave = !state.showSave)}
      class:active={state.showSave}
    >
      <Icon
        type={state.showSave ? 'add' : 'download'}
        rotation={state.showSave ? 45 : 0}
      />
    </button>
  </div>
</nav>
{#if state.showSave}
  <nav class="tray">
    <div />
    <div class="save-buttons">
      <input type="text" bind:value={state.name} placeholder="Type a name" />
      <button
        class="text"
        on:click={async () => {
          let blob = geo_blob(store);
          download(blob, `${state.name}.json`);
        }}
      >
        <Icon type="download" /><span>Save geography</span>
      </button>
      <button
        class="text"
        on:click={() =>
          clip(
            store.properties.oa_all.join(','),
            'Copied output area codes to clipboard'
          )}
      >
        <Icon type="copy" /><span>Copy area codes</span>
      </button>
    </div>
  </nav>
{/if}
<div class="container">
  <aside class="topics-box">
    <h2>Name your area</h2>
    <input type="text" bind:value={state.name} placeholder="Type a name" />

    <p style="font-weight:bold">Area Profiles</p>

    <label>
      <input type="checkbox" bind:checked={includemap} />
      Include Map
    </label>

    <h2>Select topics</h2>
    <input
      type="text"
      placeholder="Type to filter"
      bind:value={state.topicsFilter}
    />
    {#each filterTopics(topics, state.topics, regex, state.topicsExpand) as topic, i}
      <label style:display={i < 6 || state.topicsExpand ? null : 'none'}>
        <input
          type="checkbox"
          bind:group={state.topics}
          name="topics"
          value={topic}
        />
        {@html highlight(topic.label, regex)}
      </label>
    {/each}
    {#if !regex}
      <button on:click={() => (state.topicsExpand = !state.topicsExpand)}>
        {state.topicsExpand ? 'Show fewer' : `Show ${topics.length - 6} more`}
      </button>
    {/if}
  </aside>
  <article class="profile">
    <h2>Profile preview</h2>

    <div id="embed" />
    <div class="embed" style="height:.08em!important;padding:0">
      <!-- <h3>{state.name}</h3> -->
    </div>
    <div class="embed-actions">
      <button
        on:click|preventDefault={() => {
          state.showEmbed = !state.showEmbed;

          setTimeout(() => {
            const el = document.querySelector('textarea');
            if (!el) return;

            el.scrollIntoView({
              behavior: 'smooth',
            });
          });
        }}
      >
        {state.showEmbed ? 'Hide embed code' : 'Show embed code'}
      </button>
      <button on:click={() => pym_parent.sendMessage('makePNG', null)}>
        Download PNG
      </button>
      <button
        disabled={!state.topics}
        on:click={async function () {
          var tables = await get_data(state.topics);
          var pretty = JSON.stringify(tables, null, 4);
          var file = new Blob([pretty], {type: 'text/json'});
          download(file, state.name.replace(' ', '_') + '.json');

          console.log(pretty);
        }}>Download Data</button
      >
      {#if embed_hash && state.showEmbed}
        <p style:margin-bottom={0}>Embed code</p>
        <textarea>{makeEmbed(embed_hash)}</textarea>
      {/if}
    </div>
  </article>
</div>

<style>
  .profile {
    flex-grow: 1;
  }
  .embed {
    display: block;
    width: auto;
    height: auto;
    padding: 30px;
    margin-bottom: 10px;
    background-color: rgba(119, 136, 153, 0.105);
  }
  .container {
    margin-right: 16px;
    max-width: none;
  }

  :global(#lmap) {
    filter: invert(0.9);
    opacity: 0.9;
  }

  .embed-actions textarea {
    width: 100%;
    height: 100px;
    resize: none;
  }
</style>


<script>
    import ONSloader from '../ONSloader.svelte';
  let isLoading = false;
  import {goto} from '$app/navigation';
  import {base} from '$app/paths';
  import pym from 'pym.js';
  import tooltip from '$lib/ui/tooltip';
  import Icon from '$lib/ui/Icon.svelte';
  import {default as datasets} from '$lib/util/custom_profiles_tables.json';
  import {simplify_geo, geo_blob} from '../draw/drawing_utils.js'; // "$lib/draw/MapDraw.js";
  import {get_pop, get_stats} from './gettable.js';
  import {download, clip} from '$lib/util/functions';
  import {getgit} from '$lib/util/git.js';
  import {onMount} from 'svelte';
  import {Minhash} from 'minhash';

  let dataset_keys = Object.keys(datasets);
  dataset_keys = dataset_keys.filter(
    (key) => !/UK\]| - | by |\[[^K]|WA\]/.test(datasets[key].name)
  ); // strip non k tables, welsh only, and bivariate tables
  let name2key = Object.fromEntries(
    new Map(dataset_keys.map((d) => [datasets[d]['Table name'], d]))
  );

  /////
  let pym_parent; // Variabl for pym
  let embed_hash; // Variable for embed hash string
  let tables = []; // Array to hold table data
  let includemap = true;

  // alert('00 oa 01 lsoa 02 msoa e.g.E00')

  let topics = [
    {key: 'population', label: 'Total Population', special: true},
    {key: 'density', label: 'Population density', special: true},
    {key: 'agemed', label: 'Median age', special: true},
    {key: 'age', label: 'Age profile', special: true},
    // {key: 'sex', label: 'Sex'},
    {key: 'ethnicity', label: 'Ethnicity'},
    {key: 'religion', label: 'Religion'},
    {key: 'marital', label: 'Marital status'},
    {key: 'qualification', label: 'Highest qualification'},
    {key: 'grade', label: 'Social grade'},
    {key: 'economic', label: 'Economic activity'},
    {key: 'travel', label: 'Travel to work'},
    {key: 'hours', label: 'Hours worked'},
    {key: 'housing', label: 'Housing type'},
    {key: 'tenure', label: 'Housing tenure'},
    {key: 'bedrooms', label: 'Number of bedrooms'},
    {key: 'occupancy', label: 'Persons per bedroom'},
  ]
    .map(function (topic) {
      return Object.assign({}, topic, datasets[name2key[topic.label]]);
    })
    .filter((d) => d['Nomis table'] || d.special);

  topics.sort((a, b) => (a.key > b.key ? 1 : -1));

  let state = {
    mode: 'move',
    radius: 5,
    select: 'add',
    name: 'Area Name',
    showSave: false,
    showEmbed: false,
    topics: topics.filter((d) => ['population', 'hours'].includes(d.key)),
    topicsExpand: false,
    topicsFilter: '',
  };

  function filterTopics(topics, selected, regex, expand) {
    /// display only those which exist
    let topics_start = [];
    let topics_end = [];
    topics.forEach((topic) => {
      if (selected.includes(topic)) {
        topics_start.push(topic);
      } else {
        topics_end.push(topic);
      }
    });
    if (regex) topics_end = topics_end.filter((t) => regex.test(t.label));
    return [...topics_start, ...topics_end];
  }

  function highlight(str, regex) {
    return regex ? str.replace(regex, '<mark>$&</mark>') : str;
  }

  $: regex =
    state.topicsFilter.length > 1 ? new RegExp(state.topicsFilter, 'i') : null;

  let store;
  let geojson;
  let population, stats;

  async function init() {
    isLoading=true

    // incase we call for a pre loaded area as a hash string
    let hash = window.location.hash;
    if (hash = '#undefined'){ 
      hash = ''
      window.location.hash= ''
    }
    else if (hash.length == 10) {
      let code = hash.slice(1);

      let data = await getgit(
        'ONSvisual',
        'cp-places-data',
        `${code.slice(0, 3)}/${code}.json`
      );

      if (data.type === 'Feature') {
        const info = {
          compressed: code,
          geojson: data,
          name: data.properties.areanm,
          properties: {oa_all: data.properties.codes},
        };

        localStorage.setItem('onsbuild', JSON.stringify(info));
      }
    }

    // resume as normal
    store = JSON.parse(localStorage.getItem('onsbuild'));

    console.debug('build-', store);
    if (!store){
      alert('Warning, no area selected! Redirecting to the drawing page.')
      goto(`${base}/draw/`);
    }
    
    geojson = simplify_geo(store.geojson.geometry);
    

    state.name = store.properties.name;
    state.start = true;

    let props = store.properties;
    state.compressed =
      store.compressed ||
      Object.values({
        ...props.msoa,
        ...props.lsoa,
        ...props.oa,
      })
        .flat()
        .join(';');

    // console.error('comp',state.compressed)

    // var senddata = {
    // 	tables: tlist,
    // 	areas: alist,
    // 	compressed,
    // 	polygon: polygon,
    // };

    population = await get_pop(state.compressed, state.name);
    stats = await get_stats(state.compressed, state.name);

    setTimeout(() => {
      update_profile(
        state.start,
        state.name,
        state.topics,
        includemap,
        population,
        stats
      );

      isLoading=false
    }, 4000);
  }

  onMount(init);
  // $: get_data(state.topics);

  ////////////////////////////////////////////////////////////////
  // Processing functions
  ////////////////////////////////////////////////////////////////
  let cache = {};
  async function get_data(data) {
    if (!state.start) return [];

    let rtn = data
      .filter((d) => !d.special)
      .map(async function (table) {
        if (table['Nomis table'] in cache) {
          return cache[table['Nomis table']];
        } else {
          return await dfd
            .readCSV(
              `https://www.nomisweb.co.uk/api/v01/dataset/${table[
                'Nomis table'
              ].toLowerCase()}.bulk.csv?date=latest&geography=MAKE|MyCustomArea|${
                state.compressed
              },K04000001&rural_urban=0&measures=20100&select=geography_name,cell_name,obs_value`
            )
            .then((d) => d.setIndex({column: 'geography'}))
            .then((de) => {
              var mappings = {};
              var cols = de.columns.filter((d) => d.includes(':'));
              cols.forEach((d, i) => {
                mappings[d] = d.replaceAll(/[\:\;]/g, ' ');
                ///:\s*(.+);/.exec(d)[1];
              });

              return de
                .loc({
                  rows: de.index.filter((d) => d),
                  columns: cols,
                })
                .rename(mappings, {inplace: false});
            })

            .then((df_old) => {
              // mandatory cleanup
              var cols = df_old.$columns.filter(
                (d) =>
                  !(
                    (
                      d.includes('count') ||
                      d.includes('All') ||
                      (d.match(/\;/g) || []).length === 1 ||
                      d.includes('sum') ||
                      d.includes('Total')
                    )
                    // d.includes('Mean')
                  )
              );

              df_old = df_old.loc({columns: cols});

              // add headers to hash search algorithm
              const matches = table['Cell name'].map((d) => {
                var match = new Minhash();
                d.match(/\w+/g).forEach((e) => match.update(e));
                return [d, match];
              });

              // name cleanup
              let colmap = new Map();
              df_old.$columns.forEach((m) => {
                const m0 = new Minhash();
                m.match(/\w+/g).forEach((e) => m0.update(e));
                var last = 0;
                var keep = m;

                for (const mx of matches) {
                  var j = m0.jaccard(mx[1]);
                  if (j > last) {
                    last = j;
                    keep = mx[0];
                  }
                }
                // create a hierarchical map
                colmap.set([keep, [m, ...(colmap.get(keep) || [])]]);
              });

              // rebuild with grouped data
              let df = {};
              colmap.forEach((_, item) => {
                var [key, value] = item;
                df[key] = df_old.loc({columns: value}).sum({axis: 1}).$data;
              });

              df = new dfd.DataFrame(df);

              // df.print();

              var pc = df.div(df.sum(), {axis: 0});
              // var bpc = df.div(df.max(), {axis: 0});

              // pc.print()

              var lists = [];
              let keepcol = table['Cell name'].filter((d) =>
                df.$columns.includes(d)
              );
              // columns to plot (must appear in both nomis and datasheet. )
              dfd
                .toJSON(pc.loc({columns: keepcol}), {
                  format: 'columns',
                })
                .forEach((dict, i) => {
                  for (var key in dict) {
                    lists.push({
                      z: ['CustomArea', 'England and Wales'][i],
                      pc: dict[key],
                      column: key,
                    });
                  }
                });

              cache[table['Nomis table']] = {
                name: table['Table name'],
                data: lists,
                embed: {
                  nid: table['Nomis table'],
                  did: keepcol.map((d) => table['Cell name'].indexOf(d)),
                  data: [...new Uint16Array(lists.map((d) => d.pc * 10000))],
                },
              };
              // console.debug('table', cache[table['Nomis table']]);
              return cache[table['Nomis table']];
            });
        }
      });
    return await Promise.all(rtn);
  }

  async function update_profile(
    start,
    name,
    data,
    includemap,
    population,
    stats
  ) {
    if (start) {
      var ls = JSON.parse(localStorage.getItem('onsbuild'));
      ls.properties.name = name;
      localStorage.setItem('onsbuild', JSON.stringify(ls));

      tables = await get_data(data);

      let dummystats;
      var newstats = [];
      if (stats) {
        var usestats = data.filter((d) => d.special).map((d) => d.key);

        if (usestats.includes('population')) newstats.push('Population');
        if (usestats.includes('agemed')) newstats.push('Median Age');
        if (usestats.includes('density')) newstats.push('Population Density');

        dummystats = newstats.map((d) => [d, stats[d]]);
      }
      embed_hash = `#/?name=${btoa(name)}&tabs=${btoa(
        JSON.stringify(tables).replaceAll('CustomArea', name)
      )}${
        (usestats)?
        usestats.includes('age')
          ? `&population=${btoa(JSON.stringify(population))}`
          : '' : ''
      }${
        newstats.length > 0 ? `&stats=${btoa(JSON.stringify(dummystats))}` : ''
      }${includemap ? `&poly=${btoa(JSON.stringify(geojson))}` : ''}`;

      // alert(population)

      if (!pym_parent) {
        pym_parent = new pym.Parent('embed', '/embed/' + embed_hash, {
          name: 'embed',
          id: 'iframe',
        });
      } else {
        document.getElementById('iframe').contentWindow.location.hash =
          embed_hash;
      }
    }
  }

  $: update_profile(
    state.start,
    state.name,
    state.topics,
    includemap,
    population,
    stats
  );

  function makeEmbed(embed_hash) {
    let url = `/embed/${embed_hash}`;
    return `<div id="profile"></div>
<script src="http://cdn.ons.gov.uk/vendor/pym/1.3.2/pym.min.js"><\/script>
<script>var pymParent = new pym.Parent("profile", "${url}", {name: "profile"});<\/script>`;
  }
</script>
