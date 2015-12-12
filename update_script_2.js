
cursor = db.users.find().sort({"local.email":1});
while (cursor.hasNext()) {
    current =  cursor.next();
//    lastname = current.local.lastname;
//    lastname = lastname.replace(" ", "");
//    db.users.update({"local."+
	if (current.local.regionalsEventsFinalized != null){	
	print(current.local.firstname + " " + current.local.lastname);
	print(current.local.regionalsRoleplay + " " + current.local.roleplayPartner);
	print(current.local.regionalsWritten + " " + current.local.writtenPartner1 + " " + current.local.writtenPartner2);
	//print(current.local.regionalsRoommate3);
	print("\n");	
//lower_email = email.toLowerCase();
	//db.users.update({"local.email": email}, {$set:{"local.email":lower_email}});

}}
