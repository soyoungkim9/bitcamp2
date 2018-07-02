(function() {
  var current = 0;
  var max = 0;
  var cont;
  var interval;

  function init() {
    cont = jQuery(".slide ul");
    max = cont.children().length;

    events();
    interval = setInterval(next, 3000);
  }
  function events() {
    jQuery("button.prev").on("click", prev);
    jQuery("button.next").on("click", next);

    jQuery(window).on("keydown", keydown);
  }
  function prev(e) {
    current--;
    if (current < 0) current = max - 1;
    animate();
  }
  function next(e) {
    current++;
    if (current > max - 1) current = 0;
    animate();
  }
  function animate() {
    var moveX = current * 600;
    TweenMax.to(cont, 0.8, {marginLeft: -moveX, ease: Expo.easeOut});

    clearInterval(interval);
    interval = setInterval(next, 3000);
  }
  function keydown(e) {
    if (e.which == 39) {
      next();
    } else if (e.which == 37) {
      prev();
    }
  }
  jQuery(document).ready(init);
})();
