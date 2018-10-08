import React , { Component } from 'react'
import axios from 'axios';

import {connect} from 'react-redux';

import '../sass/main.scss';


class Contact extends Component {
    state = {
        name:'',
        email:'',
        phonenumber:'',
        message:''
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name,email,phonenumber,message} = this.state
        axios.post('https://fgapi.now.sh/api/form', {name,email,phonenumber,message} )
        .then((result) => {
            console.log(result);
            this.setState({info: 'berhasil terkirim',name:'',email:'',phonenumber:''})
            setTimeout(() => {
                this.setState({info: null});
              }, 3000)
        });

      }
    
    

    render(){
        const {name,email,phonenumber,message,info} = this.state
        return (
            // <Layout title={'Contact'}>
                <div className="container contact-section" name="contact">
                    <div className="row">
                        <div className="contact-section__form col-sm-6">
                            <div className="contact-section__form-top m-t-10" style={{color:'black'}}>
                                <h3><i className="fas fa-phone"></i><a style={{color:'black'}} target="_blank" href="https://api.whatsapp.com/send?phone=6281287831421&text=Hi Faikar">&nbsp; + 62 812 8783 1421 (Lets Talk)</a> </h3>
                                <br/>
                                <h3><i className="far fa-envelope"></i>&nbsp; ghassanfaikar@yahoo.com</h3>
                                <br/>
                                <h3><i className="far fa-building"></i>&nbsp; Owl and Foxes</h3>
                                <br/>
                                <h3><i className="fas fa-map-marker-alt"></i> &nbsp; South Tangerang, Indonesia</h3>
                                <br/>
                            </div>
                            <div className="contact-section__form-bottom m-t-50">
                                <ul className="test">
                                    <li><a href="https://www.instagram.com/faiikarr" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://github.com/faikarghas" target="_blank"><i className="fab fa-github"></i></a></li>
                                    <li><a href="https://www.facebook.com/fekkar" target="_blank"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/faikarrr" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>

                         <div className="contact-section__form col-sm-6 ">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername" style={{color:'black'}}>your name</label>
                                    <input type="text" className="form-control2 contact-section__form-input input-tr-bb" id="" name="name" value={name} onChange={this.onChange} required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail" style={{color:'black'}}>email Address</label>
                                    <input type="email" className="form-control2 contact-section__form-input input-tr-bb" id="exampleInputEmail" name="email" value={email} onChange={this.onChange} required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone" style={{color:'black'}}>mobile No.</label>
                                    <input type="tel" className="form-control2 contact-section__form-input input-tr-bb" id="telephone" name="phonenumber" value={phonenumber} onChange={this.onChange} required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" style={{color:'black'}}>message</label>
                                    <textarea className="form-control2 contact-section__form-textarea input-tr-bb" id="description" name="message" value={message} onChange={this.onChange} required></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="btn  btn--green submit">
                                        <span className="btn-custom"><i className="fa fa-paper-plane" aria-hidden="true"></i> Send </span>
                                    </button>
                                </div>
                                {info !== '' && 
                                    <div className="alert alert-light text-center" role="alert">
                                        {info}
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            // </Layout>
        )
    }
}

const mapPropsToState = state => {
    return{
      bodyColor:state.bodyColor
    }
}

export default connect(mapPropsToState)(Contact)
