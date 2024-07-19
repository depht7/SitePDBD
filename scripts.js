/* scripts.js */
document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photo");
    const modal = document.createElement("div");
    const modalImage = document.createElement("img");

    modal.classList.add("modal");
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    photos.forEach(photo => {
        photo.addEventListener("click", function() {
            modalImage.src = this.querySelector("img").src;
            modal.classList.add("open");
        });
    });

    modal.addEventListener("click", function() {
        this.classList.remove("open");
    });
});
