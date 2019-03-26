import 'react-app-polyfill/ie11';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from    '../components/Navigation';
import Meta_inf from      '../components/Meta_inf';
import the_SITE_url from  '../components/Vars';
import React, { Component, Fragment } from 'react';
import axios from 'axios';

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
    const response = await axios.get( the_SITE_url + '/wp-json/wp/v2/posts')
    return {
      posts: response.data,
      query: context.query
    }
  }

  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  render() {

    let filteredPosts =
    (((this.props.query != null) && (this.state.search == '')) ?
    this.props.posts.filter(  initial_search, this.props.query   ) :
    this.props.posts.filter(  search,         this.state.search   )).
    filter( search, ((this.props.query.filters) ? this.props.query.filters : '') );

    return (
      <Fragment>
        <Head>
          <title>Sport</title>
          <meta name="description" content="This is an example of a meta description. This will show up in search results." />
          <Meta_inf/>
        </Head>

        <div className="page-wrapper">

        <section className="left">
            <Navigation onClick={this.cleanSearch.bind(this)}
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}/>
        </section>

        <section className="right">
          <header>
            <h2 className="products-top-description">
              <Link  href={{ pathname: '/products', query: {   gender: ['female', 'male'],      age : ['children','adult']  } }}>
                <a href="">
                  Our products
                </a>
              </Link>
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
