
slideshow.on('hideSlide', function (slide) {
  // Slide is the slide being navigated away from
  
  var obs = document.getElementsByClassName("spiro");
  var i;
  for (i = 0; i < obs.length; i++) {
    var o = obs[i]
    var d = o.contentDocument
    if (d != null) {
      var s = d.documentElement
      s.pauseAnimations();
    }
    
  }
  
  var btns = document.getElementsByClassName("playbtn")
  for (i = 0; i < btns.length; i++) {
    var btn = btns[i]
    btn.innerHTML = "Play";
  }
  
  
});