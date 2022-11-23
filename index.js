const image = ["cat.jpg", "horse.jpg", "bird.jpg", "lion-image.jpg", "Rabbits-img.webp"];
const firstImage = document.getElementById('cat-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
// set starting item
let startItem = 0;
// load inital item
// window.addEventListener('DOMContentLoaded', function(){
    // showImage();
// });
// show image based on item
function showImage() {
    const item = image[startItem];
    firstImage.src = item;
};
// show next animal
nextBtn.addEventListener('click', function(){
    startItem++;
    if(startItem > image.length - 1) {
        startItem = 0;
    }
   
    showImage();
});
prevBtn.addEventListener('click', function(){
    startItem--;
    if(startItem < 0) {
        startItem = image.length - 1
    }
    showImage()
});


