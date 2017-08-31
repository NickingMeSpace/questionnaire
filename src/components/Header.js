import React, {Component, PropTypes} from 'react';

import User from './User';
import {Col, Grid, Row} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Header extends Component {
    render() {
        const {user} = this.props;

        return (
            <Grid>
                <Row className='show-grid'>
                    <Col sm={2} md={2}>
                        Мои тесты
                        <Link to='admin'>admin</Link>
                        <Link to='genre'>genre</Link>
                        <Link to='genre32'>not found</Link>
                    </Col>
                    <Col sm={2} md={2} xsOffset={8}>
                        <User name={user.name}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

Header.PropTypes = {
    user: PropTypes.object.isRequired
}