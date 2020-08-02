import React, { Component } from 'react';
import axios from 'axios';

class CommentaireForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            nom: '',
            prenom: '',
            contenu_commentaire: '',
            date_commentaire: '',
            created_at: '',
            created_by: '',
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/api/commentaires', this.state)
          .then(response => {
              console.log(response)
          })
          .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { nom, prenom, contenu_commentaire, date_commentaire, created_at, created_by } = this.state
        return (
            <div>
                <h1>Laissez-nous un commentaire !</h1> 
                <form onSubmit={this.submitHandler} >
                    <div>
                        <input type="text" name="nom" value={nom} onChange={this.changeHandler} placeholder="Votre nom"/>
                    </div>
                    
                    <div>
                        <input type="text" name="prenom" value={prenom} onChange={this.changeHandler} placeholder="Votre prénom"/>
                    </div>

                    <div>
                        <input type="text" name="contenu_commentaire" value={contenu_commentaire} onChange={this.changeHandler} placeholder="Votre commentaire"/>
                    </div>

                    
                    <button type="submit">Publier</button>
                    
                </form>
            </div>
        )
    }
}


export default CommentaireForm