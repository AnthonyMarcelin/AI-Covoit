La mise en page sur ce markdown ne fonctionne pas partout ( pas le temps de m'occuper de ce détail )

# Conception

ℹ️ *J1 : en classe à 9h*

Sur la partie **conception** on attend un ou plusieurs documents présentants :

- [x] Architecture
  - [x] Choisir et justifier l'architecture de l'application complète
  - [x] Choisir et justifier les technos (framework, librairies, db, etc.)
- [x] Analyse du besoin
  - [x] Écrire les user stories et / ou un schéma des cas d'utilisation (use cases)
- [x] Modélisation
  - [x] Schéma d'architecture
  - [x] Un MCD peut aider...
  - [x] ERD (Diagramme d'entités associations)
- [ ] Plan de test
  - [ ] Définir les règles pour les tests pour l'inscription et la connexion
- [ ] Relecture, `commit` et `push`

# En vrac

On va partir sur une architecture en microservices. Une pour l'authentification, une pour l'API, une pour la bdd. Cela nous permettra de la déployer plus facilement. Et dans le cas d'une image dockerisée pour la bdd, de faciliter la scalabilité horizontale pour faire face aux demandes de connexions pour un coût moindre.

## Tables
- Utilisateur (( avec booleen si passager ou conducteur) => on annule pour le moment, trop compliqué à mettre en place dans un laps de temps aussi court )
- Trajet : Risque de faire beaucoup de données car possibilité quasi infinie. Limiter le nombre de place de passager
- Réservation : Avec les clés étrangères user_id, trajet_id, la date de résa et son statut ( confirmé, en cours, annulé, terminé...)
- Avis : l'avis sera donné uniquement sur l'utilisateur, pas le trajet

## BDD
- Grand nombre de données + scalabilité horizontale -> Le choix premier serait mongoDB mais comment gérer les relations entre les tables
- A voir vec le lead dev si on peut rester sur postgres pour gérer les relations

## Archi utilisée
- Bdd : MongoDB
- Docker + microservices


# Use case :
- Un user peut proposer peut proposer un ou plusieurs trajets
- Un user peut faire une ou plusieurs réservations
- Un user peut être visiteur, conducteur, passager ou administrateur
- Un user peut poster un avis sur un user
- Un user peut modifier, supprimer ou ajouter un trajet

- Un trajet est proposé par aucun, un ou plusieurs utlisateurs
- Un trajet peut avoir une ou plusieurs réservations

- Une réservation ne comprend qu'un seul trajet
- Une réservation comprend plusieurs utilisateurs ( au moins un conducteur et un passager )

- Un avis est posté par un ou plusieurs users


# Respect du cahier des charges point par point

## Contraintes et spécifications

### Forte scalabilité possible : l'application doit être capable de gérer un grand nombre d'utilisateurs et d'être hébergée sur plusieurs serveurs
- Utilisation de mongoDB -> Problématique de ne pas faire de tables relationnelles

### Sécurité avancée : l'application devra gérer plusieurs types d'utilisateurs avec des des droits différents
- Créer un champ role dans la table user ?

### API documentée : des services externes pourront utiliser l'API de l'application
- Utiliser OpenAPI / Swagger

### Fiabilité des évolutions : l'application devra être facilement maintenable et évolutive en gardant une qualité irréprochable
- CI/CD : Utlisation des github actions par ex. Parrallèlement à une architecture dockerisée

### Volumétrie des données : l'application devra pouvoir gérer un grand nombre de données
- Utilisation de mongoDB pour le volume de données et la scalabilité horizontale ( point 1 )

### Temps réel : réception des données, telles que l'emplacement des utilisateurs, en temps réel sur l'application
- A voir avec le chef de projet pour intégrer cet feature dans une version suivante  (manque de temps pa rrapport au temps imparti au projet )

### Notifications : envoi de notifications en cas de réservation, nouveau trajet, etc.
- A voir avec le chef de projet pour intégrer cet feature dans une version suivante  (manque de temps pa rrapport au temps imparti au projet )

### Conteneurisation : l'application devra être conteneurisée pour faciliter le déploiement
- Utilisation de Docker avec des microservices => API / auth / BDD

### Stack technique : la seule contrainte est le TypeScript. Le reste est à votre convenance.
- Utilisation de typescript

## Fonctionnalités

### Inscription et connexion
- Avoir un microservice pour l'authentification et la connexion de l'utlisateur

### Création et modification de trajets
- Si l'utilisateur est connecté, il devra pouvoir modifier, supprimer ou ajouter un trajet