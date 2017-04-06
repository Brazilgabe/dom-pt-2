// // User Name and Password
// //
// // Challenges:
// //
// // Create a webpage with just the checker for a secure web site.
// // The user has to enter a user ID and a password, which has to adhere to the to following criteria:
// //
// // User ID and password cannot be the same
// // User ID and password have to be at least six characters long
// // User ID cannot contain the following characters: !#$
// // Password has to contain at least one of: !#$
// // Password cannot be "password"
// // Password has to contain at least one digit
// // Password has to contain a lower and an uppercase letter
// // First, let a user input both user ID and password,
// // Then create methods corresponding to criteria above to evaluate the user ID and password
// // Then output whether the combination the combination is acceptable or not.
// // Run the program and test it for all criteria listed above by inputing different values.

function upperCheck(pass) {
  return pass.toLowerCase() != pass;
}

// user id check function
function isUserIdValid(str){
  return str.length >=6 && !str.includes ("#") && !str.includes ("$") && !str.includes ("!")
  // document.getElementById("message").innerHTML="USER ID IS NOT VALID"
}
// user password check function
function isPasswordValid(pass) {
  return pass.length >=6 && upperCheck(pass) && !pass.includes ("password") && (pass.includes ("#") && pass.includes(1) || pass.includes(2) || pass.includes(3) || pass.includes(4) || pass.includes(5) || pass.includes(6) || pass.includes(7) || pass.includes(8) || pass.includes(9) || pass.includes(0) || pass.includes ("$") || pass.includes("!"))
  // document.getElementById("message").innerHTML="USER PASSWORD IS NOT VALID"
}
// function to check if user id and pass are valid at the same time
function checkCred (id,pass) {
  return isUserIdValid (id) && isPasswordValid (pass)
}
// signin function
function signIn () {
  var userId = document.getElementById("user").value
  var password = document.getElementById("pass").value
  if (!isUserIdValid(userId) && !isPasswordValid(pass)){
    document.getElementById("message").innerHTML="USER ID IS NOT VALID"
  }
  // else if (!isPasswordValid(pass)){
  //   document.getElementById("message").innerHTML="USER PASSWORD IS NOT VALID"+ checkCred(userId,password)
  // }
  else {
    document.getElementById("message").innerHTML=("got cred" + checkCred(userId,password))
  }
  // document.getElementById("message").innerHTML=("got cred" + checkCred(userId,password))

}
