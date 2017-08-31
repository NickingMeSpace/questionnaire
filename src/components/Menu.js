import React, {Component} from 'react';

import {MenuItem, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Menu extends Component {
    render() {
        const getLink = (link, text) => {
            return (
                <Navbar.Text>
                    <Navbar.Link href={link}>{text}</Navbar.Link>
                </Navbar.Text>
            )
        }

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Рабочий стол</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {getLink('/tests', 'Мои тесты')}
                        {getLink('/history', 'История')}
                        <NavDropdown eventKey={1} title='Создать' id='basic-nav-dropdown'>
                            <MenuItem eventKey={1.1}>Комментарий</MenuItem>
                            <MenuItem eventKey={1.2}>Тест</MenuItem>
                            <MenuItem eventKey={1.3}>Пользователя</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={1.3}>...</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight className='navbar-nav'>
                        {getLink('/adds', 'Оповещения')}
                        {getLink('/profile', 'Мой профиль')}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}