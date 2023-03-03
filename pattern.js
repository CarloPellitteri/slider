// Revealing module pattern
// =============================================

// concetti base
// - function (anonymous)
// - encapsulation / scope
// - return

// how to call an anonymous function

const fn = (num) => {
  console.log(num);
};

fn(10);

// Modulo
// Classe
// Componente

// class Calculator {
//   constructor(options) {
//     this.state = {
//       display: options.display
//     };
//   }

//   sum(num, num2) {
//     this.state = num + num2;
//   }

//   getDisplay() {
//     return this.state.display;
//   }

//   static log() {
//     return this.state.display;
//   }
// }

const Calculator = function () {
  this.state = {
    display: defaultOptions.display,
  };
};

Calculator.prototype.sum = function (num, num2) {
  this.state.display = num + num2;
};

Calculator.prototype.getDisplay = function () {
  return this.state.display;
};

const calculator1 = new Calculator({ display: 1 });
calculator1.sum();

const calculator2 = new Calculator({ display: 2 });

const Slider = function () {};

const slider1 = new Slider({
  images: ["https://", "https://", "https://", "https://", "https://"],
});

const slider1 = new Slider({
  slides: [
    {
      image: "",
      content: "<div></div>",
    },
    {
      image: "",
      content: "<div></div>",
    },
    {
      image: "",
      content: "<div></div>",
    },
    {
      image: "",
      content: "<div></div>",
    },
    {
      image: "",
      content: "<div></div>",
    },
  ],
});

// const Calculator = ((defaultOptions) => {
//   const state = {
//     display: defaultOptions.display,
//   };

//   const sum = (num, num2) => {
//     state.display = num + num2;
//   };

//   const getDisplay = () => {
//     return state.display;
//   };

//   return {
//     sum,
//     getDisplay,
//   };
// })({
//   display: 1,
// });

Calculator.sum(1, 10);
Calculator.getDisplay();

console.log(Calculator);
