
function getDom(domel) {
    var dom = document.querySelectorAll(domel)
    if (dom.length = 0) {
        return null
    }
    if (dom.length = 1) {
        return dom[0]
    }
    return dom
}
var idArr = ["first", "center", "last"]
var swiperLastBtn = getDom(".swiper-last-btn")
var swiperNextBtn = getDom(".swiper-next-btn")
var swiperLi = document.querySelectorAll(".swiper-box li")
var dots = document.querySelectorAll(".dots i")
var btnBox = document.querySelector(".btn-box")



var idArr = ["left", "center", "right"]

function render() {
    for (var i = 0; i < swiperLi.length; i++) {
        swiperLi[i].id = idArr[i]
    }
}
render()

var timer = null
var swiperIndex = 0
swiperNextBtn.onclick = function () {

    swiperIndex++
    // unshift () 方法可向数组的开头添加一个或更多元素pop() 方法移除数组的最后一个元素
    idArr.unshift(idArr.pop())
    render()
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    if (swiperIndex > swiperLi.length - 1) {
        swiperIndex = 0
    }
    dots[swiperIndex].classList.add("active")
}

swiperLastBtn.onclick = function () {

    swiperIndex--
    // 切换上一张也就是让数组的最后一个元素变成第一个元素shift () 方法用于把数组的第一个元素从其中删除
    idArr.push(idArr.shift())
    render()
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    if (swiperIndex < 0) {
        swiperIndex = swiperLi.length - 1
    }
    dots[swiperIndex].classList.add("active")

}

//下圆点绑定按钮事件
for (var i = 0; i < dots.length; i++) {
    var dotslist = dots[i]
    dotslist.index = i
    dotslist.onclick = function () {
        //这里需要判断用户点击的小方块与当前图片的索引之差，如果
        //大于0，则表明用户需要更换的是后面的图片，反之，表明用户
        //需要更换之前也就是前面的图片
        if (this.index > swiperIndex) {
            let len = this.index - swiperIndex
            while (len--) {
                swiperNextBtn.onclick()
            }
        }
        else if (this.index < swiperIndex) {
            let len = swiperIndex - this.index
            while (len--) {
                swiperLastBtn.onclick()
            }
        }
    }
}




timer = setInterval(function () {
    swiperNextBtn.onclick()
}, 2000)


btnBox.onmouseenter = function () {
    clearInterval(timer)
}

btnBox.onmouseleave = function () {
    timer = setInterval(function () {
        swiperNextBtn.onclick()
    }, 2000)
}


var chaImg = document.querySelectorAll(".tab-left img")
var pagebtn = document.querySelectorAll(".page-btn p")
var pageTitle = document.querySelectorAll(".tab .title")
var pageTopic = document.querySelectorAll(".tab .topic")
var page = document.querySelectorAll(".tab .page")


console.log(pageTitle)
console.log(pageTopic)
console.log(page)


pageTitle[0].classList.add("active")
pageTopic[0].classList.add("active")
page[0].classList.add("active")
chaImg[0].classList.add("imgactive")


for (var i = 0; i < pagebtn.length; i++) {
    var pageBtnList = pagebtn[i]
    pageBtnList.index = i
    pageBtnList.onclick = function () {
        for (var j = 0; j < chaImg.length; j++) {
            chaImg[j].classList.remove("imgactive")
            pageTitle[j].classList.remove("active")
            pageTopic[j].classList.remove("active")
            page[j].classList.remove("active")
        }


        pageTitle[this.index].classList.add("active")
        pageTopic[this.index].classList.add("active")
        page[this.index].classList.add("active")
        chaImg[this.index].classList.add("imgactive")
    }
}






