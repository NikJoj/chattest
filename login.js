function func()
{
      	var passwd = document.getElementById("password").value;
      	console.log(passwd);

if (passwd == "mychatapp")
{
	console.log("correct pwd");
setTimeout(function(){document.location.href = "chat";},500);	console.log("printing");
}
else
{
	alert("Wrong password!");
	return false;

}}