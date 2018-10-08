import HeaderLayout from '../components/HeaderLayout.js';
import ComingSoon from '../components/comingSoon';
import {connect} from 'react-redux';

import GAwrapper from '../lib/GAWarp';

import About from '../components/about.js';
import Contact from '../components/contact.js';
import Project from '../components/projects.js';
import Footer from '../components/footer';

import '../sass/main.scss';

const Index = props => (
    <React.Fragment>
        <HeaderLayout title={'Home'}>
            <div className="container project-section">
                <ComingSoon color={props.bodyColor}/>
            </div>
        </HeaderLayout>
        <About />
        <Project />
        <Contact />
    </React.Fragment>

)

const mapPropsToState = state => {
    return{
      bodyColor:state.bodyColor
    }
  }
  

export default GAwrapper(connect(mapPropsToState)(Index))