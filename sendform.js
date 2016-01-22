// var mongoose = require('mongoose')
var sendgrid  = require('sendgrid')("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");


// db = db.getSiblingDB('deca')
var regis = [
"kevinfrans2@gmail.com"
,
"same"
];
// print(regis);


for (var i = 0; i < regis.length; i++) {
    current =  regis[i];
    // print(current);

    sendgrid.send({
		  to:       current,
		  from:     'kevin@gunndeca.org',
		  subject:  'States Forms',
		  text:
		  'Thanks for signing up for states! Forms: ',
		}, function(err, json) {
		  if (err) { return console.error(err); }
		  console.log(json);
		});
}

// for (var i = 0; i < email.length; i++){
//     db.users.update({"local.email":email[i]}, {$set: {"local.regionalsChecks":1, "local.regionalsForms":1}})
// }
