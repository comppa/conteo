const google = require('googleapis');

// Each API may support multiple versions. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const forms = google.forms({
  version: 'v3',
  auth: 'AIzaSyDqhLephgZA_HWlMyco8loUvUeK3BKKQs4'
});

const params = {
  blogId: '3213900'
};

// get the blog details
forms.forms.get(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`The form url is ${res.data.url}`);
});