var repl, strings;
strings = ["One step at a time."];

repl = function() {
  document.getElementById("small").innerHTML = strings[Math.floor(Math.random() * (strings.length - 1))];
};