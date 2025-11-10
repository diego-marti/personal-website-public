// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links'
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://diego-marti.github.io',
    base: '/personal-website-public',
    markdown: {
        rehypePlugins: [
            [rehypeExternalLinks, { 
                target: '_blank',
                rel: ['noopener', 'noreferrer']
            }]
        ]
    },
    integrations: [mdx()]
});
