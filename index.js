const Slider = (() => {
  // HTML ACCESS

  const arrow = [...document.querySelectorAll(".arrow")];
  const slides = document.querySelector(".slides");
  const img = [...document.querySelectorAll(".img")];

  const selector = [...document.querySelectorAll(".selector")];

  // STATE

  const state = {
    currentImg: 0,
  };

  // OTHERS FUNCTIONS

  const goToSlide = (index, method) => {
    if (method === "cumulative") {
      const newCurrentImg = state.currentImg + index;

      if (newCurrentImg === img.length) {
        state.currentImg = 0;
      } else if (newCurrentImg === -1) {
        state.currentImg = img.length - 1;
      } else {
        state.currentImg = newCurrentImg;
      }
    } else {
      state.currentImg = index;
    }
    render();
  };

  // HANDLE FUNCTIONS

  const handleArrowClick = (event) => {
    let index = Number(event.currentTarget.dataset.id);
    goToSlide(index, "cumulative");
  };

  const handleSelectorClick = (event) => {
    let index = Number(event.currentTarget.dataset.id);
    goToSlide(index);
  };

  // RENDER

  const render = () => {
    let shift = state.currentImg * -1024;
    slides.setAttribute("style", `transform: translateX(${shift}px)`);
    console.log(state);
  };

  // EVENTS

  arrow.forEach((item) => {
    item.addEventListener("click", handleArrowClick);
  });

  selector.forEach((item) => {
    item.addEventListener("click", handleSelectorClick);
  });

  return {
    goToSlide,
  };
})();
