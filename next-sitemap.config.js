/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.elephantgroup.cl",
  generateRobotsTxt: false,
  trailingSlash: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/api/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/portfolio/"),
    await config.transform(config, "/contact/"),
    await config.transform(config, "/quote/"),
    await config.transform(config, "/services/letreros/"),
    await config.transform(config, "/services/senaleticas/"),
    await config.transform(config, "/services/adhesivos/"),
  ],
};
