import React, { Component } from 'react'
import ReactToPrint from 'react-to-print';
import { NoticeDetails } from './NoticeDetails';
import { connect } from 'react-redux';
import { Header } from './Header';

class Notice extends Component {
    render() {
        const id = this.props.match.params.id;

        const index = this.props.notices.findIndex(notice => {
            return notice.id === id;
        });

        
        return (
            <div className="notice">
                <Header/>
                <div className="container">
                    <div className="notice-container">
                        <NoticeDetails
                            ref={el => (this.componentRef = el)}
                            notice={this.props.notices[index]}
                        />
                        <ReactToPrint
                            trigger={() => {
                                return <button className="margin-top-2">Imprimer l'avis de passage</button>;
                            }}
                            content={() => this.componentRef}
                        />

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        notices: state.notices,
      };
}

export default connect(mapStateToProps, null)(Notice);

