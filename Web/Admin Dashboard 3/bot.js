var webPage = require('webpage');
var system = require('system');
var args = system.args;
var page = webPage.create();
var url = decodeURIComponent(args[1]);
var admin_pwd = args[2];

// Login as admin
page.open('http://localhost/login.php?username=admin&password='+admin_pwd, function (status) {
    // Open the URL given and wait 3 seconds
    page.open(url, function (status) {
      setTimeout(function(){
        phantom.exit();
      },3000);
    });
});
