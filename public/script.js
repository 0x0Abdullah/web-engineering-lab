function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  const heading = document.getElementById("greeting");
  if (heading) {
    heading.textContent = greet("Muhammad Abdullah");
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}
