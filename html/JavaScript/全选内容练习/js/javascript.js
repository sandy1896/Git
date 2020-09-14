//先定义一个选择函数
function myClick(idStr,fun){
    var btn=document.getElementById(idStr);
    btn.onclick=fun;
} 

window.onload=function(){   
    /*
     *全选按钮
     *点中之后，选项的复选框都被选中
     */
    myClick("checkedAllBtn",function(){
        //获取选项
        var items=document.getElementsByName("items");
        for(var i=0; i<items.length; i++){
            items[i].checked=true;
        }
        var checkedAllBox=document.getElementById("checkedAllBox");
        checkedAllBox.checked=true;
    })

    /*
     *全不选按钮
     *点中之后，选项的复选框都不被选中
     */
    myClick("checkedNoBtn",function(){
        //获取选项
        var items=document.getElementsByName("items");
        for(var i=0; i<items.length; i++){
            items[i].checked=false;
        }
        var checkedAllBox=document.getElementById("checkedAllBox");
        checkedAllBox.checked=false;
    })

    /*
     *反选按钮
     *点中之后，选项的复选框都反选
     */
    myClick("checkedRevBtn",function(){
        //获取选项
        var items=document.getElementsByName("items");
        var checkedAllBox=document.getElementById("checkedAllBox");
        for(var i=0; i<items.length; i++){
            items[i].checked=!items[i].checked;
            checkedAllBox.checked=true;
            for(var k=0; k<items.length; k++)
                if(!items[k].checked){                
                checkedAllBox.checked=false;
            }
        }
    })

    /*
     *发送按钮
     *点中之后，发送选中的复选框的value值
     */
    myClick("sendBtn",function(){
        //获取选项
        var items=document.getElementsByName("items");
        for(var i=0; i<items.length; i++){
            if(items[i].checked){
              alert(items[i].value);
            }
        }
    })

    /*
     *全选/全不选复选框
     *点中之后，选项的复选框都被选中
     */
    myClick("checkedAllBox",function(){
        //获取选项
                var items=document.getElementsByName("items");
                for(var i=0; i<items.length; i++){
                    items[i].checked=this.checked;
                  }
                }
        )

    /*
     *全选/全不选复选框联动状态
     *若选项复选框都被选中，则全选/不全选也被选中，否则不被选中
     */
        var checkedAllBox=document.getElementById("checkedAllBox");        
        var items=document.getElementsByName("items");        
           for(var i=0; i<items.length; i++){
            items[i].onclick=function(){
                checkedAllBox.checked=true;
             for(var j=0; j<items.length; j++)
                if(!items[j].checked){                
                checkedAllBox.checked=false;
                break;
            }
          }
        }         
}