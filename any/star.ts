const n = 5;

for (let i = 1; i <= n; i++) {
  let line = "";

  // spasi letf
  for (let s = 1; s <= n - i; s++) {
    line += " ";
  }

  // star
  for (let b = 1; b <= 2 * i - 1; b++) {
    line += "*";
  }

  console.log(line);
}
