import React, {Component} from 'react';
import FillUpForm from './SurveyFormComponenets/FillUpForm';
import {reduxForm} from 'redux-form';
import SurveyFormReview from './SurveyFormReview';

class SurveyForm extends Component {

    /*constructor(props) {
        super(props);
        this.state={
            new: true
        }
    }*/

    state = {showReview: false};

    renderContent() {
        if (this.state.showReview) {
            return <SurveyFormReview onBackClick={() => this.setState({showReview: false})}/>
        }
        return <FillUpForm onValidSubmit={() => this.setState({showReview: true})}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm)