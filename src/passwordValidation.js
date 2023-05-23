export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {

  if (typeof password !== "string") password = String(password);
  // Check if password is in the list of forbidden passwords
  if (forbiddenPasswords.includes(password)) 
    return false;
  
  // Check if password length is 10 characters long
  if (password.length !== 10) 
    return false;
  // Check if password contains only alphanumeric characters
  if (!/^[a-zA-Z0-9]+$/.test(password)) 
    return false;
  // Check if password contains only uppercase or lowercase letters
  if (/^[a-zA-Z]+$/.test(password))
    return false;
  
  // Check if password contains any special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) 
    return false;
  
  // Check if password contains at least one uppercase and one lowercase letter
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) 
    return false;
  
  // Check if password has three consecutive characters in ascending order
  for (let i = 0; i < password.length - 2; i++) {
    if (
      password.charCodeAt(i) + 1 === password.charCodeAt(i + 1) &&
      password.charCodeAt(i + 1) + 1 === password.charCodeAt(i + 2)
    ) {
      return false; 
    }
  }

  // Check if password has three consecutive characters in descending order
  for (let i = 0; i < password.length - 2; i++) {
    if (password.charCodeAt(i) - 1 === password.charCodeAt(i+1) &&
        password.charCodeAt(i+1) - 1 === password.charCodeAt(i+2)) {
      return false; 
    }
  }

  // Check if password has at least four unique characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) {
    return false;
  }

  return true;
}
