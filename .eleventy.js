const markdownMathJax = require('markdown-it-mathjax3');
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});
    eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownMathJax));
    return {
        markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
        dir: {
			input: "site",
			includes: "../_includes",
			data: "../_data",
			output: "./wwwroot"
		},
        pathPrefix: "/",
    };
}
