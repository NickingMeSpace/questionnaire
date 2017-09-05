import React, {Component} from 'react';

export default class AddsTemplate extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}