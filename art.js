document.addEventListener("DOMContentLoaded", function () {
    const imageFiles = [
        "star1.jpg", "star2.jpg", "star3.jpg", "star4.jpg", "star5.jpg",
        // Add the remaining filenames here
    ];

    const artContainer = document.getElementById("art-container");

    imageFiles.forEach((filename) => {
        const div = document.createElement("div");
        div.classList.add("art-item");

        const img = document.createElement("img");
        img.src = `art/star/${filename}`;  // ✅ Corrected path to include 'star' subfolder
        img.alt = "Artwork";

        // ✅ Debugging log to check if images load
        img.onerror = function () {
            console.error(`Failed to load: ${img.src}`);
        };

        div.appendChild(img);
        artContainer.appendChild(div);
    });
});
