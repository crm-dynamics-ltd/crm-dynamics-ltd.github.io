import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://crm-dynamics-ltd.github.io/',
  integrations: [
    starlight({
      title: 'CRM Dynamics Docs',
      description: 'CRM Dynamics product documentation.',
      favicon: './src/assets/crmd-logo.png',
      logo: {
        src: './src/assets/crmd-logo.png',
      },
      social: {
        email: 'mailto:christian@crm-dynamics.co.uk',
        youtube: 'https://www.youtube.com/@crmdynamicslimited3905',
      },
      lastUpdated: true,
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'CRM Docs',
          autogenerate: { directory: 'DMS', collapsed: true },
        },
        {
          label: 'Quote Manager',
          autogenerate: { directory: 'Quote Manager', collapsed: true },
        },
        {
          label: 'Scheduler',
          autogenerate: { directory: 'Scheduler', collapsed: true },
        },
      ],
    }),
  ],
});
