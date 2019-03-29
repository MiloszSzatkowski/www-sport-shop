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

  static async getInitialProps() {
    const response = await axios.get( the_SITE_url + '/wp-json/wp/v2/pages');
    const response_2 = await axios.get( the_SITE_url + '/wp-json/global-api/v1/settings');
    return {
      pages: response.data,
      global_: response_2.data
    }
  }

    render() {
      // console.log(this.props.pages);
      // console.log(this.props.global_);

      var contact_content = this.props.pages.filter(
        page => (page.title.rendered == "About")
      )[0];

      // console.log(contact_content);

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
          <h1 className="subpages-title">ABOUT</h1>
          <div className="page-wrapper-contact">

            <section className="left-contact">
              <h2 className="capital-headline">
                What do we do?
              </h2>
              <div
              className="contact-text-page"
              dangerouslySetInnerHTML={
                {__html: contact_content.content.rendered}
              } />
            </section>

            <section className="left-contact">
              <h2 className="capital-headline">
                {this.props.global_.name}
              </h2>
              <span className="small-text">
                 <br/>
              </span>
              <p>CEO: {this.props.global_.ceo} <br/> <br/> </p>
              <p><a href={"tel:" + this.props.global_.tel}>
              {this.props.global_.tel}</a></p>
              <p><a href={"tel:" + this.props.global_.email}>
              {this.props.global_.email}</a></p>
              <p className="contact-text-page">
              {contact_content.acf.small_description_under_the}
               <br/>
              </p>
              <span className="small-text">
              <br/>
              {this.props.global_.city} <br/>
              {this.props.global_.street} <br/>
              {this.props.global_.post_code} <br/>

              </span>
            </section>

          </div>
        </section>

        </div>

    </Fragment>
    )
  }

}
