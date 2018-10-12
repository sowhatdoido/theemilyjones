export default function(destination, time = 200) {
  if (!destination) { return; }

  const scrollTo = (element, to, duration) => {
    var start = document.scrollingElement.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        var easeInOutQuad = function (t, b, c, d) {
          t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
        };
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        document.scrollingElement.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
  }

  scrollTo(document.body, destination.offsetTop, time);
}
