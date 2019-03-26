const express = require( 'express' );
const next    = require( 'next' );

// Import middleware.
const routes = require( './routes' );

// Setup app.
// const app     = next( { dev: false } );
const app     = next( { dev: true } );
const handle  = app.getRequestHandler();
const handler = routes.getRequestHandler( app );

const redirects = [
  { from: '/products/details', to: '/' },
  { from: '/products/details/', to: '/' },
]

app.prepare()
  .then( () => {

    // Create server.
    const server = express();

    // Use our handler for requests.
    server.use( handler );

    redirects.forEach(({ from, to, method = 'get' }) => { //type not defined
      server[method](from, (req, res) => {
        res.redirect(type, to)
      })
    });

    // Don't remove. Important for the server to work. Default route.
    server.get( '*', ( req, res ) => {
      return handle( req, res );
    } );

    // Get current port.
    const port = process.env.PORT || 8080;

    // Error check.
    server.listen( port, err => {
      if ( err ) {
        throw err;
      }

      // Where we starting, yo!
      console.log( `> Ready on port ${port}...` );
    } );
  } );
