function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
const fakePic = "https://thispersondoesnotexist.com/";

const imgContainer = document.getElementById("images");
const resContainer = document.getElementById("result");

function drow() {
  imgContainer.innerHTML = "";
  resContainer.innerHTML = "";

  const randomBool = Math.random() > 0.5;
  const arr = [randomBool, !randomBool];

  const agein = document.createElement("button");
  agein.innerHTML = "play Again";
  agein.onclick = drow;

  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPic() : fakePic;
    img.onclick = function () {
      if (isReal) {
        resContainer.innerHTML = "Mabrook :D";
      } else {
        resContainer.innerHTML = "Try agein :(";
      }
      resContainer.appendChild(agein);
    };
    imgContainer.appendChild(img);
  }
}

drow();
