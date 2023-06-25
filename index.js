const apple = document.querySelector(".apple");
const samsung = document.querySelector(".samsung");

apple.addEventListener("mouseenter", () => {
    apple.classList.add("apple-active");
    samsung.classList.add("apple-active");
})
apple.addEventListener("mouseleave", () => {
    apple.classList.remove("apple-active");
    samsung.classList.remove("apple-active");
})

samsung.addEventListener("mouseenter", () => {
    apple.classList.add("samsung-active");
    samsung.classList.add("samsung-active");
})
samsung.addEventListener("mouseleave", () => {
    apple.classList.remove("samsung-active");
    samsung.classList.remove("samsung-active");
})