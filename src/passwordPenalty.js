/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  
  if (!password) {
    return 0;
  }  
  
  if (typeof password !== "string") password = String(password);

    let prevOccur = '';
    let nOfOccurrence = 0;
    let points = 0;

    
  
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      if (char === prevOccur) {
        nOfOccurrence++;
      } else {
        if (nOfOccurrence === 2) {
          points++;
        } else if (nOfOccurrence >= 3) {
          points += 2;
        } 
  
        prevOccur = char;
        nOfOccurrence = 1;
      }
    }
  
    if (nOfOccurrence === 2) {
      points++;
    } else if (nOfOccurrence >= 3) {
      points += 2;
    } 
    return points;
}
