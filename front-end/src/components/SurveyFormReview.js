import React, {Component} from 'react';
import {connect} from 'react-redux';
import FIELDS from './SurveyFormComponenets/fields';
import Textarea from "react-textarea-autosize";
import * as actions from './../actions/index'
import {withRouter} from 'react-router-dom';

class SurveyFormReview extends Component {

    renderContent() {
        const vals = this.props.vals;
        return FIELDS.map(cur => {
            if (cur.name === 'description' || cur.name === 'recipient') {
                return(
                    <div key={cur.label}>
                        <label>{cur.label}</label><br/>
                        <Textarea style={{boxSizing: 'border-box'}}
                                  minRows={7}
                                  >{vals[cur.name]}</Textarea>
                    </div>
                );
            }
            return(
                <div key={cur.label}>
                    <label>{cur.label}</label><br/>
                    <div>{vals[cur.name]}</div>
                </div>
            );
        })
    }
    render() {

        return (
            <div>
                <h5 style={{alignContent: 'center'}}>Please, Review it carefully!!</h5>
                {this.renderContent()}
                <button className="yellow darken-3 btn-flat white-text left" onClick={this.props.onBackClick}>
                    Back
                    <i className="material-icons left">arrow_back</i>
                </button>
                <button
                    onClick={() => this.props.submitSurvey(this.props.vals, this.props.history)}
                    className="teal darken-3 btn-flat white-text right">
                    Send
                    <i className="material-icons right">send</i>
                </button>
            </div>
        );
    }
}

function mapSateToProps(state) {
    return {vals: state.form.surveyForm.values};
}

export default connect(mapSateToProps, actions)(withRouter(SurveyFormReview));