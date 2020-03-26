// Start JS logic
let a = performance.now();
console.info("Loading DOM...");
document.addEventListener("DOMContentLoaded", (() => {
    let b = performance.now();
    console.info(`DOM ready in ${b - a}ms!`);
}));
