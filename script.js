const projectButton1 = document.getElementById("readMore1")
const projectButton2 = document.getElementById("readMore2")
const projectButton3 = document.getElementById("readMore3")

const extraText1 = document.getElementById("moreText1")
const extraText2 = document.getElementById("moreText2")
const extraText3 = document.getElementById("moreText3")

const expandText = () => {
  if (extraText1.style.display === "none") {
    extraText1.style.display = "inline"
    projectButton1.innerHTML = "<<"

  } else {
    extraText1.style.display = "none"
    projectButton1.innerHTML = ">>"
  }
}

// const expandText = () => {
//   this.yadayada.toggle("expanded")
// }

// document.getElementById("readMore1").onclick = expandText()
extraText1.style.display === "block"
}