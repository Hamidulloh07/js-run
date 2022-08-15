let elForm = document.querySelector(".form");
let elInput = elForm.querySelector(".form-control-input");
let elCheckFirst = elForm.querySelector(".form-check-input-1");
let elCheckSecond = elForm.querySelector(".form-check-input-2");
let elOutput = document.querySelector(".output");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault()

  let elInputValue = elInput.value;
  let elCheckFirstCheck = (elCheckFirst.checked)
  let elCheckSecondCheck = (elCheckSecond.checked)

  if ((elInputValue >= 10 && elInputValue < 40) && (elCheckFirstCheck) && (elCheckSecondCheck)) {
    elOutput.textContent = "Siz faqat zalga chiqishingiz mumkin"
    return;
  } else if ((elInputValue >= 10 && elInputValue < 40) && (elCheckSecondCheck)) {
    elOutput.textContent = "Siz endi zalga chiqishingiz mumkin"
    return;
  } else if ((elInputValue >= 10 && elInputValue < 40) && (elCheckFirstCheck)) {
    elOutput.textContent = "yomg'ir yog'yapti uyda otiring"
    return;
  } else if (elInputValue >= 10 && elInputValue < 40) {
    elOutput.textContent = "Siz faqat yugurishga chiqishingiz mumkin"
    return;
  } else if (elInputValue < 0) {
    elOutput.textContent = "iltimos manfiy son kiriting"
    return;
  } else if (isNaN(elInputValue)) {
    elOutput.textContent = "faqat sonda kiriting"
    return;
  } else {
    elOutput.textContent = "Siz yugurishga chiqishingiz mumkin emas Ob-havo yomon"
    if (elCheckSecondCheck) {
      elOutput.textContent = "Ob-havo yomonligidan zalga ham ruxsat yoq"
    }

    if (elCheckFirstCheck) {
      elOutput.textContent = "Ob-havo yomon yomg'ir yogyapti yugurushga ruxsat yoq"
    }

    if ((elCheckSecondCheck) && (elCheckFirstCheck)) {
      elOutput.textContent = "Ob-havo yomon yomg'ir yogyapti umuman zalga ruxsat yoq"
    }
    return;
  }
});