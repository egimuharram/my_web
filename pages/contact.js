import React , { Component } from 'react'
import Fade from 'react-reveal/Fade';
import axios from 'axios';

import Layout from '../components/MyLayout.js';
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
        axios.post('https://fgapi.now.sh/form', {name,email,phonenumber,message} )
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
            <Layout title={'Contact'}>
                <div className="container contact-section">
                    <div className="row ">
                        <div className="contact-section__form col-sm-6">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">your name</label>
                                    <input type="text" className="form-control2 contact-section__form-input input-tr-bb" id="" name="name" value={name} onChange={this.onChange} required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail">email Address</label>
                                    <input type="email" className="form-control2 contact-section__form-input input-tr-bb" id="exampleInputEmail" name="email" value={email} onChange={this.onChange} required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">mobile No.</label>
                                    <input type="tel" className="form-control2 contact-section__form-input input-tr-bb" id="telephone" name="phonenumber" value={phonenumber} onChange={this.onChange} required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">message</label>
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

                        <div className="contact-section__form col-sm-6">
                            <div className="contact-section__form-bottom m-t-10">
                                <h1>
                                    follow me on social networks
                                </h1>
                                <ul>
                                    <li><a href="https://www.instagram.com/faiikarr" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/faikar-ghassan-57632ab4/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://github.com/faikarghas" target="_blank"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                            <div className="contact-section__form-top m-t-50">
                                <h3><i className="fas fa-phone"></i><a target="_blank" href="https://api.whatsapp.com/send?phone=6281287831421&text=Hi Faikar, I need a website.">&nbsp; + 62 812 8783 1421 (Lets Talk)</a> </h3>
                                <br/>
                                <h3><i className="far fa-envelope"></i>&nbsp; ghassanfaikar@yahoo.com</h3>
                                <br/>
                                <h3><i className="fas fa-map-marker-alt"></i> &nbsp; South Tangerang, Indonesia</h3>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact
