import {Component} from 'react';
// component
import ComingSoon from './comingSoon';
import Card from './card';
// axios
import axios from 'axios'
// redux
import {connect} from 'react-redux';
// css
import '../sass/main.scss';
import Spinner from '../lib/Spinner/Spinner';

class works extends Component  {
  state = {
    data : []
  }
  componentDidMount(){
    axios.get('https://fgapi.now.sh/api/projects').then((res)=>{
      this.setState({data: res.data})
    })
  }
  render(){
    const {data} = this.state
  return (
        <div className="container project-section" id="projects" name="projects">
            <div className="row justify-content-center project-section__card" >
              { data.length === 0 ? <Spinner /> :
                data.map(item => (<Card key={item.idprojects} title={item.Title}/>))}
            </div>
        </div>
  )}
}

const mapPropsToState = state => {
  return{
    bodyColor:state.bodyColor
  }
}

export default connect(mapPropsToState)(works)
