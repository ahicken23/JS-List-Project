productArray = [];
function addProduct() {
  let input = document.getElementById("product").value;
  let div = document.getElementById("output");
  div.style.display = "block";
  div.innerHTML += `<div>${input}</div>`;

  if (input === "") {
    alert("Please enter product!");
  }
  console.log(input);
}
