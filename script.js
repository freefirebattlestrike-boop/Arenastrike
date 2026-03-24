function animate(id, target, prefix = "", suffix = "+") {
  let count = 0;

  let interval = setInterval(() => {
    count += Math.ceil(target / 100);

    document.getElementById(id).innerText =
      prefix + count + suffix;

    if (count >= target) {
      document.getElementById(id).innerText =
        prefix + target + suffix;
      clearInterval(interval);
    }
  }, 20);
}

animate("users", 100000);
animate("matches", 5000000);
animate("winnings", 700000, "₹", "");
