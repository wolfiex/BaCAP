<script>
	export let data;
	export let xKey = "value";
	export let yKey = "category";
	export let zKey = "group";

	// if less than 1% use decimal formatting
	export let formatTick = num => num>1? Math.ceil(num):(Math.ceil(num * 100) / 100).toFixed(2);
	export let suffix = "%";
	export let barHeight = 25;
	export let markerWidth = 3;
	var bmax;
	
	function groupData(data, key) {
		let data_indexed = {};
		for (const d of data) {
			if (!data_indexed[d[key]]) {
				data_indexed[d[key]] = {
					label: d[key],
					values: []
				};
			}
			data_indexed[d[key]].values.push(d);
		}
		
		let data_grouped = [];
		for (const key in data_indexed) {
			data_grouped.push(data_indexed[key]);
		}
		
		return data_grouped;
	}
	

	$: yDomain = data.map(d => d[yKey]).filter((v, i, a) => a.indexOf(v) === i);
	$: zDomain = data.map(d => d[zKey]).filter((v, i, a) => a.indexOf(v) === i);
	
	$: xScale = (value) => value * 100;
	$: data_grouped = groupData(data, yKey);

	$: bmax = Math.max(...data.map(d=>+d[xKey]))


</script>

{#if zDomain[1]}
<ul class="legend-block">
	{#each zDomain as group, i}
	<li class:ew={i != 0}>
		<div class="legend-vis {i == 0 ? 'bar' : 'marker'}" style:height="1rem" style:width="{i == 0 ? '1rem' : markerWidth + 'px'}"></div>
		<span class="{i == 0 ? 'bold' : 'brackets'}">{group}</span>
	</li>
	{/each}
</ul>
{/if}

{#each data_grouped as group}
	<div class="label-group">
		{group.label}
		{#each group.values as d, i}
		<span class="label {i == 0 ? 'bold' : 'sml brackets'}">{formatTick(xScale(d[xKey]))}{suffix}</span>
		{/each}
	</div>
	<div class="bar-group" style:height="{barHeight}px">
	{#each group.values as d, i}
		{#if i == 0}
		<div class="bar" style:left="0" style:width="{xScale(d[xKey]/bmax)}%"/>
		{:else}
		<div class="marker" style:left="calc({xScale(d[xKey]/bmax)}% - {markerWidth / 2}px)" style:border-left-width="{markerWidth}px"/>
		{/if}
	{/each}
	</div>
{/each}

<style>
	.label-group {
		margin: 4px 0 1px 0;
    padding: 0;
    line-height: 1.2;
		font-size: 0.9rem;
	}
	.bold {
		font-weight: bold;
		color:#023d52
	}
	.sml {
		margin-left: 3px;
		font-size: .85rem;
	}
	.ew{
		/* color:red; */
		float:right!important;
	}
	.brakets{
		color:#272727;
	}
	.brackets::before {
		content: "(";
		font-weight: 600;
		font-size: 120%;
		
	}
	.brackets::after {
		content: ")";
		font-weight:600;
		font-size: 120%;
	}
	.bar-group {
		display: block;
		position: relative;
		width: 100%;
	}
	.bar-group > div {
		position: absolute;
		height: 100%;
		top: 0;
	}
	.bar {
		background-color: #27A0CC;
	}
	.marker {
		border-left-color: black;
		border-left-style: solid;
	}
	ul.legend-block {
		list-style-type: none;
		padding: 0;
		margin: 0 0 5px 0;
	}
	ul.legend-block > li {
		display: inline-block;
		margin: 0 10px 0 0;
    padding: 0;
	}
	.legend-vis {
		display: inline-block;
		transform: translate(0,3px);
	}
</style>
