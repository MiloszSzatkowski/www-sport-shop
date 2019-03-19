import 'react-app-polyfill/ie11';
import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Meta_inf from '../components/Meta_inf'
import React, { Component, Fragment } from 'react'
import Router from 'next/router'

require('es6-promise').polyfill();

export default class extends Component {


    render() {

    return (
      <Fragment>
        <Head>
          <title>Sport</title>
          <meta name="description" content="This is an example of a meta description. This will show up in search results." />
          <Meta_inf />
        </Head>

        <Navigation/>

    </Fragment>
    )
  }

}
