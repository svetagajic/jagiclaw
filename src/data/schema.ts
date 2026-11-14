// Strukturirani podaci (schema.org) za Google i AI asistente.
// Govore pretraživačima da je ovo advokatska kancelarija u Beogradu, ko su advokati i kako se kontaktira.
import { kancelarija, advokati } from './kancelarija';

export function kancelarijaSchema(oblasti: string[] = []) {
	return {
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		'@id': `${kancelarija.url}/#kancelarija`,
		name: kancelarija.punNaziv,
		alternateName: kancelarija.naziv,
		url: kancelarija.url,
		// Kontakt podaci idu u schema tek kada su pravi, da Google ne zapamti primere.
		...(kancelarija.podaciProvereni && {
			telephone: kancelarija.telefon,
			email: kancelarija.email,
			address: {
				'@type': 'PostalAddress',
				streetAddress: kancelarija.adresa,
				postalCode: kancelarija.postanskiBroj,
				addressLocality: kancelarija.grad,
				addressCountry: 'RS',
			},
		}),
		areaServed: [
			{ '@type': 'City', name: 'Beograd' },
			{ '@type': 'Country', name: 'Srbija' },
		],
		knowsLanguage: ['sr', 'en'],
		employee: advokati.map((a) => ({ '@type': 'Person', name: a.ime, jobTitle: a.zvanje })),
		...(oblasti.length && { knowsAbout: oblasti }),
	};
}

export function faqSchema(faq: { pitanje: string; odgovor: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((f) => ({
			'@type': 'Question',
			name: f.pitanje,
			acceptedAnswer: { '@type': 'Answer', text: f.odgovor },
		})),
	};
}
