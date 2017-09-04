import React, {Component} from 'react'

import { ListGroup, ListGroupItem, Media } from 'react-bootstrap'

export default class AddsList extends Component {
    render() {
        return (
            <ListGroup className='panelGroupList' fill>
                <ListGroupItem className='noBorder'>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src={require('../../assets/thumbnail.png')}
                                 alt='Image'/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Media Heading</Media.Heading>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </Media.Body>
                    </Media>
                </ListGroupItem>
                <ListGroupItem className='noBorder'>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src={require('../../assets/thumbnail.png')}
                                 alt='Image'/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Media Heading</Media.Heading>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </Media.Body>
                    </Media>
                </ListGroupItem>
                <ListGroupItem className='noBorder'>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src={require('../../assets/thumbnail.png')}
                                 alt='Image'/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>Media Heading</Media.Heading>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </Media.Body>
                    </Media>
                </ListGroupItem>
            </ListGroup>
        );
    }
}