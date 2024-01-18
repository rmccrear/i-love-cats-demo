
function handleClick() {
  alert("meow!");
}

picture1.onclick = handleClick;




let indexOfCurrentPic = 0;

let pics = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"]

async function changeImage() {
  let response = await fetch("catData.json");
  let catData = await response.json();

  if (indexOfCurrentPic < 3) {
    indexOfCurrentPic++;
  } else {
    indexOfCurrentPic = 0;
  }
  let i = indexOfCurrentPic;
  let cat = catData[i];
  console.log("I love " + cat.name);

  picture1.src = cat.image;
}
nextImage.onclick = changeImage;