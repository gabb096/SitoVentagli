const maxIndex = allVentagli.length-1;
let index=0;
const votesStrings = ["Qualità\t:", "Ventosità\t:", "Esteticà\t:", "Trashità\t:"];
const voteEmoji = ["🪭", "💨", "✨","💖"];

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    onNextClick();
  } else if (event.key === "ArrowLeft") {
    onPrevClick();
  }
});
document.addEventListener("click", function(event) {

  if(event.target.tagName === "BUTTON")
    return;
  let th = document.body.clientWidth>document.body.clientHeight;
  if(event.clientX > (document.body.clientWidth * (th ? 0.8 : 0.6)))
    onNextClick();
  else if(event.clientX < (document.body.clientWidth * (th ? 0.2 : 0.4)))
    onPrevClick();
});

function showVentaglio(ii){
  // change photo
  let div = document.getElementById("ss_div_photo");
  div.style.backgroundImage = "url(" + allVentagli[ii].path +")";
  div.style.backgroundSize = "contain";
  div.style.backgroundRepeat = "no-repeat";
  div.style.backgroundPosition = "center";
  // change location
  document.getElementById("location").innerHTML = allVentagli[ii].location;
  // change year
  document.getElementById("year").innerHTML = allVentagli[ii].year;
  // change votes
  div = document.getElementById("votes");
  div.innerHTML = "";
  for(let s=0; s<votesStrings.length; s++){
    div.innerHTML+= votesStrings[s];
    let stop = allVentagli[ii].votes[s];
    for(let v=0; v<stop; v++){
      div.innerHTML+= " " + voteEmoji[s]
    }
    div.innerHTML += "<br>"
  }
  // change story
  document.getElementById("story").innerHTML = allVentagli[ii].fanFuct;
}
function onNextClick(){
  index++;
  if(index>=maxIndex){
    index = maxIndex;
  }
  console.log(index);
  showVentaglio(index);
}
function onPrevClick(){
  index--;
  if(index<0){
    index=0;
  }
  showVentaglio(index);
}

function onStartSlideShowClick(){
    // do animation before change page
    let landingPage = document.getElementById("landingPage");
    landingPage.classList.add("fadeout");

    setTimeout(() => {
      index=0;
      window.location.href = "slideShow.html";
      showVentaglio(index);
    }, 1000);
}
