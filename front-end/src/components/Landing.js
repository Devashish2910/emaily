import React, {Component} from 'react';
//import git from './../img/git.png'

class Landing extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>
                    Welcome to Emaily!
                </h1>
                <h4>Collect feedback from your users...</h4>
                <a>Designed and Developed with MongoDB, Express, React, Node.js (MERN Stack) and <span role='img' aria-label="heart">❤️</span></a><br/>
                <a href="https://linkedin.com/in/devashishgpatel" target="_blank" rel="noopener noreferrer">by Devashish Patel</a>
                <br/><br/>
                <a href="https://github.com/Devashish2910/emaily" target="_blank" rel="noopener noreferrer">
                    <img src={git} width="250" height="150" alt="No Data!"/>
                </a>

            </div>
        );
    }
}

export default Landing;