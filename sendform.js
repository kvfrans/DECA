db = db.getSiblingDB('deca')
var regis = db.users.find({"local.statesRegistered": 1});//var email = ["jonathan.z99@gmail.com"];
// print(regis);


while (regis.hasNext()) {
    current =  regis.next();
    print(current.local.email);
}

// for (var i = 0; i < email.length; i++){
//     db.users.update({"local.email":email[i]}, {$set: {"local.regionalsChecks":1, "local.regionalsForms":1}})
// }
