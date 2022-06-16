export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/__layout-reset.svelte"),
	() => import("../../src/routes/build/__layout@reset.svelte"),
	() => import("../../src/routes/draw/__layout@reset.svelte"),
	() => import("../../src/routes/tables/__layout@reset.svelte"),
	() => import("../../src/routes/archive/IconBtn.svelte"),
	() => import("../../src/routes/build/index.svelte"),
	() => import("../../src/routes/draw/AreaMap.svelte"),
	() => import("../../src/routes/draw/Toolbar/DrawButtons.svelte"),
	() => import("../../src/routes/draw/Toolbar/EditButtons.svelte"),
	() => import("../../src/routes/draw/Toolbar/InfoBox.svelte"),
	() => import("../../src/routes/draw/Toolbar/ItemAccordion.svelte"),
	() => import("../../src/routes/draw/Toolbar/PostcodeSearch.svelte"),
	() => import("../../src/routes/draw/Toolbar/ProgressButtons.svelte"),
	() => import("../../src/routes/draw/index.svelte"),
	() => import("../../src/routes/draw/old_layout.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/lib/chart/BarChart.svelte"),
	() => import("../../src/routes/lib/chart/MapStatic.svelte"),
	() => import("../../src/routes/lib/chart/NumBlock.svelte"),
	() => import("../../src/routes/lib/chart/ProfileChart.svelte"),
	() => import("../../src/routes/lib/layout/Article.svelte"),
	() => import("../../src/routes/lib/layout/Banner.svelte"),
	() => import("../../src/routes/lib/layout/Cards.svelte"),
	() => import("../../src/routes/lib/layout/Content.svelte"),
	() => import("../../src/routes/lib/layout/Linkbox.svelte"),
	() => import("../../src/routes/lib/layout/ONSFooter.svelte"),
	() => import("../../src/routes/lib/layout/ONSHeader.svelte"),
	() => import("../../src/routes/lib/layout/Section.svelte"),
	() => import("../../src/routes/lib/layout/Titleblock.svelte"),
	() => import("../../src/routes/lib/layout/partial/Breadcrumb.svelte"),
	() => import("../../src/routes/lib/layout/partial/Card.svelte"),
	() => import("../../src/routes/lib/layout/partial/CardFeature.svelte"),
	() => import("../../src/routes/lib/layout/partial/CardSection.svelte"),
	() => import("../../src/routes/lib/layout/partial/Figure.svelte"),
	() => import("../../src/routes/lib/layout/partial/Headline.svelte"),
	() => import("../../src/routes/lib/layout/partial/Highlighted.svelte"),
	() => import("../../src/routes/lib/layout/partial/Meta.svelte"),
	() => import("../../src/routes/lib/layout/partial/Navbox.svelte"),
	() => import("../../src/routes/lib/layout/partial/Subhead.svelte"),
	() => import("../../src/routes/lib/ui/ButtonLink.svelte"),
	() => import("../../src/routes/lib/ui/Em.svelte"),
	() => import("../../src/routes/lib/ui/Icon.svelte"),
	() => import("../../src/routes/lib/ui/Select.svelte"),
	() => import("../../src/routes/lib/ui/Toggle.svelte"),
	() => import("../../src/routes/lib/ui/Warning.svelte"),
	() => import("../../src/routes/pbf_viewer.svelte"),
	() => import("../../src/routes/tables/BarChart.svelte"),
	() => import("../../src/routes/tables/MapAreas.svelte"),
	() => import("../../src/routes/tables/index.svelte")
];

export const dictionary = {
	"": [[0, 17], [1]],
	"build": [[2, 3, 7], [1]],
	"draw": [[2, 4, 15], [1]],
	"pbf_viewer": [[0, 47], [1]],
	"tables": [[2, 5, 50], [1]],
	"archive/IconBtn": [[0, 6], [1]],
	"draw/AreaMap": [[2, 4, 8], [1]],
	"draw/old_layout": [[2, 4, 16], [1]],
	"tables/BarChart": [[2, 5, 48], [1]],
	"tables/MapAreas": [[2, 5, 49], [1]],
	"draw/Toolbar/DrawButtons": [[2, 4, 9], [1]],
	"draw/Toolbar/EditButtons": [[2, 4, 10], [1]],
	"draw/Toolbar/InfoBox": [[2, 4, 11], [1]],
	"draw/Toolbar/ItemAccordion": [[2, 4, 12], [1]],
	"draw/Toolbar/PostcodeSearch": [[2, 4, 13], [1]],
	"draw/Toolbar/ProgressButtons": [[2, 4, 14], [1]],
	"lib/chart/BarChart": [[0, 18], [1]],
	"lib/chart/MapStatic": [[0, 19], [1]],
	"lib/chart/NumBlock": [[0, 20], [1]],
	"lib/chart/ProfileChart": [[0, 21], [1]],
	"lib/layout/Article": [[0, 22], [1]],
	"lib/layout/Banner": [[0, 23], [1]],
	"lib/layout/Cards": [[0, 24], [1]],
	"lib/layout/Content": [[0, 25], [1]],
	"lib/layout/Linkbox": [[0, 26], [1]],
	"lib/layout/ONSFooter": [[0, 27], [1]],
	"lib/layout/ONSHeader": [[0, 28], [1]],
	"lib/layout/Section": [[0, 29], [1]],
	"lib/layout/Titleblock": [[0, 30], [1]],
	"lib/ui/ButtonLink": [[0, 41], [1]],
	"lib/ui/Em": [[0, 42], [1]],
	"lib/ui/Icon": [[0, 43], [1]],
	"lib/ui/Select": [[0, 44], [1]],
	"lib/ui/Toggle": [[0, 45], [1]],
	"lib/ui/Warning": [[0, 46], [1]],
	"lib/layout/partial/Breadcrumb": [[0, 31], [1]],
	"lib/layout/partial/Card": [[0, 32], [1]],
	"lib/layout/partial/CardFeature": [[0, 33], [1]],
	"lib/layout/partial/CardSection": [[0, 34], [1]],
	"lib/layout/partial/Figure": [[0, 35], [1]],
	"lib/layout/partial/Headline": [[0, 36], [1]],
	"lib/layout/partial/Highlighted": [[0, 37], [1]],
	"lib/layout/partial/Meta": [[0, 38], [1]],
	"lib/layout/partial/Navbox": [[0, 39], [1]],
	"lib/layout/partial/Subhead": [[0, 40], [1]]
};