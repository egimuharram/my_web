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
        axios.post('http://localhost:3001/form', {name,email,phonenumber,message} )
        .then((result) => {
            console.log(result);
            
        });
      }
    
    

    render(){
        const {name,email,phonenumber,message} = this.state
        return (
            <Layout title={'Contact'}>
                <div className="container contact-section">
                    <div className="row ">
                        <div className="contact-section__form col-6">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">Your name</label>
                                    <input type="text" className="form-control contact-section__form-input" id="" name="name" value={name} onChange={this.onChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail">Email Address</label>
                                    <input type="email" className="form-control contact-section__form-input" id="exampleInputEmail" name="email" value={email} onChange={this.onChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">Mobile No.</label>
                                    <input type="tel" className="form-control contact-section__form-input" id="telephone" name="phonenumber" value={phonenumber} onChange={this.onChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Message</label>
                                    <textarea className="form-control contact-section__form-textarea" id="description" name="message" value={message} onChange={this.onChange}></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-default submit">
                                        <span className="btn-custom"><i className="fa fa-paper-plane" aria-hidden="true"></i> Send Message</span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="contact-section__form  col-6">
                            <div className="contact-section__form-top m-t-20">
                                <h3><i className="fas fa-phone"></i><a target="_blank" href="https://api.whatsapp.com/send?phone=6281287831421&text=Hi Faikar, I need a website.">&nbsp; + 62 812 8783 1421 (Click to chat)</a> </h3>
                                <br/>
                                <h3><i className="far fa-envelope"></i>&nbsp; ghassanfaikar@yahoo.com</h3>
                                <br/>
                                <h3><i className="fas fa-map-marker-alt"></i> &nbsp; South Tangerang, Indonesia</h3>
                            </div>
                            <div className="contact-section__form-bottom m-t-50">
                                <h1>
                                    Follow me on social networks
                                </h1>
                                <ul>
                                    <li><a href="https://www.instagram.com/faiikarr" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/faikar-ghassan-57632ab4/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="" target="_blank"><i class="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact
