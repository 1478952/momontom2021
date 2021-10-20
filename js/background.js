const images = [
    "0.jpg",
    "1.png",
    "2.jpg"
];

const chosenimage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimage}`;

document.body.appendChild(bgImage);