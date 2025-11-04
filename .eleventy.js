module.exports = function(eleventyConfig) {
  // Copy static assets if present
  eleventyConfig.addPassthroughCopy("style.css");

  // Collection: posts
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByTag("posts")
  );

  // Filter: format a Date to YYYY-MM-DD
  eleventyConfig.addFilter("ymd", (dateObj) => {
    const d = new Date(dateObj);
    // toISOString is UTC; adjust if you want local. For consistency, UTC is fine.
    return d.toISOString().slice(0, 10);
  });

  // Shortcode: current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: { input: ".", includes: "_includes", output: "_site" }
  };
};
