//button dom
buttonDom = document.getElementById("submit_button");
//input dom
inputDom = document.getElementById("input");
//output dom
outputDom = document.getElementById("output");

buttonDom.addEventListener("click", () => {
  outputDom.innerText ='Hello ' + inputDom.value;
  inputDom.value = "";
});