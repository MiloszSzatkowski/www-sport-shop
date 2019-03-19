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

const Btn = ({ onClick , onFocus, value , onChange }) => (
  <div className="navigation">

  <div><Link href="/"><a  onClick={onClick} href="/">Logo</a></Link></div>

  <div ><Link   href={{ pathname: '/products', query: { gender: ['','female',  'male'],       age : ['','children','adult']   } }}>
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

	<div><Link href="/"><a href="/">FILTER</a></Link></div>

	<div>
  <Link  href={{ pathname: '/products', query: {     gender: ['','male'],           age : ['','children','adult']    } }}>
  <a  onClick={onClick} href="">
  Male
  </a></Link>

  <div ><Link  href={{ pathname: '/products', query: {   gender: ['', 'male'],      age : ['','adult']  } }}>
  <a onClick={onClick} href="/">
  Adult
  </a></Link></div>

  <div ><Link  href={{ pathname: '/products', query: {    gender: ['', 'male'],  age : ['','children']  } }}>
  <a  onClick={onClick}  href="/">
  Children
  </a></Link></div>
  </div>

  <div>
  <Link  href={{ pathname: '/products', query: { gender: ['', 'female'], age : ['','children','adult']  } }}>
  <a onClick={onClick} href="">
  Female
  </a></Link>

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

  <div><Link href="/"><a href="/">Contact us</a></Link></div>
  <div><Link href="/"><a href="/">About</a></Link></div>
  <footer>social icons</footer>

  </div>
);

export default Btn;
