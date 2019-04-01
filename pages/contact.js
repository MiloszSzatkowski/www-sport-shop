import 'react-app-polyfill/ie11';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Meta_inf from '../components/Meta_inf';
import the_SITE_url from  '../components/Vars';
import global_settings from '../components/Vars';
import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import axios from 'axios';

export default class extends Component {

    constructor() {
    super();
    this.state = {
      name_: "",
      email: "",
      mess: "",
      disabled: true
    };
  }

  handleNameChange = evt => {
    this.setState({ name_: evt.target.value },
    function () {
      let notEmpty = [this.state.name_,this.state.email,this.state.mess].every(a => (a != ''));
      if (notEmpty) {
        this.setState({disabled: false });
      } else {
        this.setState({disabled: true });
      }
    });
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value },
    function () {
      let notEmpty = [this.state.name_,this.state.email,this.state.mess].every(a => (a != ''));
      if (notEmpty) {
        this.setState({disabled: false });
      } else {
        this.setState({disabled: true });
      }
    });
  };

  handleMessChange = evt => {
    this.setState({ mess: evt.target.value },
    function () {
      let notEmpty = [this.state.name_,this.state.email,this.state.mess].every(a => (a != ''));
      if (notEmpty) {
        this.setState({disabled: false });
      } else {
        this.setState({disabled: true });
      }
    });
  };


  static async getInitialProps(context) {
    // console.log(context.query);
    const response = await axios.get( the_SITE_url + '/wp-json/wp/v2/pages');
    const response_2 = await axios.get( the_SITE_url + '/wp-json/global-api/v1/settings');
    return {
      pages: response.data,
      global_: response_2.data,
      query: context.query
    }
  }

    render() {
      // console.log(this.props.pages);
      // console.log(this.props.global_);
      // console.log(this.props.query);

      const  global  = {state: this.state};

      var contact_content = this.props.pages.filter(
        page => (page.title.rendered == "Contact")
      )[0];

    return (
      <Fragment>
        <Head>
          <title>{this.props.global_.name}</title>
          <meta name="description" content="{this.props.global_.description}" />
          <Meta_inf />
        </Head>

        <div className="page-wrapper">

        <section className="left">
          <Navigation img_logo={this.props.global_.logo_src}/>
        </section>

        <section className="right">
          <h1 className="subpages-title">CONTACT</h1>

          {(this.props.query.res == undefined) ? '' :

              (this.props.query.res == 'success')
                ? <div style={{width: '100%', border: '1px solid green',
                textAlign: 'center', padding: '1em'}}>
                Thank you. Your message has been sent.
                </div>
                : <div style={{width: '100%', border: '1px solid red',
                textAlign: 'center', padding: '1em'}}>
                There was an error. Please try again or use other form of contact.
              </div>

          }

          <div className="page-wrapper-contact">

            <section className="left-contact">
              <h2 className="capital-headline">
                {this.props.global_.name}
              </h2>
              <span className="small-text">
                based in {this.props.global_.city}
              </span>

              <div
              className="contact-text-page"
              dangerouslySetInnerHTML={
                {__html: contact_content.content.rendered}
              } />

            </section>

            <section className="right-contact">


           <form method="POST" action="send">
              <div className="input_div">
                <label>
                Name *
                </label>
                  <input className="" type="text" name="_name"
                    onChange={this.handleNameChange}  />
              </div>

              <div className="input_div">
                <label>
                Email *
                </label>
                  <input onChange={this.handleEmailChange}
                    className="" type="text" name="email"  />
              </div>

              <div className="input_div">
                <label>
                Phone number
                </label>
                  <input className="" type="text" name="num" />
              </div>

              <div className="input_div">
                <label className="">
                  Message *
                  </label>
                <textarea name="mess" cols="" rows=""
                  onChange={this.handleMessChange}></textarea>
              </div>

              <div>
                <a id="" className="filter-btn" >
                    <input type="submit"
                    disabled={global.state.disabled}
                    value="SEND"/>
                </a>
                {(global.state.disabled) ?
                  <i style={{color: 'grey' }}>
                  *Fill in required fields to send. </i> :
                  ''
                }
              </div>
            </form>

          </section>
          </div>
        </section>

        </div>

    </Fragment>
    )
  }

}
