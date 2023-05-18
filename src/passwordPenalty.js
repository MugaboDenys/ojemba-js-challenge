/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // If password is empty, return 0 penalty points
  if (!password) 
    return 0;
    
  
  // If password is not a string, convert it to a string
  if (typeof password !== "string") password = String(password);

  let prevOccur = '';
  let nOfOccurrence = 0;
  let points = 0;

  // Iterate over each character in the password
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    // If the current character is the same as the previous character, increment the occurrence count
    if (char === prevOccur) {
      nOfOccurrence++;
    } else {
      // If there were exactly 2 occurrences of the previous character, add 1 point
      if (nOfOccurrence === 2) {
        points++;
      }
      // If there were 3 or more occurrences of the previous character, add 2 points
      else if (nOfOccurrence >= 3) {
        points += 2;
      } 

      // Update the previous character and reset the occurrence count
      prevOccur = char;
      nOfOccurrence = 1;
    }
  }

  // Check the occurrence count after the loop ends
  // If there were exactly 2 occurrences of the last character, add 1 point
  if (nOfOccurrence === 2) {
    points++;
  }
  // If there were 3 or more occurrences of the last character, add 2 points
  else if (nOfOccurrence >= 3) {
    points += 2;
  } 

  return points;
}

