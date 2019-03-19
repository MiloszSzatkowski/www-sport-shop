import 'react-app-polyfill/ie11';
import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import normalize from '../static/normalize.css'
import style from '../static/style.css'

import Router from 'next/router'
require('es6-promise').polyfill();

function HandleEvent(event){
	if (event.keyCode == '13') {
		//enter pressed
		redirect();
	}
}

function redirect() {
	if ((window.location.href.indexOf('products') === -1) ||
			(window.location.href.indexOf('details') !== -1)) {
		var search_query = encodeURI(document.getElementById('search').value.toLowerCase().trim());
		Router.push('/products?gender=&gender=female&gender=male&age=&age=children&age=adult&search=' + search_query)
	}
}

function Filter_popup() {
	let flex_bool = document.getElementById('filter-popup').style;
	flex_bool.display = (flex_bool.display == 'flex') ? 'none' : 'flex';	  
}

const Btn = ({ onClick , onFocus, value , onChange }) => (
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

	<a className="filter-btn" onClick={Filter_popup}>
		<a className="filter-btn-a">
		FILTER</a>
	</a>

	<div id="filter-popup" className="filter-popup-wrapper">
		<div className="filter-popup">
			<p>Gender</p>
			<label>
				<input className="" type="checkbox" name="" value="" />
				Female
			</label>
			<label>
				<input className="" type="checkbox" name="" value="" />
				Male
			</label>
			<p>Age</p>
				<label>
					<input className="" type="checkbox" name="" value="" />
					Adult
				</label>
				<label>
					<input className="" type="checkbox" name="" value="" />
					Children
				</label>
			<p>Products</p>

				<a className="filter-btn" onClick={Filter_popup}>
					<a className="filter-btn-a">
					FILTER</a>
				</a>
		</div>
	</div>

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
);

export default Btn;
