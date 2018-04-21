function func()
{
      	var passwd = document.getElementById("password").value;
      	console.log(passwd);

if (passwd == "mychatapp")
{
	console.log("correct pwd");
	document.location.href = 'chat';
	console.log("printing");
}
else
{
	alert("Wrong password!");
	return false;

}}
