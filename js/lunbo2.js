var bigImg = document.querySelector(".lunbo2 .container .big")
var smallImg = document.querySelectorAll(".lunbo2 .container .small .img")
var lunbo2box = document.querySelector(".lunbo2 .container .box")

var lunbo2index = 0
var lunbo2Timer = null
//
lunbo2Timer = setInterval(function () {
    lunbo2index++
    if (lunbo2index > smallImg.length) {
        lunbo2index = 1
    }
    for (var i = 0; i < smallImg.length; i++) {
        smallImg[i].style.transform = "translateX(0)"
        smallImg[i].style.opacity = "1"
    }
    bigImg.style.backgroundImage = 'url(../lunbo2img/' + lunbo2index + '.jpg)'
    smallImg[lunbo2index - 1].style.transform = "translateX(-300px)"
    smallImg[lunbo2index - 1].style.opacity = "0"
}, 1500)

for (var i = 0; i < smallImg.length; i++) {
    var smallImgList = smallImg[i]
    smallImgList.index = i
    smallImgList.onmouseenter = function () {
        smallImg[this.index].style.transform = "translateX(-300px)"
        smallImg[this.index].style.opacity = "0"
        bigImg.style.backgroundImage = 'url(../lunbo2img/' + (this.index + 1) + '.jpg)'
    }
}

