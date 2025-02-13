function onStartSlideShowClick(){
    // do animation before change page
    let landingPage = document.getElementById("landingPage");
    landingPage.classList.add("fadeout");

    setTimeout(() => {
      window.location.href = "slideShow.html";
    }, 1000);
}
