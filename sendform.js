db = db.getSiblingDB('deca')
var regis = db.users.find({"local.statesRegistered": 1});//var email = ["jonathan.z99@gmail.com"];
// print(regis);


while (regis.hasNext()) {
    current =  regis.next();
    print(current.local.email);

    sendgrid.send({
		  to:       current.local.email,
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
