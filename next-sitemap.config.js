/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.geekytechh.in', // Change this to your website's URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    outDir: './public', // Output directory for the sitemap file
    exclude: ['/admin*', '/api/*'], // Optional: Exclude pages you don't want in the sitemap
  };
  