# Entités, relations et diagrammes

## Rappels

Lors de la phase de conception d'un projet, il est important de réfléchir aux données nécessaires au projet et à leur organisation.

La réflexion sur les données se fait en plusieurs temps :

Une analyse générale qui permet de déterminer :

- les différents éléments à utiliser, ce sont les **entités**
- les données qui composent chaque entité, ce sont les **propriétés** ou **attributs**
- le ou les propriétés qui permettent d'identifier l'entité de manière unique : c'est l'**identifiant** (parfois nommé **déterminant** ou **discriminant**) qui doit être :
  - _univalué_ : à une entité n'est représentée que par un seul identifiant
  - _discriminant_ : à un identifiant ne correspond qu'à une seule entité
  - _stable_ : pour une entité la valeur de l'identifiant ne dois pas être modifiée, jusqu'à la destruction de l'entité
  - _minimal_ : pour un identifiant composé (identifiant sur plusieurs propriétés), la suppression d'un  de ces composants lui ferait perdre son caractère discriminant
- les **relations** qui existent entre les entités
- les règles qui portent sur les relations, se sont les **cardinalités**

Cette analyse permet la création d'un diagramme, le MCD (modèle conceptuel de données), qui est une représentation graphique normalisée des données et de leurs relations.  
Ce schéma permet de valider le modèle de données entre le client et le prestataire. Jusque là aucune notion technique n'intervient.

Lorsque l'analyse est validée, on peut réaliser le dictionnaire de données qui est une défition technique des entités, ce qui permettra de construire la base de données :

- chaque entité va devenir une **table**
- pour chaque entité, une propriété devient un **champ**
- pour chaque champ on précise :
  - le **type de donnée** (entier, chaîne de caractères...)
  - ses **spécificités** ou **contraintes** (clé primaire, unique, non nul...)
  - une description
  - un commentaire si besoin.

## Étapes

> Note : chaque étape peut être documentée.

### Étape 1 : entités

À l'aide du brief projet, du cahier des charges, des maquettes..., identifier les entités nécessaires au projet.

Une entité = un bloc d'informations.

### Étape 2 : propriétés

Toujours à l'aide des documents disponibles, identifier les propriétés de chaque entité.

Une propriété = une information / une donnée dans une entité.

### Étape 3 : relations

Maintenant que l'on connaît les entités et les propriétés, il faut réfléchir aux liens qui peuvent exister entre les différentes entités.

### Étape 4 : cardinalités

Pour chaque relation, on doit identifier combien d'entités A sont liés à une entité B (et inversement).

Peut-on identifier des contraintes particulières sur les relations ?

### Étape 5 : MCD

Nous disposons de toutes les informations, on peut réaliser le MCD, par exemple avec l'outil [mocodo.net](https://www.mocodo.net/).

### Étape 6 : établir le dictionnaire de données

À présent on connaît les différentes entités de notre projet, les propriétés qui les composent et les liens entre les entités.

On connaît le type de base de données utilisée dans le projet. On a donc tous les élément nécessaires pour réaliser de dictionnaire de données.
