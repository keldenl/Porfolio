// function showDesc(el) {
//   console.log("IT WORKED!")
//   var summ = el.getElementsByClassName("summ")[0];
//   console.log(!summ.style.maxHeight)
//   // if (!summ.style.maxHeight) { summ.style.maxHeight = 0 }
//   var newHeight = !summ.style.maxHeight || summ.style.maxHeight === '0px' ? '500px' : 0
//   console.log(newHeight)
//   summ.style.maxHeight = newHeight
//   //summ.style.maxHeight = '100px';
//   // summ.style.maxHeight = summ.style.maxHeight === '0px' ? '999999px' : '0px';
// }

function updateDesc(el) {
  var summ = el.getElementsByClassName("summ")[0];
  var butt = el.getElementsByClassName("read-more")[0];
  var show = summ.style.opacity === '0' || !summ.style.opacity ? true : false

  butt.style.opacity = show ? '1' : '0'
  summ.style.maxHeight = show ? '300px' : '0px'
  summ.style.opacity = show ? '1' : '0'
  summ.children[0].style.opacity = show ? '1' : '0'
  // console.log(!summ.style.maxHeight)
  // // if (!summ.style.maxHeight) { summ.style.maxHeight = 0 }
  // var newHeight = !summ.style.maxHeight || summ.style.maxHeight === '0px' ? '500px' : 0
  // console.log(newHeight)
  // summ.style.maxHeight = newHeight
  //summ.style.maxHeight = '100px';
  // summ.style.maxHeight = summ.style.maxHeight === '0px' ? '999999px' : '0px';
}

function onCatSelect(el) {
  var currSelection = "";
  var allSelections = document.querySelectorAll('input[name="category"]');

  for (let s of allSelections) {
    if (s.checked) { s.parentNode.classList.add("cat-selected"); currSelection = s.value; }
    else { s.parentNode.classList.remove("cat-selected"); }
  }

  var allArticles = document.querySelectorAll('article');

  console.log(currSelection)
  for (let a of allArticles) {
    // console.log(a.getAttribute("data-cat"))
    // console.log(currSelection)
    console.log(a.getAttribute("data-cat").toLowerCase().includes(currSelection))
    a.style.display = a.getAttribute("data-cat").toLowerCase().includes(currSelection) || currSelection === "all" ? "inline-block" : "none";
  }
}
