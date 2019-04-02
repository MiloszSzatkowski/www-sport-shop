import 'react-app-polyfill/ie11';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from    '../components/Navigation';
import Meta_inf from      '../components/Meta_inf';
import the_SITE_url from  '../components/Vars';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Router from 'next/router';

var filterIsOn = false;

function initial_search(post){
  for (let i = 0; i < this.gender.length; i++) {
    if (post.acf.gender == this.gender[i]) {
      for (let j = 0; j < this.age.length; j++) {
          if (post.acf.age == this.age[j]) {
            return true;
            break;
          }
      }
    }
  }
  return false;
}

function mass_replace(array_of_strings_to_replace, str, replace_with) {
  var str = str;
  for (var i = 0; i < array_of_strings_to_replace.length; i++) {
    try {
      str.replace(array_of_strings_to_replace[i], replace_with)
    } catch (e) { }
  }
  return str;
}

function search(post){
  var that = this.toLowerCase().replace(/\.|,/g, '').trim();
  var contains_space = (that.trim().indexOf(' ') !== -1);
  var contains_male = (that.split(' ').some(item => (item == 'male')));
  var post_concat = post.title.rendered.concat(' ' ,post.acf.gender, ' ' ,post.acf.age, ' ', post.acf.type).toLowerCase();
  // console.log(post_concat);
  var post_concat_no_gender = post.title.rendered.concat(' ' , ' ' ,post.acf.age).toLowerCase();
  var current_post_is_male = (post.acf.gender == 'male');
  // var products_types_arr = mass_replace(['female', 'male', 'children', 'adult'], that, '').trim();

  if (contains_space) {
    var array_of_keywords = that.split(' ');
    if (contains_male) {
      var array_of_keywords_without_male = remove_from_arr(array_of_keywords, 'male');
      var cond = contains_every_of(array_of_keywords_without_male, post_concat_no_gender);
      return ( cond && current_post_is_male );
    } else {
      var cond = contains_every_of(array_of_keywords, post_concat);
      return cond;
    }
  } else {
    if (contains_male) {
      return current_post_is_male;
    } else {
      var cond = post_concat.indexOf( that ) !== -1;
      return cond;
    }
  }
}

function contains_every_of(array, string) {
  var bool_accum = 0;
  for (var i = 0; i < array.length; i++) {
    if(string.indexOf(array[i]) !== -1){ bool_accum++; }
  }
  if (bool_accum === (array.length)) {
    return true;
  } else { return false; }
}

function contains_any_of(array, string) {
  for (var i = 0; i < array.length; i++) {
    if(string.indexOf(array[i]) !== -1){
      return true;
     }
  }
  return false;
}

function remove_from_arr(array, string) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] == string){ array.splice(i,1)}
  }
  return array;
}

function redirect_to_main() {
  Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult')
}

export default class extends Component {

  componentDidMount(){
    var that = this;
    var  initial_s = (this.props.query.search) ? this.props.query.search : '';
    if (initial_s != '') {
      document.getElementById('search').value = initial_s;
      this.setState({ search: initial_s });
      that.forceUpdate();
    }
  }

  componentDidUpdate(){
    var that = this;

    var existing_xs = document.getElementsByClassName('x_butt_filter');
    console.log(existing_xs);
    var x_exists = existing_xs.length > 0;

    if (x_exists) {
      for (var i = 0; i < existing_xs.length; i++) {
        existing_xs[i].parentNode.removeChild(existing_xs[i])
      }
    }

    var el_ = document.createElement('p');
    el_.innerHTML = '&#10006;'; el_.className = 'x_butt_filter';
    el_.addEventListener('click', function () {
      Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult');
    });
    var popup_check =  document.getElementById('put-xxx');
    popup_check.appendChild(el_);

    if (that.props.query.filters != undefined) {
      el_.style.display = 'flex';
    } else {
      el_.style.display = 'none';
    }
  }

  updateSearch(event){
    this.setState({
      search: event.target.value
    });
  }

  cleanSearch(){
      this.setState({
        search: '',
        filters: ''
      })
  }

  static async getInitialProps(context) {

    const response = await axios.get( the_SITE_url + '/wp-json/wp/v2/posts');
    const response_2 = await axios.get( the_SITE_url + '/wp-json/global-api/v1/settings');

    return {
      posts: response.data,
      query: context.query,
      global_: response_2.data

    }
  }

  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  render() {

    if ((this.props.query == null) || (this.props.query == undefined)) {
      console.log(this.props.query);
      Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult');
    }

    let filteredPosts =
    (((this.props.query != null) && (this.state.search == '')) ?
    this.props.posts.filter(  initial_search, this.props.query   ) :
    this.props.posts.filter(  search,         this.state.search   )).
    filter( search, ((this.props.query.filters) ? this.props.query.filters : '') );

    return (
      <Fragment>

        <Head>
          <title>{this.props.global_.name}</title>
          <meta name="description" content="{this.props.global_.description}" />
          <Meta_inf />
        </Head>

        <div className="page-wrapper">

        <section className="left">
            <Navigation img_logo={this.props.global_.logo_src}
              onClick={this.cleanSearch.bind(this)}
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}/>
        </section>

        <section className="right">
          <header>
            <h2 className="products-top-description">
              <span>
                <Link  href={{ pathname: '/products', query: {   gender: ['female', 'male'],      age : ['children','adult']  } }}>
                  <a href="">
                    Our products
                  </a>
                </Link>
                  {(this.props.query.gender) ? <a>&rsaquo;</a> : ''}
                  {this.props.query.gender &&
                   this.props.query.gender.filter(i => (i != '')).map(
                     (item,index) => {
                      return(
                              <Link key={item.toString()}  href={{ pathname: '/products', query: {   gender: ['',`${item}`],  age : ['children','adult']  } }}>
                                  <a  key={item.toString()} href="">{item.toString()}
                                    {((Object.keys(this.props.query.gender.filter(i => (i != ''))).length > 1) && index == 0) ? `   &` : ''}
                                  </a>
                              </Link>
                          )
                        }
                      )
                    }
                  {(this.props.query.gender) ? <a>&rsaquo;</a> : ''}
                  {this.props.query.age &&
                   this.props.query.age.filter(i => (i != '')).map(
                     (item, index) => {
                      return(
                              <Link key={item.toString()} href={{ pathname: '/products', query: {   gender: ['female', 'male'],  age : ['',`${item}`]  } }}>
                                <a key={item.toString()}  href="">{item.toString()}
                                  {((Object.keys(this.props.query.age.filter(i => (i != ''))).length > 1) && index == 0) ? `   &` : ''}
                                </a>
                              </Link>
                          )
                        }
                      )
                    }
              </span>
                <p className="filters-headline"
                  onClick={redirect_to_main}>
                  {(this.props.query.filters != undefined) ?  <span className="filters-headline-before"></span>  : '' }
                  {(this.props.query.filters != undefined) ? this.props.query.filters   : '' }
                </p>
            </h2>
          </header>
          <hr className="hr-products-divider" />
          <article className="wrapper-products"
            id="wrapper-inner-products">
            { filteredPosts &&
              filteredPosts.
              map( post => {
                return (
                  <div key={ post.id }
                    className="wrapper-inner-products">
                    <Link href={ `/products/details/${ post.slug }` }>
                    <div className="hover-helper">Click to see details...</div>
                    </Link>
                    <Link href={ `/products/details/${ post.slug }` }>
                      <a href={ `/products/details/${ post.slug }` }>
                        <img src={ (post.acf.icon.sizes.medium) ? post.acf.icon.sizes.medium : '/static/loading.png' }
                          alt="alt text"
                          className="post-thumb-image"
                          />
                        <p>{ post.title.rendered }</p>
                        <span> {post.acf.price} £ </span>
                      </a>
                    </Link>
                  </div>
                )
              })
            }
          </article>
        </section>

      </div>

    </Fragment>
    )
  }
  // END OF RENDER

}
