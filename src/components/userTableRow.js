import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class UserTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.firstname}</td>
                <td>{this.props.obj.lastname}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.bio}</td>
                <td>{this.props.obj.date}</td>
            </tr>
        );
    }
}