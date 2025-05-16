let counter = 0

let counterEl = document.getElementById("counter")
let saveEl = document.getElementById("save-el")

function increment(){
   counter = counter+1
   console.log(counter)
   counterEl.textContent = counter
}



function save(){
    let entries = counter + " - "
   saveEl.textContent += entries
   counterEl.textContent = 0
   counter = 0

}



