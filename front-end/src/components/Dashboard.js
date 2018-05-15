import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './SurveyList';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <SurveyList/>
                <div className="fixed-action-btn">
                    <Link to='/surveys/new' className="btn-floating btn-large teal-accent-4">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}