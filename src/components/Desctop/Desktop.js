import React, {Component} from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as pageActions from '../../actions/PageActions'
import Template from './Template'
import QuestionList from '../../assets/mock/QuestionList';

class Desktop extends Component {
    render() {
        const {user, page} = this.props
        const {getPhotos} = this.props.pageActions

        return (
            <Template user={user} page={page} getPhotos={getPhotos} questionList={QuestionList}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Desktop)