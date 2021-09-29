import React, { Component } from 'react'
import { Header } from './Header'
import { connect } from 'react-redux';
import { NoticeDetails } from './NoticeDetails';

let i = 0;

class NoticeList extends Component {

    render() {
        const selectOptions = this.props.notices.map((notice, j)=> {
            return(
                <option value={j} >{`${notice.id} - ${notice.serviceDate}`}</option>
            )
        })


        return (
            <div className="noticeList">
                <Header/>
                <div className="container">
                    <h2>Choississez votre Avis de passage</h2>
                    <select name="" id="" onChange={(e)=>{this.setState({ j: e.target.value })}}>
                        {selectOptions}
                    </select>
                    <NoticeDetails
                        notice={this.props.notices[i]}
                    />
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

