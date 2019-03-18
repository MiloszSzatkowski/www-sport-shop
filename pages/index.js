import 'react-app-polyfill/ie11';
import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import Router from 'next/router'

require('es6-promise').polyfill();

export default class extends Component {


    render() {

    return (
      <Fragment>
        <Head>
          <meta name="description" content="This is an example of a meta description. This will show up in search results." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div><Link href="/"><a href="/">FILTER</a></Link></div>

        <Navigation
      />

    </Fragment>


    )
  }

}
