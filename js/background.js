const images = [
    "0.jpg",
    "1.png",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

console.log(bgimage.src);

document.body.appendChild(bgimage);