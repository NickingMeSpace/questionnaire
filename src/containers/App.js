import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Template from '../components/Template'
import Footer from '../components/Footer'
import * as pageActions from '../actions/PageActions'
import {Col, Grid, Row} from 'react-bootstrap';
import Menu from '../components/Menu';

const questionList = [
    {
        name: 'Название теста',
        config: {
            isRequired: false,
            isAccess: true,
            countAttempts: -1
        },
        showQuestions: true,
        questions: [
            {
                id: 1,
                name: 'вопрос 1',
                complexity: 'hard',
                type: 'selectTrueAnswer',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                id: 2,
                name: 'вопрос 2',
                complexity: 'hard',
                type: 'selectTrueAnswers',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                name: 'вопрос 3',
                complexity: 'easy',
                type: 'inputAnswer',
                hideAnswers: false,
            },
            {
                name: 'вопрос 4',
                complexity: 'very hard',
                type: 'selectTrueAnswers',
                hideAnswers: true,
            },
        ]
    },
    {
        name: 'Название теста 2',
        config: {
            isRequired: false,
            isAccess: true,
            countAttempts: -1
        },
        result: 89,
        showQuestions: true,
        questions: [
            {
                id: 1,
                name: 'вопрос 1',
                complexity: 'hard',
                type: 'selectTrueAnswer',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                id: 2,
                name: 'вопрос 2',
                complexity: 'hard',
                type: 'selectTrueAnswers',
                hideAnswers: false,
                answers: [
                    {
                        id: 1,
                        text: 'текст ответа 1'
                    },
                    {
                        id: 2,
                        text: 'текст ответа 2'
                    },
                    {
                        id: 3,
                        text: 'текст ответа 3'
                    },
                    {
                        id: 4,
                        text: 'текст ответа 4'
                    }
                ]
            },
            {
                name: 'вопрос 3',
                complexity: 'easy',
                type: 'inputAnswer',
                hideAnswers: false,
            },
            {
                name: 'вопрос 4',
                complexity: 'very hard',
                type: 'selectTrueAnswers',
                hideAnswers: true,
            },
        ]
    },
    {
        name: 'Название теста 3',
        config: {
            isRequired: false,
            isAccess: true,
            countAttempts: -1
        },
        result: 12,
        showQuestions: false,
        questions: []
    }
];

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
                        <Template user={user} page={page} getPhotos={getPhotos} questionList={questionList}/>
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
