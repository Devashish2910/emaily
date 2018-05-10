import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import validateEmails from './../../utils/validateEmails';
import FIELDS from './fields';

class FillUpForm extends Component {

    renderFields() {
        return FIELDS.map(({label, name, compo, placeholder}, i) => {
            return (
                <div>
                    <label>{label}</label>
                    <Field key={name} name={name} placeholder={placeholder} type="text" component={compo} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <br/>
                <form onSubmit={this.props.handleSubmit(() => this.props.onValidSubmit())}>
                    {this.renderFields()}<br/>
                    <Link to="/surveys/all" className="red accent-4 btn-flat white-text left">
                        Cancel
                        <i className="material-icons right">clear</i>
                    </Link>
                    <button type="submit" className="teal accent-4 btn-flat white-text right">
                        Review
                        <i className="material-icons right">spellcheck</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    let errors = {};

    errors.recipients = validateEmails(values.recipients || "");

    FIELDS.forEach(cur => {
       if (!values[cur.name]) {
           errors[cur.name] = "* Required"
       }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(FillUpForm);