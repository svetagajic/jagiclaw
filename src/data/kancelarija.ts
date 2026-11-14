// Podaci o kancelariji na jednom mestu. Svaka stranica čita odavde.
//
// VAŽNO: telefon, e-mail i adresa ispod su PRIMERI. Zamenite ih pravim podacima
// i stavite `podaciProvereni: true`. Dok je `false`, na vrhu sajta stoji žuta traka
// koja na to podseća.

export const kancelarija = {
	podaciProvereni: false,

	// Sajt je skriven od Google-a (noindex) dok advokati ne pregledaju tekstove.
	// Kada sve bude pregledano, stavite `true`.
	vidljivZaPretrazivace: false,

	naziv: 'JagicLaw',
	punNaziv: 'Advokatska kancelarija JagicLaw',
	url: 'https://jagiclaw.rs',
	grad: 'Beograd',

	telefon: '+381 60 000 0000', // PRIMER
	email: 'kontakt@jagiclaw.rs', // PRIMER
	adresa: 'Ulica i broj', // PRIMER
	postanskiBroj: '11000', // PRIMER
	radnoVreme: 'Ponedeljak – petak, 9–17h', // PRIMER

	jezici: ['srpski', 'engleski'],
};

export const advokati = [
	{
		ime: 'Luka Jagić',
		zvanje: 'Advokat',
		// PRIMER: upišite obrazovanje, iskustvo, oblasti kojima se najviše bavi i jezike.
		bio: '[Biografija: obrazovanje, godine iskustva, oblasti kojima se najviše bavi, jezici.]',
	},
	{
		ime: 'Damjan Jagić',
		zvanje: 'Advokat',
		bio: '[Biografija: obrazovanje, godine iskustva, oblasti kojima se najviše bavi, jezici.]',
	},
];

export const telefonLink = `tel:${kancelarija.telefon.replace(/\s/g, '')}`;
export const emailLink = `mailto:${kancelarija.email}`;
