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
	telefonEn: '+381 60 092 9629', // kako se prikazuje na engleskoj verziji
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

	// Početna strana, deo "O nama". Tekst je izabrao Damjan (19. 11. 2026).
	oNama: {
		naslov: 'Kancelarija okrenuta poslovanju',
		tekst: [
			'Mi smo Luka Jagić i Damjan Jagić, advokati iz Beograda. Verujemo da advokat ne treba da bude neko koga zovete tek kada je problem već nastao, već neko sa kim se savetujete pre nego što donesete važnu odluku.',
			'Zato radimo blisko sa klijentima, firmama, preduzetnicima i građanima. Svaki predmet vodimo zajedno, od prvog razgovora do kraja. Iza nas je deset godina advokatske prakse u privrednom i radnom pravu i zaštiti podataka o ličnosti, a kao mlad tim od dvoje advokata svakom predmetu posvećujemo punu pažnju.',
		],
	},

	// Početna strana, deo "Kako gledamo na pravo". NACRT: prepraviti po želji.
	pogledi: [
		{
			naslov: 'Pravo treba da služi poslu',
			tekst: 'Pravni savet vredi onoliko koliko pomaže da posao ide dalje. Pre nego što kažemo šta je rizično, pitamo šta želite da postignete, pa tražimo put da to uradite bezbedno.',
		},
		{
			naslov: 'Jasno, bez pravničkog jezika',
			tekst: 'Svaki dokument koji potpisujete treba da razumete. Objašnjavamo jednostavno i dajemo konkretnu preporuku, a ne spisak mogućnosti.',
		},
		{
			naslov: 'Bolje sprečiti nego voditi spor',
			tekst: 'Najjeftiniji spor je onaj koji se nikad ne desi. Zato se trudimo oko dobrih ugovora i jasnih pravila pre nego što problem nastane.',
		},
		{
			naslov: 'Uz klijenta kroz ceo život posla',
			tekst: 'Od osnivanja firme, preko svakodnevnog poslovanja, do rasta i novih tržišta. Kada poznajemo vaš posao, savet je brži i bolji.',
		},
	],

	// Engleska verzija istih tekstova, za /en/.
	oNamaEn: {
		naslov: 'A law office focused on business',
		tekst: [
			'We are Luka Jagić and Damjan Jagić, attorneys at law in Belgrade. We believe a lawyer should not be someone you call only once a problem has arisen, but someone you consult before you make an important decision.',
			'That is why we work closely with our clients: companies, entrepreneurs and individuals. We handle every matter together, from the first conversation to the end. We bring ten years of legal practice in corporate and employment law and data protection, and as a young team of two attorneys we give every matter our full attention.',
		],
	},
	poglediEn: [
		{
			naslov: 'Law should serve business',
			tekst: 'Legal advice is worth as much as it helps your business move forward. Before we tell you what is risky, we ask what you want to achieve, and then find a safe way to get there.',
		},
		{
			naslov: 'Clear, without legal jargon',
			tekst: 'You should understand every document you sign. We explain things simply and give you a concrete recommendation, not a list of options.',
		},
		{
			naslov: 'Better to prevent a dispute than to fight one',
			tekst: 'The cheapest dispute is the one that never happens. That is why we put the work into good contracts and clear rules before a problem arises.',
		},
		{
			naslov: 'With you through the life of your business',
			tekst: 'From incorporation, through day-to-day operations, to growth and new markets. When we know your business, our advice is faster and better.',
		},
	],

	// Kratko o kancelariji, za stranicu Advokati.
	prednosti: [
		'Pristup prilagođen klijentu, a po dogovoru i van redovnog radnog vremena',
		'Multidisciplinarni pristup: pravo i poslovanje zajedno',
	],
	prednostiEn: [
		'Client-tailored approach, with meetings outside regular hours by appointment',
		'Multidisciplinary approach combining law and business',
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
		kratko: 'Osnivanje i organizacija privrednih društava, poslovni ugovori i usklađenost poslovanja.',
		bio: [
			'Damjan je advokat koji radi na osnivanju i organizaciji privrednih društava, poslovnim ugovorima i propisima koji se tiču svakodnevnog poslovanja firmi. Prati klijente kroz osnivanje društva i u daljem radu, sa fokusom na rast poslovanja i smanjenje pravnih rizika.',
			'Komunikativan je i okrenut klijentu. Trudi se da razume ciljeve svakog klijenta i da mu pruži jasnu i praktičnu pravnu podršku za njihovo ostvarenje.',
		],
		bioEn: [
			'Damjan is an attorney working on corporate structuring, commercial agreements and the regulatory requirements of day-to-day business operations. He supports clients throughout company setup and ongoing compliance, with a focus on scalability and risk mitigation.',
			'He is communicative and client-oriented, with a proactive approach focused on understanding each client’s objectives and providing clear, practical legal support.',
		],
	},
];

export const telefonLink = `tel:${kancelarija.telefonMedjunarodni}`;
export const emailLink = `mailto:${kancelarija.email}`;
