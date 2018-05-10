import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="fixed-action-btn">
                <Link to='/surveys/new' className="btn-floating btn-large teal-accent-4">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        );
    }
}