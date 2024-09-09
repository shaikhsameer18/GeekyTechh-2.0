// scripts/generate-sitemap.ts
import { promises as fs } from 'fs';
import { globby } from 'globby';

(async () => {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('.tsx', '')
            .replace('/index', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${`https://www.geekytechh.in${route}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  await fs.writeFile('public/sitemap.xml', sitemap.trim());
})();