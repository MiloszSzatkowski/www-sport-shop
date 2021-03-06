import 'react-app-polyfill/ie11';
import Link from 'next/link';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Meta_inf from '../components/Meta_inf';
import the_SITE_url from  '../components/Vars';
import React, { Component, Fragment } from 'react';
import Router from 'next/router';
import axios from 'axios';

var static_mockup = '/static/loading.png';

export default class extends Component {

    static async getInitialProps() {
      const response   = await axios.get( the_SITE_url + '/wp-json/wp/v2/posts')
      const response_2 = await axios.get( the_SITE_url + '/wp-json/global-api/v1/settings')
      return {
        posts: response.data,
        global_: response_2.data
      }
    }

    render() {
      // console.log(this.props.global_);
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
          <div className="banner-loader">
            <img src={null || '/static/banner-loader.png'} alt="" />
          </div>

          <div className="landing-page-categories-wrapper">

            <div className="categories-wrapper">
              <div className="text-wrapper">
                Male
                <hr/>
              </div>
              <div className="categories-images-wrapper">
                <Link  href={{ pathname: '/products', query: {   gender: ['', 'male'],      age : ['','adult']  } }}>
                  <a href="/products?gender=&gender=male&age=&age=adult">
                    <div className="categories-single-image-wrapper">
                      <p className="text-style-wrapper">Adult</p>
                      <img src={
                    this.props.posts.filter(post => ((post.acf.gender === 'male')
                    && ( post.acf.age === 'adult' )  ))[0].acf.icon.sizes.medium
                    || static_mockup
                  } alt="Male adult product icon."/>
                    </div>
                  </a>
                </Link>
                <Link  href={{ pathname: '/products', query: {   gender: ['', 'male'],      age : ['','children']  } }}>
                  <a href="/products?gender=&gender=male&age=&age=children">
                    <div className="categories-single-image-wrapper">
                        <p className="text-style-wrapper">Children</p>
                          <img src={
                        this.props.posts.filter(post => ((post.acf.gender === 'male')
                        && ( post.acf.age === 'children' )  ))[0].acf.icon.sizes.medium
                        || static_mockup
                      } alt="Male children product icon."/>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="categories-wrapper">
              <div className="text-wrapper">
                Female
                <hr/>
              </div>
              <div className="categories-images-wrapper">
                <Link  href={{ pathname: '/products', query: {   gender: ['', 'female'],      age : ['','adult']  } }}>
                  <a href="/products?gender=&gender=female&age=&age=adult">
                    <div className="categories-single-image-wrapper">
                      <p className="text-style-wrapper">Adult</p>
                        <img src={
                      this.props.posts.filter(post => ((post.acf.gender === 'female')
                      && ( post.acf.age === 'adult' )  ))[0].acf.icon.sizes.medium
                      || static_mockup
                    } alt="Female children product icon."/>
                    </div>
                  </a>
                </Link>
                <Link  href={{ pathname: '/products', query: {   gender: ['', 'female'],      age : ['','children']  } }}>
                  <a href="/products?gender=&gender=female&age=&age=children">
                    <div className="categories-single-image-wrapper">
                        <p className="text-style-wrapper">Children</p>
                          <img src={
                        this.props.posts.filter(post => ((post.acf.gender === 'female')
                        && ( post.acf.age === 'children' )  ))[0].acf.icon.sizes.medium
                        || static_mockup
                      } alt="Female children product icon."/>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

          </div>

        </section>

        </div>

    </Fragment>
    )
  }

}
