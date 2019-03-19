import 'react-app-polyfill/ie11';
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Meta_inf from '../components/Meta_inf'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

require('es6-promise').polyfill();

import the_SITE_url from '../components/Vars';

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps( context ) {

    const slug = context.query.slug;
    // console.log('SLUG', context.query.slug);
    // Make request for posts.
    const response = await axios.get( `${the_SITE_url}/wp-json/wp/v2/posts?slug=${ slug }` )

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>{ this.props.post.title.rendered }</title>
          <Meta_inf />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div className="page-wrapper">

        <section className="left">
          <Navigation/>

        </section>

        <section className="right">
          <div> <img src={this.props.post.acf.visual_1.medium || '/static/loading.png'}/>  </div>
          <div> <img src={this.props.post.acf.visual_2.medium || '/static/loading.png'}/>  </div>

          <h1>{ this.props.post.title.rendered }</h1>

          <div className="wrapper-colors">
          {
            this.props.post.acf.colors.map(post => {
              return (
                <div key={ post }
                  className="post-color"
                  dangerouslySetInnerHTML={ {
                    __html:  post
                  } } />
              )
            })
          }
          </div>

          <div className="wrapper-colors">
          {
            this.props.post.acf.sizes.map(post => {
              return (
                <div key={ post }
                  className="post-color"
                  dangerouslySetInnerHTML={ {
                    __html:  post
                  } } />
              )
            })
          }
          </div>

          <div className="wrapper-product-navigation">
            <div>
              <Link href="/"><a href="/">Our products</a></Link>
            </div>
            <div
              className="post-age"
              dangerouslySetInnerHTML={ {
                __html: this.props.post.acf.age
              } } />
            <div
              className="post-gender"
              dangerouslySetInnerHTML={ {
                __html: this.props.post.acf.gender
              } } />
          </div>

            <div
              className="post-content"
              dangerouslySetInnerHTML={ {
                __html: this.props.post.content.rendered
              } } />
        </section>

        </div>

      </Fragment>
    )
  }
}
