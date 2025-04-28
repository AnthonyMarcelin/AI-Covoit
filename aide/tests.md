# Tests pour les API

Il existe plusieurs types de tests (unitaires, d'intégration, de bout en bout...)

Chaque type de test correspond à un besoins spécifique :

- valider une fonctionnalité : test unitaire
- valider une partie du système : test d'intégration
- valider le comportement de l'application : test de bout en bout

Si l'API est complexe, il peut être intéressant de faire un maximum de tests.

Si l'API est relativement simple, les tests de bout en bout peuvent être intéressants.

Ici vous pouvez faire des tests :

- soit en JS avec un environnement comme Jest (faire des `fetch()` et tester les réponses)
- soit à partir d'un outil type ThunderClient, RestClient, Insomnia et :
  - préciser l'outil utilisé
  - ajouter les fichiers de tests (les outils permenttent d'exporter les requêtes) au projet
