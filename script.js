function alertFunction(){
    var userInfo=document.getElementById('userName');
    var userName=userInfo.value; 
    alert('Hello '+userName);
}

var buttonDom = document.getElementById('buttonInput');
buttonDom.addEventListener('click',alertFunction);