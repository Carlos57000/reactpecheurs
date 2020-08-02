import React from 'react';
import PostForm from './PostForm';
import CommentaireForm from './CommentaireForm';

  class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      coms: []
    };
  }

  componentDidMount()
  {
    fetch("http://127.0.0.1:8000/api/posts.json")
      .then(response => response.json())
      .then(posts => this.setState({ items: posts }));  

      fetch("http://127.0.0.1:8000/api/commentaires.json")
      .then(res => res.json())
      .then(commentaires => this.setState({ coms: commentaires }));  
  }
  
  
  render() 
  {
    return(
      <div className="App">
        <img src= {require('./logo.png')} alt="logo" height={200} width={360} /> <br /> <br /> <br /> 
        
        <h2>Bienvenue sur LE blog référence des plus belles prises (de poisson, pas de cinéma !)</h2> <br /> 
        
        <media>
        <div>
        <h4>Et maintenant entonnons tous en choeur l'hymne officiel de tous les Fishermen en herbe !</h4> 
        <audio controls className="player" preload="false">
        <source src= {require('./Hackathontheme.mp3')} />
        </audio>
        </div>
        </media> <br /> <br /> <br />

        <PostForm /> <br /> <br /> <br />
        <CommentaireForm /> <br /> <br /> <br /><br />

        <h2>--Affichage des POSTS--</h2>
        {this.state.items.map(posts => (<h4> id : {posts.id} <br /> titre : {posts.titre}, <br /> nom poisson : {posts.nom_poisson}, <br /> photo poisson : {posts.photo_poisson}, <br /> taille poisson : {posts.taille_poisson}, <br /> poids poisson : {posts.poids_poisson}, <br /> message : {posts.contenu_post}, <br /> <br /><br /> nom Auteur : {posts.nom_auteur}, <br /> prénom Auteur : {posts.prenom_auteur}, <br /> Créé le : {posts.created_at} </h4>))}

        <br /> <br /> <br /><br />


        <h2>--Affichage des COMMENTAIRES--</h2>
        {this.state.coms.map(commentaires => (<h4> id : {commentaires.id} <br /> nom : {commentaires.nom} <br /> prénom : {commentaires.prenom}, <br /> commentaire : {commentaires.contenu_commentaire} </h4>))}
      </div>
    );
  }
}

export default App; 
