import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent(auth) {
        switch (auth){
            case null:
                return (
                    <li>
                        <div className="preloader-wrapper small active">
                            <div className="spinner-layer spinner-teal-accent-4-only">
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            case false:
                return (
                    <li>
                        <a href="/auth/google" className="waves-effect teal accent-4 waves-light btn">
                            Continue with Google
                        </a>
                    </li>
                );
            default:
                return [
                    <li key="lbl_credits" style={{margin: '3px 13px', fontWeight: 'bold', fontSize: 'large'}}>
                        Credits: {auth.credits}
                    </li>,
                    <li key="btn_payments">
                        <Payments />
                    </li>,
                    <li key="btn_sign_out">
                        <a href="/api/logout" className="waves-effect teal accent-4 waves-light btn">
                            Sign Out
                        </a>
                    </li>
                    ]
        }
    }

    render() {
        const {auth} = this.props;
        return (
            <nav className="blue-grey darken-3">
                <div className="nav-wrapper">
                    <Link to={auth ? '/surveys' : '/'} className="left brand-logo"><i></i>Emaily</Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent(auth)}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {auth: state.auth}
}

export default connect(mapStateToProps)(Header);