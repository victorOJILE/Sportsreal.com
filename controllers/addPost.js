const path = require('path');
const fs = require('fs');

function addPost(body) {
  let file = fs.readFileSync(path.join(__dirname, "../CMS/login/preview.html"), "utf8", (err) => {
        if(err) console.log(err);
    });
  let response = file.replace("__STATE__", JSON.stringify(body));
  return(response);
}
// Add readmore property to body before sending
exports.addPost = addPost;