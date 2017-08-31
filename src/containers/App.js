import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as pageActions from '../actions/PageActions'
import {Col, Grid, Row} from 'react-bootstrap';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        const {user} = this.props;

        return (
            <Grid>
                <Row className='show-grid'>
                    <Col sm={12} md={12}>
                        <Header user={user}/>
                    </Col>
                </Row>
                <Row className='show-grid'>
                    <Menu/>
                </Row>
                <Row className='flex-items-center'>
                    <Col sm={10} md={10}>
                        {this.props.children}
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
