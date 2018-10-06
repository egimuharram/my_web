import Layout from '../components/MyLayout.js';
import ComingSoon from '../components/comingSoon';

import {connect} from 'react-redux';

import '../sass/main.scss';

const works = props => {
  return (
    <Layout title={'Works'}>
        <ComingSoon color={props.bodyColor}/>
    </Layout>
  )
}

const mapPropsToState = state => {
  return{
    bodyColor:state.bodyColor
  }
}

export default connect(mapPropsToState)(works)
