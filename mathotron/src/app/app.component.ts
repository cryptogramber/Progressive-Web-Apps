import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathotron';
  inputDigits: string;
  currentTotal: number = null;
  pendingOperation: string;
  pendingNumber: number = null;
  newCalc: boolean = true;
  
  constructor() {
    this.inputDigits = '';
    this.currentTotal = 0;
    this.pendingOperation = '';
    this.pendingNumber = 0;
  }


  addToHistory(oper, num) {
    let div = document.createElement("div");
    div.innerHTML = "(" + oper + " " + num + ") = " + this.currentTotal.toString();
    document.getElementById("history").appendChild(div);
    let messageBody = document.getElementById('history');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }

  doMath(num1, operation, num2, nextOperation) {
    switch(operation) {
      case 'a':
        this.currentTotal = num1 + num2;
        this.pendingNumber = this.currentTotal;
        this.addToHistory("+", num2);
        this.pendingOperation = nextOperation;
      break;
      case 's':
        this.currentTotal = num1 - num2;
        this.pendingNumber = this.currentTotal;
        this.addToHistory("-", num2);
        this.pendingOperation = nextOperation;
      break;
      case 'm':
        this.currentTotal = num1 * num2;
        this.pendingNumber = this.currentTotal;
        this.addToHistory("*", num2);
        this.pendingOperation = nextOperation;
      break;
      case 'd':
        if (num2 != 0) {
          this.currentTotal = num1 / num2;
          this.pendingNumber = this.currentTotal;
          this.addToHistory("/", num2);
          this.pendingOperation = nextOperation;
        } else {
          this.pendingOperation = operation;
          this.pendingNumber = this.currentTotal;
          let div = document.createElement("div");
          div.innerHTML = "(cannot /0) = " + num1;
          document.getElementById("history").appendChild(div);   
        }
      break;
      case 'o':
        if (num2 != 0) {
          this.currentTotal = num1 % num2;
          this.pendingNumber = this.currentTotal;
          this.addToHistory("%", num2);
          this.pendingOperation = nextOperation;
        } else {
          this.pendingOperation = operation;
          this.pendingNumber = this.currentTotal;
          let div = document.createElement("div");
          div.innerHTML = "(cannot /0) = " + num1;
          document.getElementById("history").appendChild(div);  
        }
      break;
      default:
      break;
    }
  }

  checkInput(inputCheck) {
    if ((inputCheck != '') && !isNaN(Number(inputCheck))) {
      return true;
    } else {
      return false;
    }
  }
  // after equals, if user enters another operation -- continue with previous total
  // if user enters new number, start new clicker
  operation(command) {
    // console.log(this.pendingNumber + this.pendingOperation);
    if (this.checkInput(this.inputDigits)) {
      if (this.pendingOperation != '') {
        this.doMath(this.pendingNumber, this.pendingOperation, Number(this.inputDigits), command);
      } else {
        if (this.newCalc) {
          document.getElementById("history").innerHTML = "";
          let div = document.createElement("div");
          div.innerHTML = "(new) = " + Number(this.inputDigits);
          document.getElementById("history").appendChild(div);
          this.newCalc = false;
        }
        this.pendingOperation = command;
        this.pendingNumber = Number(this.inputDigits);
      }
    } else {
      if (this.pendingNumber) {
        this.pendingOperation = command;
      }
    }
    this.inputDigits = '';
  }

  equals() {
    if (this.checkInput(this.inputDigits)) {
      this.doMath(this.pendingNumber, this.pendingOperation, Number(this.inputDigits), '');
      this.inputDigits = '';
      this.pendingOperation = '';
      this.newCalc = true;
    }
  }

  clear() {
    document.getElementById("history").innerHTML = "Hi.<br />I am Mathotron.<br />Feed me your numbers.<br />";
    this.currentTotal = null;
    this.pendingNumber = null;
    this.pendingOperation = '';
    this.inputDigits = '';
    this.newCalc = true;
  }

  togglepos() {
    if (this.checkInput(this.inputDigits)) {
      let toggleNum = (Number(this.inputDigits) * -1).toString();
      this.inputDigits = toggleNum;
    }
  }

  number(newdigit) {
    this.inputDigits += newdigit;
  }
}
