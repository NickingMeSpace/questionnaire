import React, {PropTypes} from 'react'

import {Col, ProgressBar, Row} from 'react-bootstrap'

const ProgressBarShow = React.createClass({
    render() {
        const {all = 1, now = 1, pos, style} = this.props;

        const result = pos ? pos : 100 / all * now;
        const label = pos ? '' : `${now} из ${all}`;
        const styleSelect = !style && pos > 80 ? 'success' : 'danger'

        return (
            <Row>
                <Col sm={12} md={12}>
                    <ProgressBar now={result} label={label} bsStyle={styleSelect}/>
                </Col>
            </Row>
        );
    }
});

ProgressBarShow.PropTypes = {
    all: PropTypes.number,
    now: PropTypes.number,
    style: PropTypes.string
}

export default ProgressBarShow;