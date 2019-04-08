import React, { Component } from 'react';
import './About.style.less';
class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return <div className="container">About</div>;
    }
}

export default About;
