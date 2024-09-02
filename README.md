# Installation des paquets npm

```
npm install
```

# Démarrage de l'application

```
npm start
```

Application disponible en local sur le port 8070.

# Contenu évaluation

## 1 : Cloner le projet (1pt)

Le projet devra être cloné sur votre machine locale à partir de l'URI suivante :

SSH :

```bash
git clone git@github.com:Tramb-dev/eval-productivity.git
```

ou bien
HTTPS :

```bash
git clone https://github.com/Tramb-dev/eval-productivity.git
```

## 2 : Créer une branche (1pt)

Vous créerez une branche que vous appellerez "eval" et vous vous positionnerez dessus.
Ce sera votre branche de travail pour l'évaluation. Vous la fusionnerez avec la branche "main" à la fin de l'évaluation.

Basculez sur cette branche.

## 3 : Installer les dépendances (1pt)

Installez les dépendances du projet en utilisant le gestionnaire de paquet `npm`.

## 4 : Documenter le code (2pts)

Si vous êtes bloqué sur cette question, passez à la suivante.

1. Vous utiliserez JSDoc, dont la documentation peut être consultée [ici](https://jsdoc.app/about-getting-started.html)
2. Ajoutez vos modifications au dépôt sur la branche "eval" et faire un commit avec le titre de la question comme message.

## 5 : Linter le code (2pts)

Si vous êtes bloqué sur cette question, passez à la suivante.

1. Vous utiliserez ESLint pour linter le code (ESLint est déjà installé dans le projet). La documentation est consultable [ici](https://eslint.org/docs/user-guide/getting-started)
2. Ajoutez vos modifications au dépôt sur la branche "eval" et faire un commit avec le titre de la question comme message.

## 6 : Embellir le code (1pt)

Si vous êtes bloqué sur cette question, passez à la suivante.

1. En utilisant Prettier, dont la documentation peut être trouvée [ici](https://prettier.io/docs/en/install.html), vous embellirez le code afin qu'il respecte les bonnes pratiques.
2. Ajoutez vos modifications au dépôt sur la branche "eval" et faire un commit avec le titre de la question comme message.

## 7 : Renforcer le code (3pts)

Si vous êtes bloqué sur cette question, passez à la suivante.

Dans le projet a été intégrée une faille de sécurité béante...

Insérez la chaîne de caractères suivante dans le champ du formulaire :

```javascript
"<script>for(let i = 1; i < 20; i++) { alert(`Coucou ${i} fois !`) }</script>";
```

1. Corrigez cette faille de sécurité.
2. Ajoutez vos modifications au dépôt sur la branche "eval" et faire un commit avec le titre de la question comme message.

## 8 : Modulariser le code (3pts)

Si vous êtes bloqué sur cette question, passez à la suivante.

Le code de l'application utilise deux fonctions principales permettant de récupérer des données depuis une API. Vous ferez en sorte de :

1. Séparer les deux fonctions dans deux fichiers JS distincts qui exporteront le code de chaque fonction (par un export par défaut ou un export nommé) ;
2. Créer un fichier main.js que vous placerez dans le dossier /public/js ;
3. Importer les deux fonctions dans le fichier main.js ;
4. Modifier le code du fichier index.html afin qu'il charge le script main.js ;
5. Ajoutez vos modifications au dépôt sur la branche "eval" et faire un commit avec le titre de la question comme message.

## 9 : Tester le code (3pts)

Si vous êtes bloqué sur cette question, passez à la suivante.

1. En utilisant Jest, qui est installé dans le projet, vous créerez un test unitaire pour chacune des deux fonctions présentes dans le fichier /public/js/functionsToTest.js (returnAnObject et multiplyAllByTwo).
2. Ajoutez vos modifications au dépôt sur la branche "eval" faire un commit avec le titre de la question comme message.

Vous vérifierez bien que vos tests unitaires passent tous.

## 10 : Fusionner les branches (1pt)

Si vous êtes bloqué sur cette question, passez à la suivante.

Vous fusionnerez votre branche "eval" avec la branche "main". Si vous avez des conflits de fusion, corrigez les.

## 11 : Créer un dépôt distant (1pt)

Si vous êtes bloqué sur cette question, passez à la suivante.

Sur GitHub ou Bitbucket, à votre convenance, vous créerez un dépôt distant public afin de pouvoir y envoyer le code de votre application.

## 12 : Sauvegarder le code en ligne (1pt)

Si vous êtes bloqué sur cette question, passez à la suivante.

Changer l'url du dépôt distant (la notre) par celle de votre dépôt local (la votre) et envoyez le code de votre branche "main" sur votre dépôt distant nouvellement créé.

# Après l'évaluation

Une fois l'évaluation terminée, vous déposerez le lien vers votre dépôt distant sur la plateforme LMS de l'IFOCOP et vous m'enverrez un courriel à mon adresse bertrand.ravier@virtuoworks.com en mettant en copie mhamdouni@ifocop.fr en précisant dans l'objet de l'e-mail les informations suivantes : [NOM] [prénom] [Promotion DIWJS]

Si vous **n'avez pas réussi** à créer le dépôt distant ou pousser votre branche sur le dépôt distant, vous pouvez créer une archive zip avec votre dossier de travail **SANS le SOUS-DOSSIER** `node_modules` puis la déposer sur la plateforme LMS de l'IFOCOP et me l'envoyer par courriel à l'adresse bertrand.ravier@virtuoworks.com et en copie à mhamdouni@ifocop.fr en précisant dans l'objet de l'e-mail les informations suivantes : [NOM] [prénom] [Promotion DIWJS]
