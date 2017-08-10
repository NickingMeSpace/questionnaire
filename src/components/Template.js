import React, {Component, PropTypes} from 'react';

import Page from './Page';
import QuestionsBlockList from './QuestionsBlockList';

export default class Template extends Component {
    render() {
        const {
            page,
            getPhotos,
            questionList
        } = this.props;

        return (
            <div>
                {/*todo*/}
                <Page year={page.year} photos={page.photos} getPhotos={getPhotos} fetching={page.fetching}/>

                <QuestionsBlockList questionList={questionList}/>
            </div>
        )
    }
}

Template.PropTypes = {
    page: PropTypes.object.isRequired,
    getPhotos: PropTypes.object.isRequired,
    questionList: PropTypes.array.isRequired
}
