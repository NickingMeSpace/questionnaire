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
                        <NavDropdown title='Создать' id='basic-nav-dropdown'>
                            <MenuItem href='/comment/add'>Комментарий</MenuItem>
                            <MenuItem href='/test/add'>Тест</MenuItem>
                            <MenuItem href='/user/add'>Пользователя</MenuItem>
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