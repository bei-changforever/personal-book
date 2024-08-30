window.onload = function () {
    var toggleBtn = document.querySelector(".button")
    var ball = document.querySelector(".ball")
    var off = document.querySelector(".off")
    var on = document.querySelector(".on")
    var bottom = document.querySelector(".bottom")
    var zhuce = document.querySelector(".zhuce")
    var zhucema = document.querySelector(".zhucema")
    var btn = document.querySelectorAll("button")
    var logink = document.querySelector(".logink")
    var passk = document.querySelector(".passk")


    var index = 0
    toggleBtn.onclick = function () {
        if (index === 0) {
            index = 1
            ball.style.left = "35px"
            on.style.opacity = "1"
            off.style.opacity = ".5"
            bottom.style.transform = "rotateY(180deg)"
        }
        else {
            index = 0
            ball.style.left = ""
            off.style.opacity = "1"
            on.style.opacity = ".5"
            bottom.style.transform = "rotateY(0)"
        }
    }

    var obj = {}
    var arr = []
    btn[1].onclick = function () {
        var zhuceName = zhuce.value.trim()
        var zhucePass = zhucema.value.trim()
        if (!zhuceName && !zhucePass) {
            alert("输入的内容不能为空")
        }
        else {
            obj.name = zhuceName
            obj.pass = zhucePass
            arr.push(obj)
            localStorage.setItem("account", JSON.stringify(arr))
            alert("注册成功")
        }
    }

    btn[0].onclick = function () {
        var loginkText = logink.value.trim()
        var passkText = passk.value.trim()
        var accountList = localStorage.getItem("account")
        console.log(accountList)
        if (!loginkText && !passkText) {
            alert("非法用户")
        }
        else {
            var accountListArr = JSON.parse(accountList)
            console.log(accountListArr)
            for (var i = 0; i < accountListArr.length; i++) {
                console.log(accountListArr[i])
                if (loginkText === accountListArr[i].name && passkText === accountListArr[i].pass) {
                    window.location.href = "../world.html"

                }
                else {
                    alert("没有该用户")
                }
            }
        }
    }






}