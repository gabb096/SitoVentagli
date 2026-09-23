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

function getVentaglioNumberFromPath(path) {
  if (!path || typeof path !== "string") return null;

  const fileName = path.split("/").pop();
  if (!fileName) return null;

  const match = fileName.match(/^(\d+)-/);
  return match ? Number(match[1]) : null;
}

function updateSlider() {
  const sliderThumb = document.getElementById("sliderThumb");
  const sliderValue = document.getElementById("sliderValue");
  const sliderTrack = document.getElementById("sliderTrack");

  if (!sliderThumb || !sliderValue || !sliderTrack) return;

  const currentVentaglio = allVentagli[index];
  const currentNumber = getVentaglioNumberFromPath(currentVentaglio?.path);

  const maxPosition = Math.max(1, maxIndex);
  const ratio = maxPosition === 0 ? 0 : index / maxPosition;
  const leftPercent = Math.max(0, Math.min(100, ratio * 100));

  sliderThumb.style.left = leftPercent + "%";
  sliderValue.textContent = String(currentNumber ?? index + 1);
}

function goToVentaglio(targetIndex) {
  const safeIndex = Math.max(0, Math.min(maxIndex, targetIndex));
  index = safeIndex;
  showVentaglio(index);
  updateSlider();
}

function onNextClick(){
  if (!document.getElementById("ss_div_photo")) {
    return;
  }

  goToVentaglio(index + 1);
}
function onPrevClick(){
  if (!document.getElementById("ss_div_photo")) {
    return;
  }

  goToVentaglio(index - 1);
}

document.addEventListener("click", function(event) {
  const target = event.target;
  if (target.tagName === "BUTTON" || target.closest(".navArrow")) {
    return;
  }

  let th = document.body.clientWidth > document.body.clientHeight;
  if (event.clientX > (document.body.clientWidth * (th ? 0.8 : 0.6))) {
    onNextClick();
  } else if (event.clientX < (document.body.clientWidth * (th ? 0.2 : 0.4))) {
    onPrevClick();
  }
});

function attachArrowButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      onPrevClick();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      onNextClick();
    });
  }
}

if (document.getElementById("prevBtn") || document.getElementById("nextBtn")) {
  attachArrowButtons();
}

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

function setupSlider() {
  const sliderTrack = document.getElementById("sliderTrack");
  const sliderThumb = document.getElementById("sliderThumb");

  if (!sliderTrack || !sliderThumb) return;

  const updateFromClientX = (clientX) => {
    const rect = sliderTrack.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, percentage));
    const targetIndex = Math.round((clamped / 100) * maxIndex);
    goToVentaglio(targetIndex);
  };

  sliderTrack.addEventListener("pointerdown", function(event) {
    event.preventDefault();
    updateFromClientX(event.clientX);
  });

  sliderTrack.addEventListener("pointermove", function(event) {
    if (event.buttons !== 1) return;
    updateFromClientX(event.clientX);
  });

  sliderThumb.addEventListener("pointerdown", function(event) {
    event.preventDefault();
    sliderThumb.setPointerCapture(event.pointerId);
  });

  sliderTrack.addEventListener("pointerup", function(event) {
    if (event && typeof event.pointerId !== 'undefined') {
      try {
        sliderThumb.releasePointerCapture(event.pointerId);
      } catch (e) {
        // ignore if no capture was active
      }
    }
  });
}

if (document.getElementById("sliderTrack")) {
  setupSlider();
}

function showLandingPhrase(){
  const actionEl = document.getElementById("phraseAction");
  const meaningEl = document.getElementById("phraseMeaning");
  if (!actionEl || !meaningEl || !Array.isArray(frasiVentagli) || frasiVentagli.length === 0) return;

  const phrase = frasiVentagli[Math.floor(Math.random() * frasiVentagli.length)];
  actionEl.textContent = `Come dire ${phrase.Meaning} con un ventaglio:`;
  meaningEl.textContent = phrase.Action;
}

if (document.getElementById("phraseAction")) {
  showLandingPhrase();
}

if (document.getElementById("sliderTrack")) {
  updateSlider();
}
