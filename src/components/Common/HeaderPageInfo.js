import React, {Component} from 'react';

import BreadcrumbTree from './Breadcrumb'
import {PageHeader} from 'react-bootstrap'

export default class HeaderPageInfo extends Component {
    render() {

        return(
            <div>
                <PageHeader className='big-250'>
                    Рабочий стол
                    <small> студент</small>
                </PageHeader>
                <BreadcrumbTree/>
            </div>
        )
    }
}
