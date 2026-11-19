// Podaci o kancelariji na jednom mestu. Svaka stranica čita odavde.

export const kancelarija = {
	// Kada je `false`, na vrhu sajta stoji žuta traka da su podaci primeri.
	podaciProvereni: true,

	// Sajt je skriven od Google-a (noindex) dok advokati ne pregledaju tekstove.
	// Kada sve bude pregledano, stavite `true`.
	vidljivZaPretrazivace: false,

	naziv: 'JagicLaw',
	punNaziv: 'Advokatska kancelarija JagicLaw',
	url: 'https://jagiclaw.rs',
	grad: 'Beograd',

	telefon: '060 092 9629', // kako se prikazuje na sajtu
	telefonMedjunarodni: '+381600929629', // za link "pozovi" i za Google
	email: 'office@jagiclaw.rs',
	adresa: 'Krfska 13/21',
	postanskiBroj: '11050',
	radnoVreme: 'Radnim danima, 08–17h',
	radnoVremeEn: 'Weekdays, 8 am – 5 pm',
	// Za Google: dani i sati u formatu koji pretraživači razumeju.
	radniDani: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
	otvara: '08:00',
	zatvara: '17:00',

	jezici: ['srpski', 'engleski'],

	// Kratko o kancelariji, za stranicu Advokati.
	prednosti: [
		'Mlad tim sa iskustvom iz međunarodnih kompanija i Big Four',
		'Pristup prilagođen klijentu, a po dogovoru i van redovnog radnog vremena',
		'Multidisciplinarni pristup: pravo i poslovanje zajedno',
		'Članovi Advokatske komore Srbije',
	],
	prednostiEn: [
		'A young team with experience in international companies and the Big Four',
		'Client-tailored approach, with meetings outside regular hours by appointment',
		'Multidisciplinary approach combining law and business',
		'Members of the Serbian Bar Association',
	],
};

export const advokati = [
	{
		ime: 'Luka Jagić',
		slug: 'luka-jagic',
		zvanje: 'Advokat',
		zvanjeEn: 'Attorney at law',
		foto: '/advokati/luka-jagic.jpg',
		kratko: '10 godina prakse u privrednom i radnom pravu i zaštiti podataka o ličnosti.',
		bio: [
			'Luka je advokat sa 10 godina prakse u privrednom pravu, radnom pravu i zaštiti podataka o ličnosti. Savetuje startape i etablirane kompanije, domaće i strane, tako da pravna strategija prati poslovne ciljeve klijenta i vodi ka praktičnim rešenjima.',
			'U svom radu spaja pravo i poslovanje: pomaže klijentima da reše složena pravna pitanja i da pri tom unaprede svoje poslovne interese.',
		],
		bioEn: [
			'Luka is an attorney with 10 years of practice across corporate, labour and data protection matters. He advises startups and established companies, both domestic and international, aligning legal strategy with business goals to deliver practical, outcome-driven solutions.',
			'He creates synergy between business and law, helping clients navigate complex legal issues while advancing their commercial interests.',
		],
	},
	{
		ime: 'Damjan Jagić',
		slug: 'damjan-jagic',
		zvanje: 'Advokat',
		zvanjeEn: 'Attorney at law',
		foto: '/advokati/damjan-jagic.jpg',
		kratko: 'Organizacija privrednih društava, poslovni ugovori i usklađenost poslovanja.',
		bio: [
			'Damjan je advokat sa iskustvom u organizaciji privrednih društava, poslovnim ugovorima i propisima koji se tiču svakodnevnog poslovanja firmi. Vodi klijente kroz osnivanje društva i prati ih u daljem radu, sa fokusom na rast poslovanja i smanjenje pravnih rizika.',
			'Komunikativan je i okrenut klijentu. Trudi se da razume ciljeve svakog klijenta i da mu pruži jasnu i praktičnu pravnu podršku za njihovo ostvarenje.',
		],
		bioEn: [
			'Damjan is an attorney experienced in corporate structuring, commercial agreements and the regulatory requirements of day-to-day business operations. He supports clients throughout company setup and ongoing compliance, with a focus on scalability and risk mitigation.',
			'He is communicative and client-oriented, with a proactive approach focused on understanding each client’s objectives and providing clear, practical legal support.',
		],
	},
];

export const telefonLink = `tel:${kancelarija.telefonMedjunarodni}`;
export const emailLink = `mailto:${kancelarija.email}`;
