$(function () {
    load()
    $("#title").on("keydown", function (event) {

        if (event.keyCode === 13) {
            //先读取本地存储的数据
            var local = getDate()
            //把local数组进行更新数据 把最新的数据追加给local数组
            local.push({ title: $(this).val().trim(), done: false })
            //把这个新数组local存储给本地存储里
            setData(local)
            //2.totolist 本地数据渲染
            load()
        }
    })

    //读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist")
        if (data !== null) {
            return JSON.parse(data)
        }
        else {
            return []
        }
    }

    function setData(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }

    //渲染加载数据
    function load() {
        //读取本地数据
        var data = getDate()
        //遍历之前先要清空ol里面的元素内容
        $("ol,ul").empty()
        //统计
        var todocount = 0
        var donecount = 0
        //遍历这个数组
        $.each(data, function (index, attr) {
            //console.log(attr)
            if (attr.done) {
                $(".todolist .container .bottom ul").prepend("<li><input type='checkbox' checked='checked'/> <p> " + attr.title + " </p> <a id='" + index + "' href='javascript:;'>删除</li>")
                donecount++

            }
            else {
                $(".todolist .container .bottom ol").prepend("<li><input type='checkbox'/> <p> " + attr.title + " </p> <a id='" + index + "' href='javascript:;'>删除</li>")
                todocount++
            }
        })
        $("#todocount").text(todocount)
        $("#donecount").text(donecount)
    }

    //3.todolist删除操作
    $(".todolist .container .bottom ul,.todolist .container .bottom ol").on("click", "a", function () {
        //先获取本地存储
        var data = getDate()
        //修改数据
        var index = $(this).attr("id")
        //splice(从哪个位置开始删除,删除几个元素) 数组
        data.splice(index, 1)
        //保存在本地存储
        setData(data)
        //保存在本地存储
        load()
    })

    //4.todolist 正在进行和已完成选项操作
    $(".todolist .container .bottom ul,.todolist .container .bottom ol").on("click", "input", function () {
        //先获取本地数据
        var data = getDate()
        //2.修改数据
        var index = $(this).siblings("a").attr("id")
        data[index].done = $(this).prop("checked")
        //3.保存在本地存储
        setData(data)
        //4.重新渲染
        load()
    })

})