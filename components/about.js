import React,{Component} from 'react';
import ComingSoon from './comingSoon';

import {connect} from 'react-redux';

import '../sass/main.scss';



class About extends Component{
  state = {
    data: []
  }
  
  render(){
    return (
      <div  className="project-section" name="about">
          <div className="text-center" style={{height:'40rem',paddingTop:'2rem'}}>
                   <h1>about<br/>me</h1>
          </div>
      </div>
    )
  }
}
const mapPropsToState = state => {
  return{
    bodyColor:state.bodyColor
  }
}
export default connect(mapPropsToState)(About)
