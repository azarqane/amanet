# amanet
**Amanet** est une plateforme SaaS e-learning moderne, multilingue (🇫🇷🇬🇧🇸🇦), conçue pour permettre à des créateurs de rédiger des ateliers pédagogiques en Markdown, à des administrateurs de les valider et organiser, et à des apprenants de les consulter avec une interface fluide et interactive.

Le frontend utilise la librairie `i18next` pour la gestion des traductions. Les fichiers de langue se trouvent dans `apps/frontend/src/locales/` et sont chargés dans `apps/frontend/src/i18n.ts`.

```ts
import i18n from './i18n'; // initialisation
```

Les langues disponibles sont le français (`fr`), l'anglais (`en`) et l'arabe (`ar`).
Le changement de langue se fait en appelant `i18next.changeLanguage('fr' | 'en' | 'ar')`.
