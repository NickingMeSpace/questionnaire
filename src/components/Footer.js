import React, {Component} from 'react';

import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='#'>questionnaire</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type='text' placeholder='Поиск' />
                        </FormGroup>
                        {' '}
                        <Button type='submit'>Искать</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}