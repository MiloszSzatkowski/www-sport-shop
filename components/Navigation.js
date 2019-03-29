import 'react-app-polyfill/ie11';
import Link from 'next/link';
import React, { Component, Fragment } from 'react';
import normalize from '../static/normalize.css';
import the_SITE_url from  '../components/Vars';
import style from '../static/style.css';
import axios from 'axios';
import Router from 'next/router';

function HandleEvent(event){
	if (event.keyCode == '13') {
		//enter pressed
		redirect();
	}
}

function redirect(event) {
	if ((window.location.href.indexOf('products') === -1) ||
			(window.location.href.indexOf('details') !== -1)) {
		var search_query = encodeURI(document.getElementById('search').value.toLowerCase().trim());
	  Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult&search=' + search_query)
	}
}

function filter_for_url(obj, par_lab) {
	return (obj.some(item => (item.parent_label == par_lab))) ?
	obj.filter(item => (item.parent_label == par_lab)) : false;
}

function assemble_url_fun(item) {
	if (item && (item.parent_label == 'genders')) {
		return ((item) ? `gender=${item.map(post => ('&gender=' + post.node_label)).join('')}` : 'gender=&gender=female&gender=male');
	} else if (item && (item.parent_label == 'ages')) {
		return ((item) ? `&age=${item.map(post => ('&age=' + post.node_label)).join('')}` : '&age=&age=children&age=adult');
	} else if (item && (item.parent_label == 'types')) {
		return ((item) ? `filters=${item.map(post => ('&filters=' + post.node_label)).join('')}` : '');
	}
}

function Filter_popup_more() {
	let flex_bool = document.getElementById('filter-popup').style;
	flex_bool.display = (flex_bool.display == 'flex') ? 'none' : 'flex';
	let fetch_el = document.getElementById('filter-popup');
	var filter_var = fetch_el.querySelectorAll('input');
	var filter_accum = [];
	for (var i = 0; i < filter_var.length; i++) {
		if (filter_var[i].checked) {
			filter_accum.push(
				{
					"parent_label" :  filter_var[i].parentElement.className,
					"node_label"   :  filter_var[i].parentElement.querySelector('span').innerHTML.trim()
				}
			);
		}
	}
	if (filter_accum !== '') {
		var url_arr = [filter_for_url(filter_accum, 'genders'), (filter_for_url(filter_accum, 'ages')), (filter_for_url(filter_accum, 'types'))];
		var assemble_url_genders = ((url_arr[0]) ? `gender=${url_arr[0].map(post => ('&gender=' + post.node_label.toLowerCase())).join('')}` : 'gender=&gender=female&gender=male');
		var assemble_url_ages = ((url_arr[1]) ? `&age=${url_arr[1].map(post => ('&age=' + post.node_label.toLowerCase())).join('')}` : '&age=&age=children&age=adult');
		var assemble_url_filters = ((url_arr[2]) ? `&filters=${url_arr[2][0].node_label.toLowerCase()}` : '');
		var assemble_url_var = assemble_url_genders.concat(assemble_url_ages, assemble_url_filters);
		// console.log(assemble_url_var);
		Router.push('/products?' + assemble_url_var);
	} else {
		Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult');
	}
}

function Filter_popup() {
	let flex_bool = document.getElementById('filter-popup').style;
	flex_bool.display = (flex_bool.display == 'flex') ? 'none' : 'flex';
}

function Filter_popup_wrapper(event) {
	if (event.target.className == 'filter-popup-wrapper') {
		Filter_popup('wrapper');
	}
}

function Filter_popup_navigation_button() {
	fetch_products();
}

function eval_radio_button() {
	return ' var that=this; var pr = this.parentElement.querySelectorAll(`input`); \
	for (var i = 0; i < pr.length; i++) { \
		if (pr[i] !== that.children[0]) { \
			 pr[i].checked = false;  \
		} \
	} \
'
}

function gen_HTML_for_filter_input(fields, url_params, type_, parent_type) {
	// console.log( `Params: ${url_params} , Items: ${Object.values(fields).toString()}`  );
	return Object.values(fields)
	.map(item =>
		(`<label class="${parent_type}" onclick="${
			(type_ == 'radio') ? eval_radio_button() : console.log()
		}" ><input type="checkbox" name="${parent_type}" ${((url_params != null)
		&&  url_params.match((new RegExp( `(^${item.toLowerCase()}*|[\\s])` , "g")))) ? 'checked' : ''}/>	\
		<span>${item}</span></label>`))
		.toString().replace(/,/g, '');
}

function fetch_products() {
	var tr = window.location.href.split('&');
	var url_params_filters = tr.filter(item => (item.match(/^filters*/))).map(item => (item.replace("filters=",''))).filter(item => (item != null)).join(' ').trim();
	var url_params_genders = tr.filter(item => (item.match(/^gender*/))).map(item => (item.replace("gender=",''))).filter(item => (item != null)).join(' ').trim();
	var url_params_ages = tr.filter(item => (item.match(/^age*/))).map(item => (item.replace("age=",''))).filter(item => (item != null)).join(' ').trim();
	// console.table('\n\n');
	axios.get(the_SITE_url + '/wp-json/global-custom-types/v1/settings')
	.then(function (response) {
			document.getElementById('fetch_types').innerHTML = gen_HTML_for_filter_input(response.data.types.choices, url_params_filters, 'radio', 'types');
			document.getElementById('fetch_genders').innerHTML = gen_HTML_for_filter_input(response.data.genders.choices, url_params_genders, 'checkbox', 'genders');
			document.getElementById('fetch_ages').innerHTML = gen_HTML_for_filter_input(response.data.ages.choices, url_params_ages, 'checkbox', 'ages');
	})
	.catch(function (error) {
		console.log(error);
	}).then(function () {
		Filter_popup();
	})
}


export default class extends Component {

	constructor(props) {
    super(props);

    this.state = {
			loading: '',
      logo_src: '/static/loading_white.png',
			nr_ch_f: '0',
			nr_ch_m: '0',
			nr_ad_f: '0',
			nr_ad_m: '0',
			nr_men: '0',
			nr_wom: '0'
    };
  }

	componentWillMount = () => {
		// console.log('mount');
		var that  = this;
		axios.get( the_SITE_url + '/wp-json/global-api/v1/settings').
		then(function(response){
			that.setState({
				logo_src: response.data.logo_src,
			 })
		}).then({
			//
		})

		axios.get( the_SITE_url + '/wp-json/wp/v2/posts').
		then(function(response){
			that.setState({
				nr_ch_f: Object.keys(response.data.filter(i=> ((i.acf.gender  == 'female') && (i.acf.age  == 'children') ))).length,
				nr_ch_m: Object.keys(response.data.filter(i=> ((i.acf.gender  == 'male') && (i.acf.age  == 'children') ))).length,
				nr_ad_f: Object.keys(response.data.filter(i=> ((i.acf.gender  == 'female') && (i.acf.age  == 'adult') ))).length,
				nr_ad_m: Object.keys(response.data.filter(i=> ((i.acf.gender  == 'male') && (i.acf.age  == 'adult') ))).length,
				nr_men: Object.keys(response.data.filter(i=> (i.acf.gender  == 'male' ))).length,
				nr_wom: Object.keys(response.data.filter(i=> (i.acf.gender  == 'female' ))).length,
			 })
		}).then({
			//
		})
	}

	componentDidMount () {
		var wlh = window.location.href
		var nav_arr = {
			our_products: document.getElementById('our-products'),
			male: document.getElementById('male'),
			male_adult: document.getElementById('male-adult'),
			male_children: document.getElementById('male-children'),
			female: document.getElementById('female'),
			female_adult: document.getElementById('female-adult'),
			female_children: document.getElementById('female-children'),
			contact: document.getElementById('contact'),
			about: document.getElementById('about')
		}

		if (wlh.includes('contact')) {
			nav_arr.contact.classList.add('red');
		} else if (wlh.includes('about')) {
			nav_arr.about.classList.add('red');
		} else if (wlh.includes('male') && wlh.includes('female') && wlh.includes('children') && wlh.includes('adult')) {
			nav_arr.our_products.classList.add('red');
		} else if (wlh.includes('female') && wlh.includes('children') && wlh.includes('adult')) {
			nav_arr.female.classList.add('red');
		} else if (wlh.includes('male') && (!(wlh.includes('female') )) && wlh.includes('children') && wlh.includes('adult')) {
			nav_arr.male.classList.add('red');
		}
	}

	render(){
		const  global  = {state: this.state};

		return(
			<div>
		  <nav className="navigation">

		  <div><Link href="/"><a  onClick={this.props.onClick} href="/" prefetch >
				<img id="logo" src={this.props.img_logo} alt="logo" /></a></Link></div>

		  <div className="nav-our-products" ><Link
				href={{ pathname: '/products', query: { gender: ['','female',  'male'],
				age : ['','children','adult']   } }}>
		  <a id="our-products" onClick={this.props.onClick} href="/">
		  Our products
		  </a></Link>
		  </div>

			<div className="input">
			<input type="text"
			value={this.props.value}
			onChange={this.props.onChange}
			onKeyDown={this.props.HandleEvent}
			id="search"
			placeholder="search..."
			 ></input>
		 <span onClick={redirect}></span>
			</div>

			<div id="put-xxx"><a id="filter-btn-menu" className="filter-btn" onClick={Filter_popup_navigation_button}>
					<div className="filter-btn-a">
					FILTER</div>
				</a>
			</div>

			<div className="nav-category-header-wrapper">
		  <Link  href={{ pathname: '/products', query: {     gender: ['','male'],           age : ['','children','adult']    } }} >
		  <a id="male" className="nav-category-header" onClick={this.props.onClick} href="">
		  Male ({global.state.nr_men})
		  </a></Link></div>

			<div className="nav-tabbed-subcategories">
			  <div ><Link  href={{ pathname: '/products', query: {   gender: ['', 'male'],      age : ['','adult']  } }}>
			  <a id="male-adult" onClick={this.props.onClick} href="/">
			  Adult   ({global.state.nr_ad_m})
			  </a></Link></div>

			  <div ><Link  href={{ pathname: '/products', query: {    gender: ['', 'male'],  age : ['','children']  } }}>
			  <a  id="male-children"  onClick={this.props.onClick}  href="/">
			  Children  ({global.state.nr_ch_m})
			  </a></Link></div>
		  </div>

		  <div className="nav-category-header-wrapper">
		  <Link  href={{ pathname: '/products', query: { gender: ['', 'female'], age : ['','children','adult']  } }}>
		  <a id="female" className="nav-category-header" onClick={this.props.onClick} href="">
		  Female ({global.state.nr_wom})
		  </a></Link></div>

			<div className="nav-tabbed-subcategories">
			  <div >
			  <Link  href={{ pathname: '/products', query: { gender: ['', 'female'], age : ['','adult']    } }}>
			  <a id="female-adult"  onClick={this.props.onClick} href="">
			  Adult ({global.state.nr_ad_f})
			  </a></Link>
			  </div>

			  <div ><Link  href={{ pathname: '/products', query: { gender: ['', 'female'], age : ['','children']  } }}>
			  <a id="female-children"   onClick={this.props.onClick} href="/">
			  Children ({global.state.nr_ch_f})
			  </a></Link>
			  </div>
		  </div>

			<div className="nav-contact-about-subpages-wrapper">
			  <div className="nav-contact-about-subpages">
					<Link href="/contact"><a id="contact"  href="/contact" prefetch >Contact us</a></Link></div>
			  <div className="nav-contact-about-subpages">
					<Link href="/about"><a id="about"  href="/about" prefetch >About</a></Link></div>
			</div>

		  <footer className="social-icons">
			</footer>

		  </nav>

			<div id="filter-popup" className="filter-popup-wrapper"
			onClick={Filter_popup_wrapper}>
				<div className="filter-popup">

					<div className="divide-row" >
						<div className="float-left">
							<p>Gender</p>
								<div id="fetch_genders">
									loading...
								</div>
							<div >
								<p>Products</p>
								<div id="fetch_types">
									loading...
								</div>
							</div>
						</div>

						<div className="float-right">
						<p>Age</p>
							<div id="fetch_ages" >
								loading...
							</div>
						</div>
					</div>

					<div>
						<a id="filter" className="filter-btn" onClick={Filter_popup_more}>
							<div className="filter-btn-a">
							FILTER</div>
						</a>
					</div>

				</div>
			</div>

		</div>
		)
	}


}
