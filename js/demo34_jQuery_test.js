jQuery(function() {
	jQuery("input").focus(function() {
		jQuery(this).css("border", "1px solid #3590FE");
	}).blur(function() {
		jQuery(this).css("border", "1px solid grey")
	});
	jQuery(":input[name='username']").focus(function() {
		var msg = jQuery(this).val().trim();
		if(msg == "必须填写") {
			jQuery(this).val("")
		}
	}).blur(function() {
		var msg = jQuery(this).val().trim();
		if(msg == "") {
			jQuery(this).val("必须填写")
		}
		check_name();
	});
	jQuery("#pwd").blur(function(){
		check_pwd();
	});
	jQuery("#confire_pwd").blur(function(){
		re_check_pwd();
	});
	jQuery("#sub").click(function(){
		if(check_name()&check_pwd()&re_check_pwd()&check_sex()&check_phone()&check_interest()){
			jQuery("form").submit();
		}
	});
	jQuery("#phone").blur(function(){
		check_phone();
	});
});

function check_name() {
	var name = jQuery(":input[name='username']").val();
	var judge = /^\w{6,18}$/;
	if(!judge.test(name)) {
		var msg = jQuery("#name_msg").val();
		if(msg == '') {
			jQuery("#name_msg").text("用户名必须填写，且为6~18位");
		}
	} else {
		jQuery("#name_msg").text("");
		return true;
	}
	return false;
}
function check_pwd(){
		var pwd = jQuery("#pwd").val();
		var judge = /^\d{6}$/;
		if(judge.test(pwd)) {
			jQuery("#pwd_msg").text("");
			return true;
		} else {
			jQuery("#pwd_msg").text("密码不能为空，且为6位数字");
		}
		return false;
}
function re_check_pwd(){
		var pwd1 = jQuery("#pwd").val();
		var pwd2 = jQuery("#confire_pwd").val();
		if(pwd1 != pwd2){
			jQuery("#confire_pwd_msg").text("两次输入不一致");
		}else if(pwd2 == ""){
			jQuery("#confire_pwd_msg").text("密码不能为空");
		}else{
			jQuery("#confire_pwd_msg").text("");
			return true;
		}
		return false;
}
function check_sex(){
	var a = jQuery("[name='sex']:checked").length;
	if(a<1){
		jQuery("#sex_msg").text("请选择性别");
		return false;
	}
	return true;
}
function check_phone(){
	var judge = /^1[3|5|7|8]\d{9}$/;
	var str = "";
	var phonenumber = jQuery("#phone").val();
	if(! judge.test(phonenumber)){
		str = "手机号输入错误";
		jQuery("#phone_msg").text(str);
		return false;
	}
	jQuery("#phone_msg").text(str);
	return true;
}
function check_interest(){
	var interest = jQuery("[name='interest']:checked").length;
	if(interest<1){
		jQuery("#interest_msg").text("至少应选择一项");
		return false;
	}else{
		jQuery("#interest_msg").text("");
		return true;
	}
}
