import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyForm from './SurveyForm';
import ThanksPage from './Thanks';


class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys/all" component={Dashboard} />
                        <Route exact path="/surveys/new" component={SurveyForm} />
                        <Route exact path="/surveys/thanks" component={ThanksPage} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default connect(null, actions)(App);