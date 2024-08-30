var tuwentoggle = document.querySelectorAll(".tuwentoggle .container .toggle")
var tuwenbox = document.querySelectorAll(".tuwentoggle .container .box")
var tuwenContent = document.querySelectorAll(".tuwentoggle .container .box .content")


var flag = true
for (var i = 0; i < tuwentoggle.length; i++) {

    var tuwenList = tuwentoggle[i]
    tuwenList.index = i
    tuwenList.onclick = function () {
        if (flag) {
            flag = false
            this.style.boxShadow = "0 0 0 1000px rgba(255, 255, 255, 0.8)"
            tuwenContent[this.index].style.opacity = "1"
        }
        else {
            flag = true
            this.style.boxShadow = "0 0 0 0px rgba(255, 255, 255, 0.8)"
            tuwenContent[this.index].style.opacity = "0"
        }

    }
}
