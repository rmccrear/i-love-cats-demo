
function handleClick() {
  alert("meow!");
}

picture1.onclick = handleClick;

let indexOfCurrentPic = 0;
let pics = ["picture1.jpg", "picture2.jpg", "picture3.jpg", "picture4.jpg"]
function changeImage() {
  let i = indexOfCurrentPic + 1;
  picture1.src = pics[i];
  if(i<3) {
    indexOfCurrentPic++;
  } else {
    indexOfCurrentPic = 0;
  }
}
nextImage.onclick = changeImage;