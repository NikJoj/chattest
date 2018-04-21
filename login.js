function func()
{
      	var passwd = document.getElementById("password").value;
      	console.log(passwd);

if (passwd == "mychatapp")
{
	console.log("correct pwd");
	window.location.href = "chat";
	console.log("printing");
	return false;

}
else
{
	alert("Wrong password!");

}}
