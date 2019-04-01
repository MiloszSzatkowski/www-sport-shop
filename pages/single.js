import 'react-app-polyfill/ie11';
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Meta_inf from '../components/Meta_inf'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

import the_SITE_url from '../components/Vars';

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      image_data_1: '',
      image_data_2: ''
    };
  }


  componentDidMount(){
    var that = this;
    var width = window.innerWidth;
    if (width < 500) {
      that.setState({ image_data_1: that.props.post.acf.visual_1.sizes.medium });
      that.setState({ image_data_2: that.props.post.acf.visual_2.sizes.medium });

    } else if (500 <= width < 900) {
      that.setState({ image_data_1: that.props.post.acf.visual_1.sizes.medium_large });
      that.setState({ image_data_2: that.props.post.acf.visual_2.sizes.medium_large });

    } if (900 <= width) {
      that.setState({ image_data_1: that.props.post.acf.visual_1.sizes.large });
      that.setState({ image_data_2: that.props.post.acf.visual_2.sizes.large });

    }
    that.forceUpdate();
    // console.log(that.state);
  }


  static async getInitialProps( context ) {

    const slug = context.query.slug;
    const response = await axios.get( `${the_SITE_url}/wp-json/wp/v2/posts?slug=${ slug }` )
    const response_2 = await axios.get( the_SITE_url + '/wp-json/global-api/v1/settings')
    return {
      post: response.data[0],
      global_: response_2.data
    }
  }

  render() {
    // console.log(this.props.post.acf.visual_1.sizes);

    const  global  = {state: this.state};

    return (
      <Fragment>
        <Head>
          <title>{ this.props.post.title.rendered }</title>
          <Meta_inf />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div className="page-wrapper">

        <section className="left">
          <Navigation img_logo={this.props.global_.logo_src}/>
        </section>

        <section className="right">
          <header>
            <h2 className="products-top-description">
              <span>
                <Link  href={{ pathname: '/products', query: {   gender: ['female', 'male'],      age : ['children','adult']  } }}>
                  <a href="">
                    Our products &rsaquo;
                  </a>
                </Link>
                <Link  href={{ pathname: '/products', query: {
                  gender: ['', `${this.props.post.acf.gender}`],
                  age : ['children','adult']  } }}>
                  <a href="">
                    {this.props.post.acf.gender} &rsaquo;
                  </a>
                </Link>
                <Link  href={{ pathname: '/products', query: {
                    gender: ['female', 'male'],
                    age : ['',`${this.props.post.acf.age}`]  } }}>
                  <a href="">
                    {this.props.post.acf.age}
                  </a>
                </Link>
              </span>
            </h2>
            <hr/>
          </header>

          <div className="wrapper-single-post">

            <div className="single-images">
              <div><img alt="" src={ global.state.image_data_1 }/></div>
              <div> <img alt="" className="sec_im_1" src={ global.state.image_data_2 }/></div>
            </div>

            <div className="single-desc">

              <div className="wrapper-product-navigation">
                <Link href="/products?gender=&gender=female&gender=male&age=&age=children&age=adult">
                  <a href="/products?gender=&gender=female&gender=male&age=&age=children&age=adult">Our products &rsaquo; </a>
                </Link>
                <Link  href={{ pathname: '/products', query: {     gender: ['',`${this.props.post.acf.gender}`],           age : ['','children','adult']    } }}>
                  <a href="/">{this.props.post.acf.gender} &rsaquo; </a>
                </Link>
                <Link  href={{ pathname: '/products', query: {     gender: ['female','male'],           age : ['',`${this.props.post.acf.gender}`]    } }}>
                  <a href="/">{this.props.post.acf.age}</a>
                </Link>
              </div>

              <h1>{ this.props.post.title.rendered }</h1>
              <h3 className="price">£ {this.props.post.acf.price} </h3>

              <div className="inline-wrapper">
              <h2>Colors: </h2>
              {  this.props.post.acf.colors.map((p,i,arr) => {return (<p className="pre-white">{p}{(i !== arr.length-1) ? ', ' : ' ' }</p>)})}
              </div>

              <div className="inline-wrapper">
              <h2>Sizes: </h2>
              {  this.props.post.acf.sizes.map((post,index) => {
                  return (
                    <div key={ index }   className="box" >
                    <p>  {post}  </p>
                    </div>                  )              })             }
              </div>

              <div>{this.props.post.acf.description}</div>

            </div>
            <div className="single-images"> <img alt="" className="sec_im_2" src={ global.state.image_data_2 }/></div>


          </div>

        </section>
        </div>
      </Fragment>
    )
  }
}
