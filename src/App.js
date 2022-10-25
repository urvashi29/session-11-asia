import React, { Component } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import _ from 'lodash';

export default class App extends Component {

  // Initialization
  constructor() {
    super();
    this.state = {
      firstName: 'alina',
      post: []
    }
  }

  // Mouting
  //depreciated
  // componentWillMount = () => {
  //   //API call, update state before rendering the data
  //   this.setState({
  //     firstName: 'alex'
  //   });

  //   console.log('State update with componentwillmount');

  // }

  static getDerivedStateFromProps = (props, state) => {
    //update the state
    console.log('getDerivedStateFromProps ' + state.firstName);
    return {
      firstName: 'something'
    }
  }

  componentDidMount = () => {
    // API calls, Modal, update the state
    console.log('componenty did mount');

    axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {
      console.log(res.data);
      this.setState({
        post: res.data
      });
    }).catch(err => {
      console.log(err);
    });

    // document.getElementById('').addEventListener('click', function() {

    // });
  }

  // Updation
  handleClick = () => {
    this.setState({
      firstName: 'harry'
    });

    let r = _.flattenDeep([1, [2, [3, [4]], 5]]);
    console.log(r);
  }

  //
  shouldComponentUpdate = (nextProps, nextState) => {
    //conditional statement to compare state data with new state data
    console.log('Update data' + nextState.firstName);
    // if(this.state.firstName === nextState.firstName) {

    // }
    return true;
  }


  //new
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(prevState.firstName);
    return 'new snapshot';
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log('component did update' + prevState.firstName + snapshot);
    // if(snapshot != null) {

    // }
    // else {

    // }
  }

  // //depreciated
  // componentWillUpdate = () => {
  //   console.log('component will update');
  // }

  //prev method
  // componentDidUpdate = (prevProps, prevState) => {
  //   console.log('component did update' + prevState.firstName);
  // }

  componentWillUnmount = () => {
    // ele.removeEventListerener();
  }

  render() {
    // (condition) ? () : ()
    const postList = this.state.post.length ? (this.state.post.map((info => {
      return (
        <React.Fragment key={info.id}>
          <p>UserId: {info.userId}</p>
          <p>Body: {info.body}</p>
          <p>Title:{info.title}</p>
        </React.Fragment>
      )
    }))) : (<p>
      <ClipLoader
        color={'red'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></p>)

    return (
      <React.Fragment>
        {this.state.firstName}
        <button onClick={this.handleClick}>Click</button>
        {postList}
      </React.Fragment>
    )
  }
}



// net banking
// points