import React, {PropTypes} from 'react';

import AnswersList from './AnswersList';
import DetailInfoQuestion from './DetailInfoQuestion';
import ProgressBarShow from './ProgressBarShow';
import {Button, ButtonToolbar, ListGroup, Media, Panel, PanelGroup, Row} from 'react-bootstrap';

const QuestionsList = React.createClass({
    getInitialState() {
        return {
            activeKey: '1'
        };
    },

    handleSelect(activeKey) {
        this.setState({activeKey});
    },

    render() {
        const {questions} = this.props;
        let template;

        if (questions && questions.length > 0) {
            template = questions.map((item, index) => {
                const {config = {}, info = {}} = item;
                const questions = item.questions.map((item) => {
                    const {name, answers} = item;

                    return (
                        <div>
                            <Media.List>
                                <Media.ListItem>
                                    <Media.Left>
                                        <img width={64} height={64} src={require('../assets/thumbnail.png')}
                                             alt='Image'/>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>{name}</Media.Heading>
                                    </Media.Body>
                                </Media.ListItem>
                            </Media.List>
                            <ListGroup fill>
                                <AnswersList answers={answers}/>
                            </ListGroup>
                        </div>
                    )
                })

                let style = 'info';
                console.log(questions);
                if (config.isAccess == true) {
                    style = 'success';
                }
                if (config.isRequired == true) {
                    style = 'danger';
                }

                return (
                    <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                        <Panel header={item.name} eventKey={index} bsStyle={style}>
                            <ButtonToolbar>
                                <Button bsStyle='primary'>Начать</Button>
                                <Button bsStyle='primary'>Тренировка</Button>
                                <DetailInfoQuestion info={info} required={config.isRequired}/>
                            </ButtonToolbar>
                            <br/>
                            {
                                item.result && <ProgressBarShow pos={item.result}/>
                            }

                            {questions}
                        </Panel>
                    </PanelGroup>
                )
            });
        } else {
            template = <div>данные не представлены</div>
        }

        return (
            <Row>
                {template}
            </Row>
        )
    }
});

QuestionsList.PropTypes = {
    questions: PropTypes.array.isRequired
}

export default QuestionsList;