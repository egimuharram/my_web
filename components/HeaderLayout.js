import  {Component} from 'react'
import Head from 'next/head';
import Footer from './footer';
import Navigation from './Navigation';
// redux
import { connect } from 'react-redux';
import * as action from '../redux/actionIndex';
// css
import '../sass/main.scss';

class Layout extends Component  {
    
    componentDidMount(){
        this.props.onTryAutoChange()
    }
    
    
    render(){
        return (
            <div className="box-header" style={{background:this.props.color}} >
                <Head>
                    <title>Faikar | {this.props.title}</title>
                </Head>
                <Navigation navColor={this.props.navColor}/>
                <div className="childern">
                    {this.props.children}
                </div>
                <Footer blue={this.props.changeColorBlue} grey={this.props.changeColorGrey} yellow={this.props.changeColorYellow}/>
            </div>
        )         
    }
}
const mapPropsToState = state => {
    return{
        color:state.color,
        colorC:state.colorC,
        navColor: state.navColor
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeColorBlue     : () => dispatch(action.changeColorBlue()),
        changeColorYellow   : () => dispatch(action.changeColorYellow()),
        changeColorGrey     : () => dispatch(action.changeColorGrey()),
        onTryAutoChange     : () => dispatch(action.autoChangeColor())
    }
}
export default connect(mapPropsToState,mapDispatchToProps)(Layout);