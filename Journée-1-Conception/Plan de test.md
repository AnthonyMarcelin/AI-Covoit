# Valider les champs obligatoires

- lastname et firstname en not null
- email à vérifier avec un regex, doit être unique en bdd
- password : doit etre hash et respecter certains criteres

# Numéro de tel
- Vérifier s'il est valide

# Mot de passe 
- doit respecter les règles de hash et de complexité

# Inscription
- Mail de confirmation avec validation ? ( pour une version ultérieure )

# A la connexion de l'utilisateur
- Verifier l'email et password
- Si le user n'existe pas, envoyer vers la page d'inscription

# A la connexion 
- Créer une session sécurisée après la connexion

# A la déconnexion
- Vérifier que le user est bien déco

# TEMPS IMPARTI? PAS LE TEMPS DE FINIR