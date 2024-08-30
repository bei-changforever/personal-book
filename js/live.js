window.onload = function () {
    var ceTab = document.querySelector(".cebian-tab")
    var ceBtn = document.querySelector(".ce")
    var cebackBtn = document.querySelector(".cebian-tab .top img")
    var qrBtn = document.querySelectorAll(".container .right i")
    var qrimg = document.querySelectorAll(".qr-tab img")
    var toggleLogo = document.querySelector(".container .left .toggle")
    var toggleLogoImg = document.querySelector(".container .left .toggle img")
    var toggleLogoSpan = document.querySelector(".container .left .toggle .span")
    var backColor = document.querySelector(".backColor")
    var aa = document.querySelector(".aa")
    var cespan = document.querySelectorAll(".ce span")
    var sectionBack = document.querySelector("section .back")
    var chongback = document.querySelector("section .chongback")
    var sectionborder = document.querySelector("section .border")
    var sectionTab = document.querySelector("section .container .tab")
    var hen = document.querySelector(".bb")
    var div1 = document.querySelector(".div1")
    var divUl = document.querySelector(".div1 ul")
    var divLi = document.querySelectorAll(".div1 ul li")
    var divImg = document.querySelectorAll(".div1 ul li img")

    // .div1 ul li img


    var flag = true
    hen.onclick = function () {
        if (flag) {
            flag = false
            // sectionTab.style.display = "block"
            sectionTab.style.transition = ".5s"
            sectionTab.style.opacity = "1"
            sectionTab.style.height = "100%"
            div1.style.transition = ".5s"
            div1.style.height = "100%"
            divUl.style.transition = ".5s"
            divUl.style.height = "80%"
            for (var i = 0; i < divImg.length; i++) {
                divImg[i].style.transition = ".5s"
                divImg[i].style.height = "50px"
            }
            for (var j = 0; j < divLi.length; j++) {
                divLi[j].style.transition = ".5s"
                divLi[j].style.height = "74px"
            }
        }
        else {
            flag = true
            // sectionTab.style.display = "none"
            sectionTab.style.transition = ".5s"
            sectionTab.style.opacity = "0"
            sectionTab.style.height = "0%"

            div1.style.transition = ".5s"
            div1.style.height = "0%"
            divUl.style.transition = ".5s"
            divUl.style.height = "0%"
            for (var i = 0; i < divImg.length; i++) {
                divImg[i].style.transition = ".5s"
                divImg[i].style.height = "0"
            }
            for (var j = 0; j < divLi.length; j++) {
                divLi[j].style.transition = ".5s"
                divLi[j].style.height = "0"
            }

        }

    }






    sectionborder.onmousemove = function (evt) {
        // 如果我们想要图片跟随鼠标旋转-首先要获取鼠标坐标
        // window.requestAnimationFrame(function () {
        // clientY 返回当前事件被触发时相对于浏览器的垂直坐标
        // clientX 返回当前事件被触发时相对于浏览器的水平坐标
        var x = evt.clientX / 150
        var y = evt.clientY / 150
        movecard(evt.clientX, evt.clientY, x, y);
        // console.log(evt.clientX, evt.clientY)
        // })

        // sectionBack.style.transform = 'translateX(' + mouseX + 'px) translateY(' + mouseY + 'px) '

    }

    var speed = 5

    function movecard(x, y, a, b) {
        // getBoundingClientRect()用于获取页面元素的左、上、下、右分别相对于浏览器的位置
        let box = sectionBack.getBoundingClientRect()
        //计算x坐标
        let calcX = (y - box.y - (box.height / 2)) / 5 / speed
        //计算y坐标
        let calcY = (x - box.x - (box.width / 2)) / 10 / speed * -1

        let calcZ = (box.height * box.y) / 60


        sectionBack.style.transform = 'translateX(' + a + 'px) translateY(' + b + 'px)  rotateX' + '(' + calcX + 'deg' + ')' + 'rotateY' + '(' + calcY + 'deg' + ')';

    }


    sectionborder.onmouseleave = function () {
        sectionBack.style.transform = 'translateX(' + 0 + 'px) translateY(' + 0 + 'px) translateZ(0) rotateX' + '(' + 0 + 'deg' + ')' + 'rotateY' + '(' + 0 + 'deg' + ')';
    }






    toggleLogo.onmousedown = function () {
        toggleLogoImg.style.transition = ".5s"
        toggleLogoImg.style.transform = "scale(0.5)"



        backColor.style.transition = "1.5s"
        backColor.style.opacity = "1"
        backColor.style.width = "100%"

        aa.style.transition = "1.5s"
        aa.style.opacity = "1"



        toggleLogo.onmouseup = function () {
            toggleLogoImg.style.transition = ".5s"
            toggleLogoImg.style.transform = "scale(1)"
        }
    }

    toggleLogo.onclick = function () {
        toggleLogoSpan.style.color = "white"
        for (var i = 0; i < cespan.length; i++) {
            cespan[i].style.backgroundColor = "white"
        }
    }



    window.document.ondblclick = function () {
        aa.style.transition = ".5s"
        aa.style.opacity = "0"

        toggleLogoSpan.style.color = "black"

        for (var i = 0; i < cespan.length; i++) {
            cespan[i].style.backgroundColor = "black"
        }

        backColor.style.transition = ".5s"
        backColor.style.opacity = "0"
        backColor.style.width = "0%"

    }




    ceBtn.onclick = function () {
        ceTab.style.left = 0
    }

    cebackBtn.onclick = function () {
        ceTab.style.left = "-330px"
    }

    var qrBtnArr = []
    for (var i = 0; i < qrBtn.length; i++) {
        qrBtnArr.push(qrBtn[i].offsetLeft)
    }
    console.log(qrBtnArr)


    qrBtn[0].onmouseenter = function () {
        qrimg[0].style.transform = "translateX(-300px)"
        qrimg[0].style.transition = ".5s"
        qrimg[0].style.opacity = "1"

        qrBtn[0].onmouseleave = function () {
            qrimg[0].style.transform = "translateX(0)"
            qrimg[0].style.transition = ".5s"
            qrimg[0].style.opacity = "0"
        }
    }


    qrBtn[1].onmouseenter = function () {
        qrimg[1].style.transform = "translateX(-220px)"
        qrimg[1].style.transition = ".5s"
        qrimg[1].style.opacity = "1"


        qrBtn[1].onmouseleave = function () {
            qrimg[1].style.transform = "translateX(0)"
            qrimg[1].style.transition = ".5s"
            qrimg[1].style.opacity = "0"
        }
    }

    qrBtn[2].onmouseenter = function () {
        qrimg[2].style.transform = "translateX(-130px)"
        qrimg[2].style.transition = ".5s"
        qrimg[2].style.opacity = "1"


        qrBtn[2].onmouseleave = function () {
            qrimg[2].style.transform = "translateX(0)"
            qrimg[2].style.transition = ".5s"
            qrimg[2].style.opacity = "0"
        }
    }

    qrBtn[3].onmouseenter = function () {
        qrimg[3].style.transform = "translateX(-10px)"
        qrimg[3].style.transition = ".5s"
        qrimg[3].style.opacity = "1"


        qrBtn[3].onmouseleave = function () {
            qrimg[3].style.transform = "translateX(0)"
            qrimg[3].style.transition = ".5s"
            qrimg[3].style.opacity = "0"
        }
    }





}