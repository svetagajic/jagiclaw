// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jagiclaw.rs',
	trailingSlash: 'always',
	integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
	build: {
		// Stilovi idu direktno u svaku stranicu, a ne u poseban .css fajl.
		// Razlog: dok traje objava, Vercel nakratko može da vrati "ne postoji" za novi .css fajl
		// i da kaže pregledaču da taj odgovor čuva godinu dana, pa stranica ostane bez stilova.
		inlineStylesheets: 'always',
	},
});
