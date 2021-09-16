import React, { Component } from 'react'

export default class ButtonComponent extends Component {

    render() {
        return (
            <button onClick={this.props.action}>
                {this.props.name}
            </button>
        )
    }
}
