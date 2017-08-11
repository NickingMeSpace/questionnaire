import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Template from '../components/Template'
import Footer from '../components/Footer'
import * as pageActions from '../actions/PageActions'
import {Col, Grid, Row} from 'react-bootstrap';
import Menu from '../components/Menu';
import QuestionList from '../assets/mock/QuestionList';

class App extends Component {
    render() {
        const {user, page} = this.props
        const {getPhotos} = this.props.pageActions

        return (
            <Grid>
                <Row className='show-grid'>
                    <Col sm={12} md={12}>
                        <Header user={user}/>
                    </Col>
                </Row>
                <Menu/>
                <Row className='flex-items-center'>
                    <Col sm={10} md={10}>
                        <Template user={user} page={page} getPhotos={getPhotos} questionList={QuestionList}/>
                    </Col>
                </Row>
                <Row className='show-grid'>
                    <Col sm={12} md={12}>
                        <Footer/>
                    </Col>
                </Row>
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
