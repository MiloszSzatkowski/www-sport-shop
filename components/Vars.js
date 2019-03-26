import axios from 'axios';

var globalData;
var the_SITE_url = 'http://davidstobart.local';

axios.get( the_SITE_url + '/wp-json/global-api/v1/settings')	.then(function (response) {
    global_settings = response;
    // console.log(response.data);
  })
  .catch(function (error) {
    // console.log(error);
  })
  .then(function () {
    // always executed
  });

export var global_settings;

export default the_SITE_url;
