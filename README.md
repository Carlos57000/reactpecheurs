# Création d'une api front React nommée "reactpecheurs" pour afficher le back du projet "pecheurs" créé avec le framework Symfony.


## 1 - Création du projet React

Il faut exécuter la commande suivante dans un terminal (idéalement dans le répertoire du serveur Apache en faisant au préalable cd /var/www/html) pour créer le projet React avec tous les paquets de base :

### create-react-app  reactpecheurs


## 2 - Importation dans phpmyadmin de la base de données sql "pecheur" créée au préalable et indiquée dans le fichier .env du projet Symfony associé 


## 3 - Création du formulaire permettant de publier une prise 

On crée dans reactpecheurs/src un fichier nommé Postform.js dans lequel on rédige le nécessaire pour publier une prise (nom, prénom, titre du message, message, photo de la prise, taille du poisson, poids du poisson et sélection dans un menu déroulant de l'espèce à laquelle appartient le poisson).

Nous avons fait le choix d'opter pour la méthode "axios" pour l'envoi des données ; ce qui implique de l'installer dans le terminal du projet à l'aide de la commande "sudo npm install axios --save" 

Ensuite on fait figurer en début de fichier "import axios from 'axios';"

Dans le "submitHandler", on pense à indiquer la route du projet Symfony permettant d'accéder aux posts dans le "axios.post('http://127.0.0.1:8000/api/posts.json', this.state)".


## 4 - Création du formulaire permettant de publier un commentaire

Les étapes sont relativement similaires au point ##3, via la création du fichier "CommentaireForm.js".

On veillera simplement à indiquer la route API plaform adéquate afin d'éviter toute erreur IRI.


## 5 - Fichier App.js

On y fait figurer en début de fichier "import PostForm from './PostForm';" et "import CommentaireForm from './CommentaireForm';"

On pense à indiquer via fetch la route permettant d'afficher :

- les posts : http://127.0.0.1:8000/api/posts.json'
- les commentaires : http://127.0.0.1:8000/api/commentaires.json'

Dans return(), on peut y faire figurer le contenu de notre choix, à savoir par exemple :
- un logo

- une image

- un audio

- <PostForm /> suivi de <CommentaireForm />

- {this.state.items.map(post => (<h4> id {post.id} : <br /> titre : {post.titre}, <br /> nom poisson : {post.nom_poisson}, <br /> photo poisson : {post.photo_poisson}, <br /> taille poisson : {post.taille_poisson}, <br /> poids poisson : {post.poids_poisson}, <br /> message : {post.contenu_post}, <br /> <br /><br /> nom Auteur : {post.nom_auteur}, <br /> prénom Auteur : {post.prenom_auteur}, <br /> Créé le : {post.created_at} </h4>))} afin d'afficher de manière structurée (au choix) les posts présents en base de données

- en faire de même avec commentaire.id au lieu de post.id (et ainsi de suite) pour afficher les Commentaires


## 5 - Serveurs

Place maintenant à l'affichage en démarrant les deux serveurs des deux projets.

On ouvre dans un éditeur de code le projet symfony et dans le terminal on saisit la commande "sudo symfony server:start" ; ce qui lancera le projet sur le port 8000 du serveur local

Idem pour le projet React en saisissant la commande "sudo npm start". Le front s'affiche alors sur le port 3000 et on peut y compléter les formulaires tout en affichant les données.















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
