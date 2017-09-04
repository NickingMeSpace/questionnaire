import React, {PropTypes} from 'react'

import QuestionsList from './QuestionsList';
import { ListGroup } from 'react-bootstrap'

const QuestionsBlockList = React.createClass({
    render() {
        const {questionList} = this.props;

        return (
            <ListGroup className='panelGroupList' fill>
                {/*todo filter*/}
                <QuestionsList questions={questionList}/>
            </ListGroup>
        );
    }
});

QuestionsBlockList.PropTypes = {
    questionList: PropTypes.array.isRequired
}

export default QuestionsBlockList;