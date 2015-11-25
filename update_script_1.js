//var firstname = ["Amit", "Jenny", "Cheryl", "Emily", "Lucas", "Lawrence", "Andrew", "Aaron", "Kaelyn", "Urmi", "Michelle", "Jordan", "Sean", "Emily", "Grace", "Justine", "Michael", "Christopher", "Celine", "Audrey", "Daniel", "Michael", "Cindy", "Dana", "Tiffany", "Michael", "Jeffrey", "Julie"]


//var lastname = ["Rao", "Han", "Kao", "Mo", "Batties", "Chen", "Schloss", "Babian", "Schloss", "Hofland", "Cheong", "Tam", "Lin", "Wong", "Ding", "Cho", "Jeong", "Ting", "Shaw", "Li", "Chu", "Wu", "Guo", "Zhao", "Yang", "Huang", "Lee-Heidenreich", "Lee"]

var firstname = ["Jonathan"];
var lastname = ["Zhang"];
for (var i = 0; i < firstname.length; i++){
    db.users.update({"local.firstname":firstname[i], "local.lastname":lastname[i]}, {$set: {"local.regionalsChecks":1, "local.regionalsForms":1}})
}

