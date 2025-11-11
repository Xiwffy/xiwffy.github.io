const img2 = document.querySelectorAll("img");

function toggleFlip(e) {
    if (!e.target.className) {
        e.target.className = "flip_vert";
    } else {
        e.target.className = "";
    }
}

img2.forEach((item) => {
    item.addEventListener("click", toggleFlip);
});