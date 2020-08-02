import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            titre: '',
            photo_poisson: '',
            taille_poisson: '',
            poids_poisson: '',
            contenu_post: '',
            nom_auteur: '',
            prenom_auteur: '',
            created_at: '',
            created_by: '',
            nom_poisson: '',   
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/api/posts.json', this.state)
          .then(response => {
              console.log(response)
          })
          .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { titre, photo_poisson, taille_poisson, poids_poisson, contenu_post, nom_auteur, prenom_auteur, created_at, created_by, nom_poisson } = this.state
              /* var sorted_fish = fish.sort((a,b) => {
      return new Poids(a.scheduled_for).getPoids() - 
          new Poids(b.scheduled_for).getPoids()
  }).reverse() */ 

  /* var tab=new Array("Pommes", "RECUP POIDS POISSONS LES + GROS !!!!");
  tab.reverse()
  document.write("Top 10 des plus belles prises : " + tab.join(", ")); */
        return (
            <div>
                <h1>Partagez-nous vos plus belles prises !</h1>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <input type="text" name="nom_auteur" value={nom_auteur} onChange={this.changeHandler} placeholder="Votre nom"/>
                    </div>
                    
                    <div>
                        <input type="text" name="prenom_auteur" value={prenom_auteur} onChange={this.changeHandler} placeholder="Votre prénom"/>
                    </div>

                    <div>
                        <input type="text" name="titre" value={titre} onChange={this.changeHandler} placeholder="Titre de votre message"/>
                    </div>

                    <div>
                        <input type="text" name="contenu_post" value={contenu_post} onChange={this.changeHandler} placeholder="Message"/> <br /> <br />
                    </div>


                    <label for="fish-select">De quel type de poissons s'agit-il ?</label>
                    <select name="fish" id="fish-select">
                        <option value="">--Veuillez choisir une option--</option>
                        <option value={"nom_poisson.anguille"}>Anguille</option>
                        <option value="nom_poisson.breme">Brême</option>
                        <option value="nom_poisson.brochet">Brochet</option>
                        <option value="nom_poisson.carassin">Carassin</option>
                        <option value="nom_poisson.carpe">Carpe</option>
                        <option value="nom_poisson.esturgeon">Esturgeon</option>
                        <option value="nom_poisson.tanche">Tanche</option>
                    </select> <br /> <br />

                    <div>
                        <input type="number" name="taille_poisson" value={taille_poisson} onChange={this.changeHandler} placeholder="Taille de votre poisson (cm)"/>
                    </div>

                    <div>
                        <input type="number" name="poids_poisson" value={poids_poisson} onChange={this.changeHandler} placeholder="Poids de votre poisson (grammes)"/>
                    </div> <br /> <br /> <br /> <br />


                    <div>
                    <label for="photo">Cliquez sur le bouton ci-dessous pour ajouter la photo de votre belle prise !</label>
                    <input type="file" name="photo" accept="image/png, image/jpeg"/>
                    </div> <br /><br /><br />

                    <button type="submit">Publier</button>
                    
                </form>
            </div>
        )
    }
}


export default PostForm