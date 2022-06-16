import { c as create_ssr_component, b as subscribe, s as setContext, e as escape, v as validate_component } from "../../../chunks/index-f909a211.js";
import { a as assets } from "../../../chunks/paths-396f020f.js";
import { t as themes, W as Warning, O as ONSHeader, a as ONSFooter, p as page } from "../../../chunks/ONSFooter-222593b3.js";
let theme = "light";
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";
  setContext("theme", themes[theme]);
  $$unsubscribe_page();
  return `${$$result.head += `<link rel="${"icon"}" href="${escape(assets) + "/favicon.ico"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:url"}" content="${escape(assets) + "/"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image"}" content="${escape(assets) + "/img/og.png"}" data-svelte="svelte-1ttl8ld"><meta property="${"og:image:type"}" content="${"image/png"}" data-svelte="svelte-1ttl8ld">`, ""}

${validate_component(Warning, "Warning").$$render($$result, {}, {}, {
    default: () => {
      return `WARNING! This is a prototype. Data likely to contain inaccuracies.
`;
    }
  })}

${validate_component(ONSHeader, "ONSHeader").$$render($$result, { baseurl, path, lang }, {}, {})}

<main id="${"main"}" tabindex="${"-1"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(ONSFooter, "ONSFooter").$$render($$result, { baseurl, lang }, {}, {})}`;
});
export { _layout_reset as default };