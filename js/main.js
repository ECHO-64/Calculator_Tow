const calculator = document.querySelector(`.calculator`);
const display = calculator.querySelector(`#display`);
const displayInput = display.querySelector(`#display #input`);
const displayResult = display.querySelector(`#display #result`);
const keys = calculator.querySelectorAll(`.calculator button`);

keys.forEach((li) => {
  li.addEventListener(`click`, (c) => {
    const key = c.target;
    const keyContent = key.textContent;
    const displayedNum = displayInput.textContent;
    const action = key.dataset.action;
    // display content
    if (
      !action ||
      action === `add` ||
      action === `subtract` ||
      action === `multiply` ||
      action === `divide`
    ) {
      displayInput.textContent = displayedNum + keyContent;
    }
    // if user hit operator key before a number
    // or before input anything
    if (displayedNum === ``) {
      if (
        action === `add` ||
        action === `subtract` ||
        action === `multiply` ||
        action === `divide`
      ) {
        displayInput.textContent = ``;
      }
    }
    // clear all key
    if (action === `clearAll`) {
      displayInput.textContent = ``;
      displayResult.textContent = ``;
    }
    // delete key
    if (action === `delete`) {
      if (displayedNum !== ``) {
        displayInput.textContent = displayedNum.substring(
          0,
          displayedNum.length - 1
        );
      }
    }
    // decimal key
    if (action === `decimal`) {
      if (displayedNum === ``) {
        displayInput.textContent = `0.`;
      } else {
        displayInput.textContent = displayedNum + keyContent;
      }
    }
    // calculate key
    if (action === `calculate`) {
      displayResult.textContent = eval(displayedNum);
    }
  });
});
