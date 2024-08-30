
var img = document.querySelectorAll(".inner .img")
var lbtn = document.querySelector(".inner .lbtn")
var rbtn = document.querySelector(".inner .rbtn")
var dots = document.querySelectorAll(".inner .dots i")
var dotBox = document.querySelector(".inner .dots")

var idArr = ["first", "second", "right", "left", "left", "left", "last"];
var timer = null
render()
function render() {
    for (var i = 0; i < img.length; i++) {
        img[i].id = idArr[i]
    }
}
var index = 0


for (var i = 0; i < dots.length; i++) {
    var dotList = dots[i]
    dotList.index = i
    dotList.onmouseenter = function () {
        //这里需要判断用户点击的小方块与当前图片的索引之差，如果
        //大于0，则表明用户需要更换的是后面的图片，反之，表明用户
        //需要更换之前也就是前面的图片
        if (index > this.index) {
            let x = index - this.index
            while (x--) {
                lbtn.onclick()
            }
        }
        else if (index < this.index) {
            let x = this.index - index
            while (x--) {
                rbtn.onclick()
            }
        }
        console.log(this.index)
    }
}

rbtn.onclick = function () {
    index++
    if (index > img.length - 1) {
        index = 0
    }
    //下一张,让数组最后一个变成第一个
    // pop删除数组的最后一个元素：
    idArr.unshift(idArr.pop())
    render()
    dot(index)
}

lbtn.onclick = function () {
    index--
    if (index < 0) {
        index = img.length - 1
    }
    idArr.push(idArr.shift())
    render()
    dot(index)
}

function dot(index) {
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    dots[index].classList.add("active")
}


timer = setInterval(() => {
    rbtn.onclick()
}, 1500);


dotBox.onmouseenter = function () {
    clearInterval(timer)
}

dotBox.onmouseleave = function () {
    timer = setInterval(() => {
        rbtn.onclick()
    }, 1500);
}

