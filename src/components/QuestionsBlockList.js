import React, {PropTypes} from 'react'

import QuestionsList from './QuestionsList';

const QuestionsBlockList = React.createClass({
    render() {
        const {questionList} = this.props;

        return (
            <div>
                {/*todo filter*/}
                <QuestionsList questions={questionList}/>
            </div>
        );
    }
});

QuestionsBlockList.PropTypes = {
    questionList: PropTypes.array.isRequired
}

export default QuestionsBlockList;