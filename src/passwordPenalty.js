/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  
  if (!password) 
    return 0;

  if (typeof password !== "string") password = String(password);

  let consec = 0;
  let characterSequence = 0;
  for (let i = 0; i <= password.length; i++) {
    if (password[i] === password[i + 1]) {
      consec += 1;
      characterSequence += 1;
    }
  }
  return characterSequence === 2 ? 1 : characterSequence >= 3 ? 2 : 0
}
