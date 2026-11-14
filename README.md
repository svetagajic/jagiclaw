# JagicLaw

Sajt advokatske kancelarije JagicLaw (advokati Luka Jagić i Damjan Jagić, Beograd).
Cilj: da nas ljudi i firme nađu preko Google-a i AI asistenata i da se jave nama.

Napravljen u [Astro](https://astro.build), objavljuje se na Vercel-u.

## Pokretanje na računaru

```bash
npm install
npm run dev
```

Sajt je tada na http://localhost:4321.

## Gde se šta menja

| Šta | Gde |
| --- | --- |
| Telefon, e-mail, adresa, radno vreme, biografije | `src/data/kancelarija.ts` |
| Tekst jedne oblasti prava (usluge, česta pitanja) | `src/content/oblasti/<oblast>.md` |
| Nova oblast prava | novi `.md` fajl u `src/content/oblasti/` (kopirajte postojeći) |
| Početna strana | `src/pages/index.astro` |
| Stranica na engleskom | `src/pages/en/index.astro` |
| Boje, slova, zaglavlje i podnožje | `src/layouts/Base.astro` |

## Plan i šta je ostalo da se uradi

Sve što treba uraditi pre i posle objave, ko šta radi i otvorena pitanja: [PLAN.md](PLAN.md).
