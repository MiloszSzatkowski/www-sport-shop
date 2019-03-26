import 'react-app-polyfill/ie11';
import Link from 'next/link';
import React, { Component, Fragment } from 'react';
import normalize from '../static/normalize.css';
import the_SITE_url from  '../components/Vars';
import global_settings from '../components/Vars';
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
		if (search_query != '') {
			Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult&search=' + search_query)
		}
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

function gen_HTML_for_filter_input(fields, url_params, type_, parent_type) {
	// console.log( `Params: ${url_params} , Items: ${Object.values(fields).toString()}`  );
	return Object.values(fields)
	.map(item =>
		(`<label class="${parent_type}"><input type="${type_}" name="${parent_type}" ${((url_params != null)
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
	console.log(url_params_genders);
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

const Btn = ({ onClick , onFocus, value , onChange }) => (
	<div>
  <nav className="navigation">

  <div><Link href="/"><a  onClick={onClick} href="/">Logo</a></Link></div>

  <div className="nav-our-products" ><Link
		href={{ pathname: '/products', query: { gender: ['','female',  'male'],
		age : ['','children','adult']   } }}>
  <a onClick={onClick} href="/">
  Our products
  </a></Link>
  </div>

	<div className="input">
	<span onClick={redirect}></span>
	<input type="text"
	value={value}
	onChange={onChange}
	onKeyDown={HandleEvent}
	id="search"
	placeholder="search..."
	 ></input>
	</div>

	<a className="filter-btn" onClick={Filter_popup_navigation_button}>
		<div className="filter-btn-a">
		FILTER</div>
	</a>

	<div className="nav-category-header-wrapper">
  <Link  href={{ pathname: '/products', query: {     gender: ['','male'],           age : ['','children','adult']    } }}>
  <a className="nav-category-header" onClick={onClick} href="">
  Male
  </a></Link></div>

	<div className="nav-tabbed-subcategories">
	  <div ><Link  href={{ pathname: '/products', query: {   gender: ['', 'male'],      age : ['','adult']  } }}>
	  <a onClick={onClick} href="/">
	  Adult
	  </a></Link></div>

	  <div ><Link  href={{ pathname: '/products', query: {    gender: ['', 'male'],  age : ['','children']  } }}>
	  <a  onClick={onClick}  href="/">
	  Children
	  </a></Link></div>
  </div>

  <div className="nav-category-header-wrapper">
  <Link  href={{ pathname: '/products', query: { gender: ['', 'female'], age : ['','children','adult']  } }}>
  <a  className="nav-category-header" onClick={onClick} href="">
  Female
  </a></Link></div>

	<div className="nav-tabbed-subcategories">
	  <div >
	  <Link  href={{ pathname: '/products', query: { gender: ['', 'female'], age : ['','adult']    } }}>
	  <a  onClick={onClick} href="">
	  Adult
	  </a></Link>
	  </div>

	  <div ><Link  href={{ pathname: '/products', query: { gender: ['', 'female'], age : ['','children']  } }}>
	  <a  onClick={onClick} href="/">
	  Children
	  </a></Link>
	  </div>
  </div>

	<div className="nav-contact-about-subpages-wrapper">
	  <div className="nav-contact-about-subpages"><Link href="/"><a href="/">Contact us</a></Link></div>
	  <div className="nav-contact-about-subpages"><Link href="/"><a href="/">About</a></Link></div>
	</div>

  <footer className="social-icons">social icons</footer>

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
);

export default Btn;
