var dropbox = require('../dropbox-api.js');
var fs = require('fs');
var path = require('path');

var credentials = JSON.parse(fs.readFileSync(path.join(__dirname, 'credentials.json')));

//set token authentication:
dropbox.authenticate({
	token: credentials.TOKEN
});

//api call:
// dropbox({
// 	resource: 'users/get_current_account'
// }, function callback(err, response){
// 	if(err){ return console.log('err:', err); }
// 	console.log(response);
// });


// dropbox({
// 	resource: 'files/upload',
// 	parameters: {
// 		path: '/'+(+ new Date())+'.jpg'
// 	},
// 	readStream: fs.createReadStream(__dirname+'/oauth2-token.js')
// }, function(err, result){
// 	if(err){ return console.log('err:', err); }
// 	console.log(result);
// });

// dropbox({
// 	resource: 'files/get_metadata',
// 	parameters: {
// 		path: '/aaaa.jpg'
// 	}
// }, function(err, result){
// 	if(err){ return console.log('err:', err); }
// 	console.log(result);
// });


// dropbox({
// 	resource: 'files/download',
// 	parameters: {
// 		path: '/aaaa.jpg'
// 	}
// }, function(err, result){
// 	if(err){ return console.log('err:', err); }
// 	console.log(result);
// }).pipe( fs.createWriteStream('./image.jpg') );
