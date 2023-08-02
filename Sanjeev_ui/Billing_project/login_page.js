function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username);
  console.log(password);
  var employee_name = new Array();
  employee_name = ["Ram", "Suresh", "Ramesh", "Raju", "Sanjay"];
  employee_password = [123, 123, 123, 123, 123];
  flag = false;
  for (var i = 0; i < 5; i++) {
    if (
      (console.log(employee_name[i]),
      console.log(employee_password[i]),
      username == employee_name[i] && password == employee_password[i])
    ) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("login success");
    location.href = "sample_check.html";
    return false;
  } else {
    alert("sorry login failed");
    return false;
  }
}
