import React, { Component } from 'react'

export class NoticeDetails extends Component {
    render() {
        return (
            <div className="noticeDetails">
                <h1>Avis de passage</h1>
                <p>
                    {this.props.notice.id}
                </p>
                <h2>Nom de l'entreprise /ou client :</h2>
                <p>
                    {this.props.notice.clientName}
                </p>
                <h2>Notre technicien est intervenu pour l'entretien de la vitrerie le :</h2>
                <p>
                    {this.props.notice.serviceDate}
                </p>
                <h2>Observations :</h2>
                <p>
                    {this.props.notice.comment}
                </p>
                <h2>Signatures</h2>
                <p>
                    {this.props.notice.signTechnician ? "Le Technicien a signé" : "Le Technicien n'a pas signé"}
                </p>
                <p>
                    {this.props.notice.signClient ? "Le Client a signé" : "Le Client n'a pas signé"}
                </p>
            </div>
        )
    }
}

