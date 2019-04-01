const express = require( 'express' );
const next    = require( 'next' );
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');

// Import middleware.
const routes = require( './routes' );

// Setup app.
// const app     = next( { dev: false } );
const app     = next( { dev: true } );
const handle  = app.getRequestHandler();
const handler = routes.getRequestHandler( app );

app.prepare()
  .then( () => {

    // Create server.
    const server = express();

    server.use(bodyParser.urlencoded({ extended: false}));
    server.use(bodyParser.json());

    server.post('/send', (req, res) => {
        console.log(req.body);
        const output = `
        <style>
        th{padding: 5px; border: 1px solid grey;}
        </style>
            <table>
              <tr>
                <th>Name</th>
                <th>${req.body._name.toString()}</th>
              </tr>
              <tr>
                <th>Contact number</th>
                <th>${req.body.num.toString() || 'Not provided'}</th>
              </tr>
              <tr>
                <th>Email</th>
                <th><a href="${req.body.email.toString()}">
                ${req.body.email.toString()}</a></th>
              </tr>
            </table>

            <h2>Message:</h2>
            <p>${req.body.mess.toString()}</p>
            <hr/>
          `;

        async function main(){

          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            host: "mail.milodavid.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'EMAIL', // generated ethereal user
              pass: 'PASSWORD' // generated ethereal password
            },
            tls: {
              rejectUnauthorized: false
            }
          });

          // setup email data with unicode symbols
          let mailOptions = {
            from: `"${req.body._name}" ${req.body.email}`, // sender address
            to: "design@milodavid.com", // list of receivers
            subject: `${req.body._name}` + " ✔ — new message", // Subject line
            // text: "Hello world?", // plain text body
            html: output, // html body
            replyTo: `${req.body.email}`
          };

          // send mail with defined transport object
          let info = await transporter.sendMail(mailOptions, function (err, info) {
            if(err){
              res.redirect('/contact?res=' + 'error');
            } else {
              res.redirect('/contact?res=success');
            }
          })

          // console.log("Message sent: %s", info.messageId);
          // Preview only available when sending through an Ethereal account
          // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }

        main().catch(console.error);

    });

    // Use our handler for requests.
    server.use( handler );

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
