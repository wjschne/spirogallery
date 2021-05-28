var obs = document.getElementsByTagName("object");

var i;
for (i = 0; i < obs.length; i++) {
  var o = obs[i]
  var s = o.contentDocument.getElementsByTagName("svg")
  if (s.length > 0) {s[0].pauseAnimations()}
}

document.getElementById("osloaster").contentDocument.getElementsByTagName("svg")[0].pauseAnimations()

