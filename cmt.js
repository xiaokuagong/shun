// 定义函数获取评论列表
function getCommenentList(){
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        data:[],
        success: function(res){
            if(res.status !==200) return alert('获取失败')
            console.log('获取数据成功')
            var rows = []
            $.each(res.data,function(i,item){
                var str = '<li id="cmt-list"><span class="badge">评论时间:</span><span class="badge">评论人:</span></li>'
                rows.push(str)
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}
getCommenentList()