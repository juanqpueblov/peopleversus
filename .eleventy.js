const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      // TODO: change to your real domain later (e.g., https://peopleversus.org)
      hostname: "https://juanqpueblov.github.io/peopleversus"
    }
  });

  // Static passthroughs
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy({ public: "/" }); // robots.txt, favicon, images, etc.

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByTag("posts")
  );

  // Filters/shortcodes
  eleventyConfig.addFilter("ymd", (dateObj) =>
    new Date(dateObj).toISOString().slice(0, 10)
  );

  eleventyConfig.addFilter("absoluteUrl", (path) =>
    pluginRss.absoluteUrl(path, "https://juanqpueblov.github.io/peopleversus")
  );

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Directories
  return {
    dir: { input: ".", includes: "_includes", output: "_site" }
  };
};
