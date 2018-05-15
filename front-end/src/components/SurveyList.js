import  React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurvey} from './../actions';


class SurveyList extends Component {
    componentWillMount() {
        this.props.fetchSurvey();
    }

    renderLastResponded(date) {
        if (date) {
            return new Date(date).toLocaleDateString();
        }
        return "Waiting For Response!"
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.description}
                        </p>
                    </div>
                    <div className="card-content">
                        <p className="left">
                            Last Updated: {this.renderLastResponded(survey.lastResponded)}
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Positive: {survey.positive}</a>
                        <a>Negative: {survey.negative}</a>
                        <a>Neutral: {survey.neutral}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({surveys}) {
    return {surveys};
}

export default connect(mapStateToProps, {fetchSurvey})(SurveyList);