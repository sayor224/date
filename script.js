function moveRandomEl(elm) {
    elm.style.position = "absolute";
    const topPos = Math.floor(Math.random() * 300 + 5) + "%";
    const leftPos = Math.floor(Math.random() * 300 + 5) + "%";
    elm.style.top = topPos;
    elm.style.left = leftPos;
    console.log(`Moving to: top: ${topPos}, left: ${leftPos}`);
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
  