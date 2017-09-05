import React, {Component, PropTypes} from 'react';

import Page from '../Common/Page';
import QuestionsBlockList from './QuestionsBlockList';
import AddsList from './AddsList';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router';
import HeaderPageInfo from '../Common/HeaderPageInfo';

export default class Template extends Component {
    render() {
        const {
            page,
            getPhotos,
            questionList
        } = this.props;

        const title = (
            <div>
                <h1 className='big-150'>Тесты</h1>
                <p>Тесты расположены в порядке приоритета прохождения. В случае, если тест не находится в списке
                    - обратитесь к преподавателю.</p>
                <p>Все результаты по предыдущим тестам можно найти в разделе <Link to='/tests'>Мои тесты</Link>.</p>
            </div>
        )

        return (
            <div className='desktop'>
                <HeaderPageInfo/>

                <Panel header={title}>
                    <QuestionsBlockList questionList={questionList}/>
                </Panel>

                <Panel header='Оповещения'>
                    <AddsList />
                </Panel>

                {/*todo start*/}
                <Panel header='Фото (redux test)'>
                    <ListGroup className='panelGroupList' fill>
                        <ListGroupItem>
                            <Page year={page.year} photos={page.photos} getPhotos={getPhotos} fetching={page.fetching}/>
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
                {/*todo end*/}
            </div>
        )
    }
}

Template.PropTypes = {
    page: PropTypes.object.isRequired,
    getPhotos: PropTypes.object.isRequired,
    questionList: PropTypes.array.isRequired
}
