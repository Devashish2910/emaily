import React, {Component} from 'react';
import git from './../img/git.png'

class Landing extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>
                    Welcome to Emaily!
                </h1>
                <h4>Collect feedback from your users...</h4>
                <a>Designed and Developed with MongoDB, Express, React, Node.js (MERN Stack) and ❤️</a><br/>
                <a href="https://linkedin.com/in/devashishgpatel" target="_blank">by Devashish Patel</a>
                <br/><br/>
                <a href="https://github.com/Devashish2910/emaily" target="_blank">
                    <img src={git} width="250" height="150"/>
                </a>
            </div>
        );
    }
}

export default Landing;