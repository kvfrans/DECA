// var mongoose = require('mongoose')
// var sendgrid  = require('sendgrid')("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");


db = db.getSiblingDB('deca')
var regis = db.users.find({"local.statesRegistered": 1});//var email = ["jonathan.z99@gmail.com"];
// print(regis);


print ("[");
while (regis.hasNext()) {
    current =  regis.next();
    print("\"" + current.local.email + "\"");
    if(regis.hasNext())
    {
      print (",");
    }

}
print ("];");

// for (var i = 0; i < email.length; i++){
//     db.users.update({"local.email":email[i]}, {$set: {"local.regionalsChecks":1, "local.regionalsForms":1}})
// }
