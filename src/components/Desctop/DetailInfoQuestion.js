import React, {PropTypes} from 'react'

import {Button, ListGroup, ListGroupItem, OverlayTrigger, Popover} from 'react-bootstrap';

const DetailInfoQuestion = React.createClass({
    render() {
        const {info = {}, required = false} = this.props;
        const {
            subject,
            teacher,
            time,
            countAttempts,
            countQuestions,
            percentOfPassage
        } = info;
        const infoPopover = (
            <Popover id='popover-positioned-bottom' title='Подробная информация о тесте'>
                <ListGroup fill>
                    <ListGroupItem>
                        Предмет: {subject ? subject : 'не указан'}
                    </ListGroupItem>
                    <ListGroupItem>
                        Преподаватель: {teacher ? teacher : 'не указан'}
                    </ListGroupItem>
                    <ListGroupItem>
                        Тест обязательный: {required ? 'да' : 'нет'}
                    </ListGroupItem>
                    <ListGroupItem>
                        Время на прохождение: {time && time > 0 ? time + ' мин' : 'неограниченно'}
                    </ListGroupItem>
                    <ListGroupItem>
                        Количество попыток: {countAttempts && countAttempts > 0 ? countAttempts : 'неограниченно'}
                    </ListGroupItem>
                    <ListGroupItem>
                        Вопросов в тесте: {countQuestions}
                    </ListGroupItem>
                    <ListGroupItem>
                        Средний % сдающих: {percentOfPassage ? percentOfPassage + '%' : 'нет данных'}
                    </ListGroupItem>
                </ListGroup>
            </Popover>
        );
        return (
            <OverlayTrigger trigger='click' placement='bottom' overlay={infoPopover}>
                <Button bsStyle='info'>Информация о тесте</Button>
            </OverlayTrigger>
        )
    }
});

DetailInfoQuestion.PropTypes = {
    info: PropTypes.object.isRequired,
    //required: PropTypes.boolean.isRequired
}

export default DetailInfoQuestion;