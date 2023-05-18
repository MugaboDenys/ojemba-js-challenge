export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {

  if (typeof password !== "string") password = String(password);

  if (forbiddenPasswords.includes(password)) 
    return false;
  

  if (password.length !== 10) 
    return false;

  if (!/^[a-zA-Z0-9]+$/.test(password)) 
    return false;

  if (/^[a-zA-Z]+$/.test(password))
    return false;
  

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) 
    return false;
  

  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) 
    return false;
  

  for (let i = 0; i < password.length - 2; i++) {
    if (
      password.charCodeAt(i) + 1 === password.charCodeAt(i + 1) &&
      password.charCodeAt(i + 1) + 1 === password.charCodeAt(i + 2)
    ) {
      return false; 
    }
  }

  for (let i = 0; i < password.length - 2; i++) {
    if (password.charCodeAt(i) - 1 === password.charCodeAt(i+1) &&
        password.charCodeAt(i+1) - 1 === password.charCodeAt(i+2)) {
      return false; 
    }
  }

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) {
    return false;
  }

  return true;
}
