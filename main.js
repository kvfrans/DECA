window.sr = new scrollReveal();

function submitEmail()
{
	bootbox.dialog({
                title: "Information",
                message: '<div class="row">'+
						     '<div class="col-md-12">'+
						          '<form class="form-horizontal">'+
						               '<div class="form-group">'+
						                    '<label class="col-md-4 control-label" for="firstname">First Name</label>'+
						                    '<div class="col-md-4">'+
						                         '<input id="firstname" name="firstname" type="text" placeholder="Kevin" class="form-control input-md">'+
						                    '</div>'+
						               '</div>'+
						               '<div class="form-group">'+
						                    '<label class="col-md-4 control-label" for="lastname">Last Name</label>'+
						                    '<div class="col-md-4">'+
						                         '<input id="lastname" name="lastname" type="text" placeholder="Frans" class="form-control input-md">'+
						                    '</div>'+
						               '</div>'+
						               '<div class="form-group">'+
						                    '<label class="col-md-4 control-label" for="grade">Grade</label>'+
						                    '<div class="col-md-4">'+
							                    '<select id="grade" name="grade" class="form-control" id="registerGradeLevel">'+
		                                      		'<option>9</option>'+
		                                      		'<option>10</option>'+
		                                      		'<option>11</option>'+
		                                      		'<option>12</option>'+
		                                  		'</select>'+
						                    '</div>'+
						               '</div>'+
						               '<div class="form-group">'+
						                    '<label class="col-md-4 control-label" for="birthday">Birthday</label>'+
						                    '<div class="col-md-4">'+
							                    '<input id="birthday" type="date" name="birthday" id="registerBirthday" class="form-control">'+
						                    '</div>'+
						               '</div>'+
						               '<div class="form-group">'+
						                    '<label class="col-md-4 control-label" for="email">Email</label>'+
						                    '<div class="col-md-4">'+
						                         '<input id="email" name="email" type="text" placeholder="kevin@gmail.com" class="form-control input-md">'+
						                    '</div>'+
						               '</div>'+
						               '<div class="form-group">'+
						                    '<label class="col-md-4 control-label" for="studentid">Student Id</label>'+
						                    '<div class="col-md-4">'+
						                         '<input id="studentid" name="studentid" type="text" placeholder="95012345" class="form-control input-md">'+
						                    '</div>'+
						               '</div>'+
						          '</form>'+
						     '</div>'+
						'</div>',
                buttons: {
                    success: {
                        label: "Save",
                        className: "btn-success",
                        callback: function () {
                        	var posted = {};
                            posted.firstname = $('#firstname').val();
                            posted.lastname = $('#lastname').val();
                            posted.birthday = $("#birthday").val();
                            posted.grade = $("#grade").val();
                            posted.email = $("#email").val();
                            posted.studentID = $("#studentid").val();
                            $.ajax({
							    contentType: 'application/json',
							    data: JSON.stringify(posted),
							    dataType: 'json',
							    success: function(data){
							        app.log("device control succeeded");
							    },
							    error: function(){
							        app.log("Device control failed");
							    },
							    processData: false,
							    type: 'POST',
							    url: '/register'
							});
                        }
                    }
                }
            }
        );
}