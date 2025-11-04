	const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: { hostname: "https://juanqpueblov.github.io/peopleversus" }
  });

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy({ public: "/" });

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByTag("posts")
  );

  eleventyConfig.addFilter("ymd", (d) => new Date(d).toISOString().slice(0,10));
  eleventyConfig.addFilter("absoluteUrl", (p) =>
    pluginRss.absoluteUrl(p, "https://juanqpueblov.github.io/peopleversus")
  );
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    pathPrefix: "/peopleversus"
  };
};
