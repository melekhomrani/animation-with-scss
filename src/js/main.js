let ul = document.querySelector(".anim-circles");
let li = ul.querySelectorAll(".anim-circle");

ul.onmouseover = () => {
  li.forEach(el => {
    el.children[0].style.animationPlayState = "paused";
    el.children[1].style.animationPlayState = "paused";
    console.log(el.children[0].style.animationPlayState);
  });
}

ul.onmouseout = () => {
  li.forEach(el => {
    el.children[0].style.animationPlayState = "running";
    el.children[1].style.animationPlayState = "running";
    console.log(el.children[0].style.animationPlayState);
  });
}