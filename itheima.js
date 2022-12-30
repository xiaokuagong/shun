     // 处理data参数 把data对象转化成查询字符串
     function redata(data){
        var arr = []
        for(var k in data){
            var str = k + '=' + data[k]
            arr.push(str)
        }
        return arr.join('&')
    }
    // 定义itheima函数(在函数中，创建xhr对象，并监听事件)
    function itheima(options){
        // 创建xhr对象
        var xhr = new XMLHttpRequest()
        // 拼接字符查询
        var qs = redata(options.data)
        // method请求方式 touppercase转换为大写
        if(options.method.toUpperCase() === 'GET'){
            // 就发起get请求
            xhr.open(options.method,options.url + '?' +qs)
            xhr.send()
        }else if(options.method.toUpperCase() === 'POST'){
            // 发起post请求
            xhr.open(options.method,options.url)
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            xhr.send(qs)
        }
        
    
        // 监听请求状态改变的事件
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status===200){
                var result = JSON.parse(xhr.responseText)
                options.success(result)
            }
        }
    }