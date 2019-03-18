const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'index', '/' )
  .add( 'products', '/products/:slug')
  .add( 'single', '/products/details/:slug' )
  .add( 'contact', '/contact' )
  .add( 'about', '/about' );
