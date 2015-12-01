//var firstname = [ "Alexandra", "Dominik", "Lena", "Vidur", "Misty", "Eric", "Raymond", "Shirley", "Cassie", "Aditya", "William", "Leonard", "Hoyoung", "Karen", "Bo", "Samir", "Jamie", "Kobe", "Stephanie", "Isabel", "Simon", "Jocelyn", "David", "Kathleen", "Young", "Timothy", "Emily"]

//var lastname = [ "Ting", "Lucha", "Ye", "Thukral", "Hong", "Wang", "Wu", "Zhang", "Chou", "Ganapathi", "Liu", "Wong", "Lee", "Zhu", "Rasmussen", "Puranik", "Huang", "Chang", "Zhang", "Wei", "Rufer", "Liu", "Hou", "Ji", "Lee", "Sears", "Cao"]

var firstname = ["Jonathan"];
var lastname = ["Zhang"];
for (var i = 0; i < firstname.length; i++){
    db.users.update({"local.firstname":firstname[i], "local.lastname":lastname[i]}, {$set: {"local.regionalsChecks":1, "local.regionalsForms":1}})
}

