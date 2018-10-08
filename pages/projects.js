import Layout from '../components/MyLayout.js';
import ComingSoon from '../components/comingSoon';
import Card from '../components/card';
// iso fetch
import fetch from 'isomorphic-unfetch';
// redux
import {connect} from 'react-redux';
// css
import '../sass/main.scss';

const works = props => {
  return (
    <Layout title={'Works'}>
        <div className="container project-section">
          <div className="row justify-content-center">
          {props.shows.map(item => (<Card title={item.Title}/>))}
          </div>
        </div>
    </Layout>
  )
}

works.getInitialProps = async function () {
  const res = await fetch('http://fgapi.now.sh/api/projects')
  const data = await res.json()

  return {
      shows: data
  }
}

const mapPropsToState = state => {
  return{
    bodyColor:state.bodyColor
  }
}

export default connect(mapPropsToState)(works)
