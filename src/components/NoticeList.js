import React, { Component } from 'react'
import { Header } from './Header'
import { connect } from 'react-redux';
import { NoticeDetails } from './NoticeDetails';

class NoticeList extends Component {

    state = {
        selectedNotice : {}, 
        noticeSelected : false
    }

    handleChange(event){
        const id = event.target.value;
        console.log(id);
        const index = this.props.notices.findIndex(notice => {
            return notice.id === id;
            
        });
        console.log(index);
        this.setState({ selectedNotice : this.props.notices[index] , noticeSelected : true} )
    }

    render() {
        const selectOptions = this.props.notices.map((notice)=> {
            return(
                <option key={notice.id} value={notice.id}>{`${notice.id} - ${notice.serviceDate}`}</option>
            )
        })


        return (
            <div className="noticeList">
                <Header/>
                <div className="container">
                    <h2>Choississez votre Avis de passage</h2>
                    <select name="" id="" onChange={(e)=>this.handleChange(e)}>
                        <option value=""></option>
                        {selectOptions}
                    </select>
                    <div className={this.state.noticeSelected ? "container-notice" : "none"}>
                        <NoticeDetails
                            notice={this.state.selectedNotice}
                        />
                    </div>
                </div>
            </div>
        )
     }

}


const mapStateToProps = (state) => {
    return {
      notices: state.notices,
    };
};

export default connect(mapStateToProps, null)(NoticeList);

