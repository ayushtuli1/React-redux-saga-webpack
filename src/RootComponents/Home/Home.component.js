import './Home.style.less';

import React, { Component } from 'react';

import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        data: this.props.data,
      });
    }
  }
  setEngine(event) {
    console.log(event.target.value);
  }

  render() {
    const { dispatch } = this.props;
    console.log(this.props.data);
    console.log(this.state.data);
    return (
      <div className='HomeContainer'>
        <div className='table'>
          <input type='radio' value='hacker' id='radio1' name='engineS' checked /> Hacker
          News
          <input
            type='radio'
            value='wiki'
            id='radio2'
            name='engineS'
          />{" "}
          Wiki
        </div>

        <input id='input' type='text' placeholder='search'></input>
        <button
          onClick={() => {
            dispatch({
              type: "GET_DATA",
              data: {
                input: document.getElementById("input").value,
                seachEngine: document.querySelector('input[name="engineS"]:checked').value,
              },
            });
          }}
        >
          Submit
        </button>
        {this.props.dataLoaded ? "" : "loading"}
        <div>
          {this.state.data.map((item, index) => (
            <div className='table'>
              <div className='tableCell'>
           
                <a href={item.story_url}> {item.title || item.story_title}</a>
              </div>
              <div className='tableCell'>
                {item.author} || {item.submissionCount?item.submissionCount.data.submission_count:""}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        data: state.home.data,
        dataLoaded: state.home.dataLoaded
    };
};
export default connect(mapStateToProps)(Home);
