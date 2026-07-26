const maxIndex = allVentagli.length-1;
let index=0;
const votesStrings = ["Qualità\t:", "Ventosità\t:", "Esteticà\t:", "Trashità\t:"];
const voteEmoji = ["🪭", "💨", "✨","💖"];
const swipeThreshold = 60;
let swipeStartX = null;
let swipeStartY = null;

function resetSwipeState() {
  swipeStartX = null;
  swipeStartY = null;
}

function handleSwipeStart(clientX, clientY) {
  swipeStartX = clientX;
  swipeStartY = clientY;
}

function handleSwipeEnd(clientX, clientY) {
  if (swipeStartX === null || swipeStartY === null) return;

  const deltaX = clientX - swipeStartX;
  const deltaY = clientY - swipeStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
    if (deltaX < 0) {
      onNextClick();
    } else {
      onPrevClick();
    }
  }

  resetSwipeState();
}

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

if (window.PointerEvent) {
  document.addEventListener("pointerdown", function(event) {
    if (event.pointerType === "touch") {
      handleSwipeStart(event.clientX, event.clientY);
    }
  });

  document.addEventListener("pointerup", function(event) {
    if (event.pointerType === "touch") {
      handleSwipeEnd(event.clientX, event.clientY);
    }
  });

  document.addEventListener("pointercancel", resetSwipeState);
} else {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length === 1) {
      handleSwipeStart(event.touches[0].clientX, event.touches[0].clientY);
    }
  }, { passive: true });

  document.addEventListener("touchend", function(event) {
    if (event.changedTouches.length === 1) {
      handleSwipeEnd(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    }
  }, { passive: true });

  document.addEventListener("touchcancel", resetSwipeState, { passive: true });
}

function showVentaglio(ii){
  const photoDiv = document.getElementById("ss_div_photo");
  const locationEl = document.getElementById("location");
  const yearEl = document.getElementById("year");
  const votesEl = document.getElementById("votes");
  const storyEl = document.getElementById("story");

  if (!photoDiv || !locationEl || !yearEl || !votesEl || !storyEl) {
    return;
  }

  // change photo
  photoDiv.style.backgroundImage = "url(" + allVentagli[ii].path +")";
  photoDiv.style.backgroundSize = "contain";
  photoDiv.style.backgroundRepeat = "no-repeat";
  photoDiv.style.backgroundPosition = "center";
  // change location
  locationEl.innerHTML = allVentagli[ii].location;
  // change year
  yearEl.innerHTML = allVentagli[ii].year;
  // change votes
  votesEl.innerHTML = "";
  for(let s=0; s<votesStrings.length; s++){
    votesEl.innerHTML+= votesStrings[s];
    let stop = allVentagli[ii].votes[s];
    for(let v=0; v<stop; v++){
      votesEl.innerHTML+= " " + voteEmoji[s]
    }
    votesEl.innerHTML += "<br>"
  }
  // change story
  storyEl.innerHTML = allVentagli[ii].fanFuct;
}
function onNextClick(){
  if (!document.getElementById("ss_div_photo")) {
    return;
  }

  index++;
  if(index>=maxIndex){
    index = maxIndex;
  }
  console.log(index);
  showVentaglio(index);
}
function onPrevClick(){
  if (!document.getElementById("ss_div_photo")) {
    return;
  }

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

function showLandingPhrase(){
  const actionEl = document.getElementById("phraseAction");
  const meaningEl = document.getElementById("phraseMeaning");
  if (!actionEl || !meaningEl || !Array.isArray(frasiVentagli) || frasiVentagli.length === 0) return;

  const phrase = frasiVentagli[Math.floor(Math.random() * frasiVentagli.length)];
  actionEl.textContent = `Come dire "${phrase.Meaning}" :`;
  meaningEl.textContent = phrase.Action;
}

if (document.getElementById("phraseAction")) {
  showLandingPhrase();
}
