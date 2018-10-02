import React,{Component} from 'react';
import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

import '../sass/main.scss';



class About extends Component{
  state = {
    data: []
  }
  componentDidMount(){
    axios.get(`http://localhost:3001/about`)
    .then(res=>
      this.setState({data:res.data})      
    );
  }
  render(){
    // console.log(this.state.data)
    return (
          <Layout title={'About'}>
              <div className="project">
                <h1 className="coming-soon vibrate-1">under development!!</h1>
              </div>
          </Layout>    
    )
  }
}

export default About
