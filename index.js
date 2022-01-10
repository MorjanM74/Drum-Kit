let numberOfDrums = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {

        let buttonHTML = this.innerHTML;

        buttonAnimation(buttonHTML)

        switch (buttonHTML) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play()
                break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play()
                break;

            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play()
                break;

            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play()
                break;

            case "j":
                var snare = new Audio('sounds/snare.mp3')
                snare.play()
                break;

            case "k":
                var crush = new Audio('sounds/crash.mp3')
                crush.play()
                break;

            case "l":
                var kick = new Audio('sounds/kick-bass.mp3')
                kick.play()
                break;

            default:
                console.log(buttonHTML)
                break;
        }
    })
}




for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('keydown', function (e) {

        let keywordHTML = e.key;

        buttonAnimation(keywordHTML)

        switch (keywordHTML) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play()
                break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play()
                break;

            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play()
                break;

            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play()
                break;

            case "j":
                var snare = new Audio('sounds/snare.mp3')
                snare.play()
                break;

            case "k":
                var crush = new Audio('sounds/crash.mp3')
                crush.play()
                break;

            case "l":
                var kick = new Audio('sounds/kick-bass.mp3')
                kick.play()
                break;

            default:
                console.log(buttonHTML)
                break;
        }
    })
}

function buttonAnimation(buttonClicked) {
    let Anime = document.querySelector("." + buttonClicked);
    Anime.classList.add('pressed')

    setTimeout(function() {
        Anime.classList.remove('pressed')
    },100)
}