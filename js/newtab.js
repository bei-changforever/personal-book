var newTabBox = document.querySelectorAll(".newtab .container .card .box")
var slide = document.querySelectorAll(".newtab .container .slide i")
var newtabImg = document.querySelectorAll(".newtab .container .card .box .img img")

for (var i = 0; i < slide.length; i++) {
    var slideList = slide[i]
    slideList.index = i
    slideList.onclick = function () {
        for (var j = 0; j < newTabBox.length; j++) {
            newTabBox[j].classList.remove("active")
        }
        newTabBox[this.index].classList.add("active")

        for (var k = 0; k < slide.length; k++) {
            slide[k].classList.remove("active")
        }


        for (let j = 0; j < newtabImg.length; j++) {
            newtabImg[j].style.animation = ""
        }




        this.classList.add("active")
    }
}


for (let i = 0; i < newtabImg.length; i++) {
    var newtabImgList = newtabImg[i]
    newtabImgList.index = i
    newtabImgList.onclick = function () {

        for (let j = 0; j < newtabImg.length; j++) {
            newtabImg[j].style.animation = ""
        }

        this.style.animation = "move3 .5s linear forwards"
    }

}