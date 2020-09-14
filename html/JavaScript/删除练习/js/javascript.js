function deleA(){
    var tr=this.parentNode.parentNode;
    var name=tr.getElementsByTagName("td")[0].innerHTML;
    if(confirm("确认要删除"+name+"吗？")){
      tr.parentNode.removeChild(tr);              
    }
    return false;              
}

window.onload=function(){
    var allA=document.getElementsByTagName("a");
    for(var i=0; i<allA.length; i++){
        allA[i].onclick=deleA;
    }

    var addEmpButton=document.getElementById("addEmpButton");
    addEmpButton.onclick=function(){
        var name=document.getElementById("empName").value;
        var email=document.getElementById("email").value;
        var salary=document.getElementById("salary").value;

        var trNew=document.createElement("tr");
        // var nameTd=document.createElement("tb");
        // var emailTd=document.createElement("tb");
        // var salaryTd=document.createElement("tb");
        // var deleteTd=document.createElement("tb");

        // var a=document.createElement("a");

        // var nameText=document.createTextNode(name);
        // var emailText=document.createTextNode(email);
        // var salaryText=document.createTextNode(salary);
        // var deleteText=document.createTextNode("Delete");

        // nameTd.appendChild(nameText);
        // emailTd.appendChild(emailText);
        // salaryTd.appendChild(salaryText);
        // a.appendChild(deleteText);
        // deleteTd.appendChild(a);

        // a.href="deletEmp?";
        
        // a.onclick=deleA;

        // trNew.appendChild(nameTd);
        // trNew.appendChild(emailTd);
        // trNew.appendChild(salaryTd);
        // trNew.appendChild(deleteTd);

        trNew.innerHTML="<td>"+name+"</td>"+
                        "<td>"+email+"</td>"+
                        "<td>"+salary+"</td>"+
                        "<td><a href='deletEmp?'>Delete</a></td>";
        
        var tdA=trNew.getElementsByTagName("a")[0];
        tdA.onclick=deleA;

        var employeeTable=document.getElementById("employeeTable");
        var tbody=employeeTable.getElementsByTagName("tbody")[0];

        tbody.appendChild(trNew);
    }
}