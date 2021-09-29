import React, { Component } from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { fillNotice } from "../actions";
import { Link } from "react-router-dom";

class NewNotice extends Component {
  state = {
    clientName: "",
    serviceDate: "",
    comment: "",
    signTechnician: false,
    signClient: false,
  };

  isCheck(event, name) {
    if (event.checked) {
      this.setState({ [name]: true });
    } else {
      this.setState({ [name]: false });
    }
  }

  render() {
    const id = `Notice-${Date.now()}`;

    return (
      <div className="newNotice">
        <Header history={this.props.history} />
        <div className="container">
          <div className="inputNotice padding-3 margin-top-3">
            <form className="form">
              <div className="input-container">
                <label htmlFor="clientName" className="margin-top-1">
                  Nom de l'entreprise /ou client:
                </label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  className="margin-top-1"
                  onChange={(e) =>
                    this.setState({ clientName: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="dateService" className="margin-top-1">
                  Notre technicien est intervenu pour l'entretien de la vitrerie
                  le:
                </label>
                <input
                  type="date"
                  name="serviceDate"
                  id="serviceDate"
                  className="margin-top-1"
                  onChange={(e) =>
                    this.setState({ serviceDate: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="comment" className="margin-top-1">
                  Observations :
                </label>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  className="margin-top-1"
                  onChange={(e) => this.setState({ comment: e.target.value })}
                />
              </div>
              <p className="margin-top-1">Merci de votre confiance</p>
              <div className="container-signature">
                <div className="sign-technician">
                  <label htmlFor="signTechnician" className="padding-top-1">
                    Signature du technicien:
                  </label>
                  <input
                    type="checkbox"
                    name="signTechnician"
                    id="signTechnician"
                    className="margin-top-1"
                    onClick={(e) => this.isCheck(e.target, "signTechnician")}
                  />
                </div>
                <div className="sign-client">
                  <label htmlFor="checkbox" name="signClient">
                    Signature du client/entreprise:
                  </label>
                  <input
                    className="margin-top-1"
                    type="checkbox"
                    name="signClient"
                    id="signClient"
                    onClick={(e) => this.isCheck(e.target, "signClient")}
                  />
                </div>
              </div>
              <Link to={`/notice/${id}`}>
                <button
                  className="margin-top-2"
                  type="button"
                  onClick={() =>
                    this.props.fillNotice(
                      id,
                      this.state.clientName,
                      this.state.serviceDate.split("-").reverse().join("-"),
                      this.state.comment,
                      this.state.signTechnician,
                      this.state.signClient
                    )
                  }
                >
                  Validez
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // Quels éléments du state global mettons nous à disposition
  return {
    notices: state.notices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fillNotice: (
      id,
      clientName,
      serviceDate,
      comment,
      signTechnician,
      signClient
    ) => {
      dispatch(
        fillNotice(
          id,
          clientName,
          serviceDate,
          comment,
          signTechnician,
          signClient
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNotice);
