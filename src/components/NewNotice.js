import React, { Component } from 'react'
import { Header } from './Header'

export default class NewNotice extends Component {
    render() {
        return (
            <div className="newNotice.js">
                <Header history={this.props.history}/>
                <div className="container">
                    <div className="inputNotice">
                        <h2>Nom de l'entreprise /ou client:</h2>
                        <input type="text" />
                        <h2>Notre technicien est intervenu pour l'entretien de la vitrerie le:</h2>
                        <input type="date" />
                    </div>
                </div>
            </div>
        )
    }
}
