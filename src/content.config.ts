import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Svaka oblast prava je jedan .md fajl u src/content/oblasti/ i dobija svoju stranicu
// na /oblasti/<ime-fajla>/. Svaka stranica cilja jednu pretragu, npr. "advokat za radno pravo Beograd".
const oblasti = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/oblasti' }),
	schema: z.object({
		naziv: z.string(), // "Radno pravo"
		naslov: z.string(), // H1 na stranici
		seoNaslov: z.string().max(70), // <title>, ono što Google prikaže kao naslov
		opis: z.string().max(170), // meta description, tekst ispod naslova u Google-u
		kratko: z.string(), // jedna rečenica za karticu na početnoj
		grupa: z.enum(['osnovna', 'dodatna']),
		redosled: z.number(),
		usluge: z.array(z.string()).min(1),
		faq: z.array(z.object({ pitanje: z.string(), odgovor: z.string() })).default([]),
	}),
});

export const collections = { oblasti };
