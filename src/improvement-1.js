export default function cntRbt (ls) {
  let cnt = 0;
  for (let i = 0; i < ls.length; i++) {
    if (ls[i] === "R") {
      cnt++;
    }
  }
  return cnt;
}

