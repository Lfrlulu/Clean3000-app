import React, { Component } from 'react'
import { Header } from './Header'
import { connect } from 'react-redux'

class NewNotice extends Component {

    state={
        // notice:{
        //     nameClient: "",
        //     dateService: "",
        //     comment: "",
        //     signTechnicien: false,
        //     signClient: false,
        // }
        nameClient: "",
        dateService: "",
        comment: "",
        signTechnician: false,
        signClient: false,
    }

    isCheck(event, name){
        if (event.checked){
            this.setState({[name] : true})
        } else {
            this.setState({[name] : false})
        }
    }

    render() {
        return (
            <div className="newNotice.js">
                <Header history={this.props.history}/>
                <div className="container">
                    <div className="inputNotice">
                        <form action="">
                            <label htmlFor="clientName">Nom de l'entreprise /ou client:</label>
                            <input type="text" name="clientName" id="clientName" onChange={(e)=> this.setState({ nameClient: e.target.value})}/>
                            <label htmlFor="dateService">Notre technicien est intervenu pour l'entretien de la vitrerie le:</label>
                            <input type="date" name="dateService" id="dateService" onChange={(e)=> this.setState({ dateService: e.target.value})}/>
                            <label htmlFor="comment">Observations :</label>
                            <input type="text" name="comment" id="comment" onChange={(e)=> this.setState({ comment: e.target.value})}/>
                            <p>Merci de votre confiance</p>
                            <div className="container-signature">
                                <label htmlFor="signTechnician">Signature du technicien:</label>
                                <input type="checkbox" name="signTechnician" id="signTechnician" onClick={(e) => this.isCheck(e.target, "signTechnician")}/>
                                <label htmlFor="checkbox" name="signClient" >Signature du client/entreprise:</label>
                                <input type="checkbox" name="signClient" id="signClient" onClick={(e) => this.isCheck(e.target, "signClient")}/>
                            </div>
                            <button type="submit" onClick={()=> (this.props.fillNotice(this.state.nameClient, this.state.dateService, this.state.comment, this.state.signTechnician, this.state.signClient))}>Validez</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // Quels éléments du state global mettons nous à disposition
    return {
      notices: state.notices,
    };
  }

export default connect(mapStateToProps, null)(NewNotice);
