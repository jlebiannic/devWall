# TP

## Nouveautés

defineProps<{ resource: Resource }>();

## Autres

reactive: pour les tableaux et les objets seulement
ref: fonctionne pour tout

## JSON server (cf. miragejs comme alternative)

npm install -g json-server

npm install -D json-server json-server-auth

### Lancer le server:

json-server db.json -m ./node_modules/json-server-auth -p 3005

## plugins

Typescript Vue Plugin (Volar)
Vue Language Feature (Volar)
vuetify-vscode
Prettier: default formater, format on save (setting)
REST Client (alternative postman ou insomnia)

## Router VueJs

npm install vue-router@4

## Bonnes pratiques

routes: lazy loading
routes: utiliser les objets avec l'attribut "name" pour naviquer (permet de changer facilement les urls sans changer le code)

## Pinia

npm i pinia
npm i pinia-plugin-persistedstate

## run build

npm run build
npx http-server dist

## Divers

Nuxt: SSR
Astro: https://astro.build/
Strapi: CMS
podcast: double-slash.dev
