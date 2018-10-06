import React,{Component} from 'react';
import Layout from '../components/MyLayout.js';
import ComingSoon from '../components/comingSoon';

import {connect} from 'react-redux';

import '../sass/main.scss';



class About extends Component{
  state = {
    data: []
  }
  
  render(){
    return (
          <Layout title={'About'}>
              <ComingSoon color={this.props.bodyColor}/>
          </Layout>    
    )
  }
}
const mapPropsToState = state => {
  return{
    bodyColor:state.bodyColor
  }
}
export default connect(mapPropsToState)(About)
