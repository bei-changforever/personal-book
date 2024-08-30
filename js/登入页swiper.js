
window.onload = function () {


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
    var swiper = getDom(".swiper")
    var background = getDom(".background")
    var swiperTop = swiper.offsetTop


    // 封装一个函数获取滚动条滚动的距离
    function getScroll() {
        return {
            top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
            left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
        }
    }



    window.onscroll = function () {
        var scrollY = getScroll().top
        console.log(scrollY)
        if (scrollY === 0) {
            swiper.style.transition = "1s"
            swiper.style.opacity = "1"
            background.style.transition = "1s"
            background.style.backgroundPosition = ""
        }
        if (scrollY >= swiperTop && scrollY < 900) {
            swiper.style.transition = "1s"
            swiper.style.opacity = "0"
            background.style.transition = "1s"
            background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
        }
        if (scrollY >= 900) {
            background.style.transition = "1s"
            background.style.backgroundPosition = ""

        }

    }

}


