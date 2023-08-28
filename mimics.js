let str = "prout";
let i = 0;

let interval = setInterval(() => {
  process.stdout.write(str.charAt(i));
  i++;
    if (i === str.length) {
    clearInterval(interval);
  }
}, 1000);
