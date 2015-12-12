current = db.users.find();
while (current.hasNext()){
	print(current.next().local.email);
}
