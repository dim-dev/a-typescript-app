window.onload = () => {
  const calc = new Calculator('X', 'Y', 'Output');
}

class Calculator {
  private x: HTMLInputElement;
  private y: HTMLInputElement;
  private output: HTMLSpanElement;

  constructor(xId: string, yId: string, outputId: string) {
    this.x = <HTMLInputElement>document.getElementById(xId);
    this.y = <HTMLInputElement>document.getElementById(yId);
    this.output = <HTMLSpanElement>document.getElementById(outputId);
    this.wireEvent();
  }

  wireEvent() {
    document.getElementById('Add').addEventListener('click', event => {
      if (this.hasValidInputs(this.x.value, this.y.value)) {
       this.output.innerHTML = `= ${this.add(parseInt(this.x.value), parseInt(this.y.value)).toString()}`;
      }
      console.log(event);
    });
    document.getElementById('Sub').addEventListener('click', event => {
      if (this.hasValidInputs(this.x.value, this.y.value)) {
       this.output.innerHTML = `= ${this.sub(parseInt(this.x.value), parseInt(this.y.value)).toString()}`;
      }
      console.log(event);
    });
  }

  hasValidInputs(x: string, y: string) {
    const isValid = !(this.isEmptyString(x)  || this.isEmptyString(y));
    if (!isValid) {
      alert('input cannot be empty');
    }
    return isValid;
  }

  isEmptyString(s: string) {
    return (s.length === 0);
  }

  add(x: number, y: number) {
    return x + y;
  }

  sub(x: number, y: number) {
    return x - y;
  }
}