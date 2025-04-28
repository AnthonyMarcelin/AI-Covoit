# En vrac

## Tables
- Utilisateur ( avec booleen si passager ou conducteur)
- Trajet : Risque de faire beaucoup de données car possibilité quasi infinie. Limiter le nombre de place
- Réservation : Avec les clés étrangères user_id, trajet_id, la date de résa et son statut ( confirmé, en cours, annulé, terminé...)
- Avis : l'avis sera donné uniquement sur l'utilisateur, pas le trajet

## BDD
- Grand nombre de données + scalabilité horizontale -> Le choix premier serait mongoDB mais comment gérer les relations entre les tables
- A voir vec le lead dev si on peut rester sur postgres pour gérer les relations

## Archi utilisée
- 

# Use case :
- Un user peut proposer peut proposer un ou plusieurs trajets
- Un user peut faire une ou plusieurs réservations
- Un user peut être visiteur, conducteur, passager ou administrateur
- Un user peut poster un avis sur un user

- Un trajet est proposé par aucun, un ou plusieurs utlisateurs
- Un trajet peut avoir une ou plusieurs réservations

- Une réservation comprend un seul trajet
- Une réservation comprend plusieurs utilisateurs ( au moins un conducteur et un passager )

- Un avis est posté par un ou plusieurs users
