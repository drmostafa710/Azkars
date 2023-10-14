let box = document.querySelectorAll(".box")

let span = document.querySelectorAll("span")


let zkr_33 = "33"
let zkr_100 = "100"
let zkr_70 = "70"
let zkr_10 = "10"
let zkr_7 = "7"

let audio = document.querySelector("audio")
audio.style.cssText = "display:none;"


box.forEach(element => {    
    if(element.children[1].textContent === zkr_33) {
        element.onclick = function(event) {
            this.children[1].textContent -= 1
            if(this.children[1].textContent === "-1") {
                this.children[1].textContent = zkr_33
                audio.play()
            }
        }
        
    } else if(element.children[1].textContent === zkr_100) {
        element.onclick = function() {
            this.children[1].textContent -= 1
            if(this.children[1].textContent === "-1") {
                this.children[1].textContent = zkr_100
                audio.play()
            }
        }
    } else if(element.children[1].textContent === zkr_70) {
        element.onclick = function() {
            this.children[1].textContent -= 1
            if(this.children[1].textContent === "-1") {
                this.children[1].textContent = zkr_70
                audio.play()
            }
        }
    } else if(element.children[1].textContent === zkr_10) {
        element.onclick = function() {
            this.children[1].textContent -= 1
            if(this.children[1].textContent === "-1") {
                this.children[1].textContent = zkr_10
                audio.play()
            }
        }
    } else if(element.children[1].textContent === zkr_7) {
        element.onclick = function() {
            this.children[1].textContent -= 1
            if(this.children[1].textContent === "-1") {
                this.children[1].textContent = zkr_7
                audio.play()
            }
        }
    }
    
});
