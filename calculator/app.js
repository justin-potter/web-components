
class Calculator {

  constructor() {
    this.value = 0;
    this.operator = 0;
    this.display = 0;
    this.operation = 'none';
  }

  digit(digit) {
    if (this.operation === 'none') {
      this.value = this.value * 10 + digit;
      this.display = this.value;
    } else {
      this.operator = this.operator * 10 + digit;
      this.display = this.operator;
    }
  }

  setOperation(operation) {
    this.operation = operation;
    this.operator = 0;
  }

  equal() {

    const operations = {
      '\+': (a, b) => {
        return a + b;
      },
      '\-': (a, b) => {
        return a - b;
      },
      '\*': (a, b) => {
        return a * b;
      },
      '\/': (a, b) => {
        return a / b;
      },
      'None': (a, b) => {
        return b;
      },
    };

    this.value = operations[this.operation](this.value, this.operator);
    this.display = this.value;
    this.operation = 'none';
  }

  clear() {
    this.operator = 0;
    this.value = 0;
    this.operation = 'none';
    this.display = this.value;
  }

}

window.onload = () => {

  const buttons = document.querySelector('.button-container');
  const display = document.querySelector('.display');

  const calculator = new Calculator();

  const buttonController = (char, calculator) => {

    if (/\d/.test(char)) {
      calculator.digit(Number(char));
    }

    if (/[\/\+\-\*]/.test(char)) {
      calculator.setOperation(char);
    }

    if (char === 'C') {
      calculator.clear();
    }

    if (char === '=') {
      calculator.equal();
    }

    display.innerText = calculator.display;
  };

  buttons.addEventListener('click', (e) => {
    let pressed = e.target.innerText;
    buttonController(pressed, calculator);
  });

};

