import { defineConfig } from 'dumi';
import { version } from './package.json';

export default defineConfig({
  favicons: ['https://avatars.githubusercontent.com/u/49136103?s=200&v=4'],
  define: {
    'process.env.UTILS_VERSION': version,
  },
  themeConfig: {
    name: '@alitojs',
    logo: 'https://avatars.githubusercontent.com/u/49136103?s=200&v=4',
    socialLinks: {
      github: 'https://github.com/alitojs/utils',
    },
  },
  outputPath: 'docs-dist',
  sitemap: { hostname: 'https://github.com/alitojs/utils' },
});
