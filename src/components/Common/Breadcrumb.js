import React, {Component} from 'react';

import {Breadcrumb} from 'react-bootstrap';

export default class BreadcrumbTree extends Component {
    render() {

        return(
            <Breadcrumb>
                <Breadcrumb.Item href='#'>
                    Рабочий стол
                </Breadcrumb.Item>
                <Breadcrumb.Item href='#breadcrumbs'>
                    История
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    за 2016 год
                </Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}