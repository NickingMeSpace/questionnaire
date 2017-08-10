import React, {PropTypes} from 'react';

import {ListGroupItem} from 'react-bootstrap';

const AnswersList = React.createClass({
    render() {
        const {answers} = this.props;
        let template;

        if (answers && answers.length > 0) {
            template = answers.map((item) => {
                return (
                    <ListGroupItem>{item.text}</ListGroupItem>
                )
            })
        } else {
            template = <ListGroupItem>Список ответов не представлен</ListGroupItem>
        }

        return (
            <div>
                {template}
            </div>
        )
    }
});

AnswersList.PropTypes = {
    answers: PropTypes.array.isRequired
}

export default AnswersList;