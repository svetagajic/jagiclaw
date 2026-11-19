# Plan: sajt JagicLaw

**Cilj:** da nas ljudi i firme u Beogradu nađu preko Google-a i AI asistenata (ChatGPT, Gemini) i da se jave nama, a ne drugoj kancelariji.

**Gde smo sada (14. 11. 2026):** novi sajt je napravljen na grani `novi-sajt`. Radi samo lokalno i nije objavljen. Kontakt podaci i biografije su primeri, a pravni tekstovi nisu pregledani.

## Kako koristimo ovaj fajl

- `[ ]` znači da nije urađeno, `[x]` da je urađeno. Kada nešto završite, štiklirajte i commitujte.
- Uz svaku stavku piše ko je radi: **Advokati**, **Sveta** ili **Zajedno**.
- Kada se pojavi nova stvar o kojoj treba voditi računa, dopišite je ovde, da ništa ne ostane samo u porukama.

---

## 1. Pre objave (obavezno)

### Podaci o kancelariji (Advokati)

Sve se menja u jednom fajlu: `src/data/kancelarija.ts`.

- [x] Pravi telefon, e-mail, adresa i radno vreme (iz ponude, 19. 11. 2026)
- [ ] Odluka: da li dajemo i Viber/WhatsApp broj (ljudi u Srbiji rado šalju sliku dokumenta tako)
- [x] Biografije Luke i Damjana, na srpskom i engleskom (iz ponude; Damjan je od novembra 2026. advokat)
- [x] Fotografije oba advokata (iz ponude)
- [ ] Fotografije u većoj rezoluciji (sada su oko 600 px širine, pa su na velikim ekranima blago mutne)
- [ ] Logo u vektorskom formatu (SVG ili PDF od dizajnera); sada je PNG izvučen iz ponude, pa je sitan natpis „JAGIĆ LAW“ manje oštar
- [x] Staviti `podaciProvereni: true` (žuta traka je uklonjena)

### Pravni pregled tekstova (Advokati)

Tekstove je napisao Claude (AI). Svaku stranicu treba pročitati i ispraviti. Svaka oblast je jedan fajl u `src/content/oblasti/`.

Posebno proveriti ove konkretne tvrdnje:

| Fajl | Šta proveriti |
| --- | --- |
| `privredno-pravo.md` | Najmanji osnovni kapital za doo je 100 dinara; postupak registracije u APR |
| `radno-pravo.md` | Rok za tužbu protiv otkaza je 60 dana od dostavljanja rešenja; upozorenje pre otkaza; akt o sistematizaciji obavezan iznad 10 zaposlenih |
| `nepokretnosti.md` | Obavezna solemnizacija ugovora o prometu; izvršna klauzula u zakupu; faktička eksproprijacija i tužba za naknadu |
| `naplata-potrazivanja.md` | Zastarelost potraživanja između privrednih subjekata je 3 godine; izvršenje na osnovu fakture (verodostojne isprave) |
| `udruzenja.md` | Najmanje tri osnivača |
| `krivicno-pravo.md` | Pravo na branioca pre saslušanja i pravo da se ne odgovara na pitanja |
| `prekrsajno-pravo.md` | Rok od 8 dana; plaćanje polovine kazne; posledice upisa u Registar neplaćenih kazni |
| `poresko-pravo.md` | Rok za žalbu na poresko rešenje je 15 dana; žalba po pravilu ne odlaže plaćanje |
| `naknada-stete.md` | Zastarelost 3 godine od saznanja, a najkasnije 5 godina od nastanka štete |
| `zastita-podataka-o-licnosti.md` | Prijava povrede podataka Povereniku u roku od 72 sata; primena zakona na strane rukovaoce i obaveza predstavnika u Srbiji; odnos sa GDPR-om |
| `bankarska-uskladjenost.md` | Dokumenta za otvaranje računa firme sa stranim osnivačem (apostil, sudski tumač) |
| sve ostale | Opšti tekst i spisak usluga: da li zaista radite sve što piše? |

- [ ] Pročitane i ispravljene sve stranice oblasti (16)
- [ ] Pročitana početna strana, Advokati, Kontakt i stranica na engleskom (`/en/`)

### Pravila struke (Advokati)

- [ ] Proveriti sajt prema Kodeksu profesionalne etike advokata (pravila o oglašavanju i predstavljanju)
- [ ] Odluka o nazivu: „JagicLaw“, „Jagić Law“ ili zvanični naziv pod kojim ste upisani u imenik. Naziv treba da bude isti na sajtu, Google profilu i svuda gde vas ima. Logo kaže „JAGIĆ LAW“, a sajt piše „JagicLaw“.
- [ ] Ove rečenice su obećanja; zadržati ih samo ako su tačne:
  - „Na vašem predmetu radi advokat sa kojim ste razgovarali, od prvog sastanka do kraja.“
  - „Pre početka rada dogovaramo obim posla i način obračuna naknade.“
- [ ] Politika privatnosti, po Zakonu o zaštiti podataka o ličnosti. Potrebna je čim ljudi šalju dokumente ili uključimo analitiku ili kontakt formu.

### Tehnika (Sveta)

- [ ] Pregledati kod na grani `novi-sajt` i otvoriti pull request ka `main`
- [ ] Povezati domen `jagiclaw.rs` na Vercel (https, preusmerenje `www` → bez `www` ili obrnuto)
- [ ] Zameniti staru `public/favicon.ico` (nova `favicon.svg` već postoji)
- [ ] Napraviti sliku za deljenje linka (Open Graph, 1200×630), da link na Viberu ili Facebook-u ima lep pregled
- [ ] Proveriti da Vercel build koristi Node 22.23.4 ili noviji (kao u `package.json`)
- [ ] Odluka šta sa starim vodičem o prekršajnom nalogu koji je u `git stash` (može da postane prvi članak, vidi deo 3)
- [ ] **Poslednji korak:** staviti `vidljivZaPretrazivace: true` u `src/data/kancelarija.ts`. Tek tada Google sme da prikazuje sajt.

---

## 2. Dan objave (Zajedno)

- [ ] **Google Business Profile** za kancelariju: kategorija „Advokat“, adresa, radno vreme, telefon, link na sajt, fotografije. Ovo je **najvažnije** za pretrage tipa „advokat Beograd“ i za prikaz na Google mapi.
- [ ] **Google Search Console:** dodati sajt i poslati `https://jagiclaw.rs/sitemap-index.xml`
- [ ] **Bing Webmaster Tools:** isto (ChatGPT pretraga se delom oslanja na Bing)
- [ ] Proveriti strukturirane podatke u Google-ovom alatu Rich Results Test
- [ ] Proveriti sajt na telefonu: da li dugmad „Pozovite“ i „E-mail“ rade
- [ ] Odluka o analitici (koliko ljudi dolazi i odakle). Predlog: Vercel Analytics ili Plausible, jer ne traže kolačiće ni baner za pristanak.

---

## 3. Prva tri meseca: rast vidljivosti

### Članci i vodiči (Advokati pišu, Sveta objavljuje)

Google i AI asistenti najviše prikazuju stranice koje direktno odgovaraju na jedno konkretno pitanje. Cilj: 1–2 članka nedeljno, svaki na jedno pitanje, sa kratkim odgovorom na vrhu.

Ideje za početak:

- [ ] Šta ako ne platim prekršajni nalog? (nacrt već postoji u `git stash`)
- [ ] Kako osnovati doo: koraci, dokumenta i troškovi
- [ ] Dobio sam otkaz: šta sada i koji su rokovi
- [ ] Šta proveriti pre kupovine stana
- [ ] Kako naplatiti neplaćenu fakturu
- [ ] Ugovor o radu ili ugovor o delu: razlike i rizici
- [ ] Pozvan sam u policiju: koja su moja prava
- [ ] How to open a company in Serbia as a foreigner (na engleskom)

### Ostalo

- [ ] Google recenzije: zamoliti zadovoljne klijente da ostave recenziju (prethodno proveriti da li to pravila struke dozvoljavaju)
- [ ] Upis u imenik Advokatske komore i poslovne imenike, sa **istim** nazivom, adresom i telefonom svuda
- [ ] Više stranica na engleskom, posebna za svaku glavnu uslugu za strance
- [ ] Kontakt forma na sajtu (Sveta; traži malu serversku funkciju i politiku privatnosti)
- [ ] Jednom mesečno pogledati Search Console: koje pretrage dovode ljude, i o tome pisati sledeće članke

---

## 4. Otvorena pitanja (treba da odlučimo)

- [ ] Konačan naziv kancelarije na sajtu (vidi „Pravila struke“)
- [ ] Da li na sajtu pišemo cene ili okvirne iznose za jednostavne usluge (npr. osnivanje doo)?
- [ ] Ko odgovara na upite sa sajta i za koliko vremena?
- [ ] Ko piše članke, a ko ih pregleda pre objave?
- [ ] Da li nam treba posebna stranica za svaku oblast i na engleskom?

---

## 5. Kako radimo sa kodom

- `main` je ono što je **uživo** na sajtu (Vercel automatski objavljuje svaki push na `main`).
- Svaka nova stvar se radi na **posebnoj grani**, pa preko **pull request-a**. Sveta pregleda, a kad je sve u redu, spaja se u `main`.
- Tekstovi oblasti su obični `.md` fajlovi u `src/content/oblasti/`. Advokati mogu da ih menjaju i direktno na GitHub-u, bez programiranja.
- Gde se šta menja na sajtu, piše u `README.md`.
