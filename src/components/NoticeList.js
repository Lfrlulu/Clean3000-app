import React, { Component } from 'react'
import { Header } from './Header'
import { connect } from 'react-redux';

class NoticeList extends Component {
    render() {
        const selectOptions = this.props.notices.map((notice, j)=> {
            return(
                <option value={j}>{`${notice.id} - ${notice.serviceDate}`}</option>
            )
        })
        return (
            <div className="noticeList">
                <Header/>
                <h2>Choississez votre Avis de passage</h2>
                <select name="" id="">
                    {selectOptions}
                </select>
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

