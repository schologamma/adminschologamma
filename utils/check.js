export function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Use the test method to check if the email matches the pattern
    return emailPattern.test(email);
  }


  export  function isValidUsername(username) {
    // Check the length of the username
    if (username.length < 8 || username.length > 20) {
      return false;
    }
  
    // Check if the username contains only alphanumeric characters
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return false;
    }
  

    return true;
  }

  // password
  // passwordValidation.js

export function isValidPassword(password) {
  // Password should be at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Password should contain at least 1 uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Password should contain at least 1 lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Password should contain at least 1 digit
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Password should contain at least 1 special character
  if (!/[@#$%^&+=]/.test(password)) {
    return false;
  }

  return true;
}
