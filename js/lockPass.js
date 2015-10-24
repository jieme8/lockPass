(function(){
    var password = "1106"; //密码设置

	var div = document.createElement("div");
	div.id = "lockPassPm";
    var ul = document.createElement("ul");
    ul.id = "lpUl";
	document.body.appendChild(div);
    div.appendChild(ul);
    ul.innerHTML = '<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>*</li><li>0</li><li>#</li>';
    

    //设置样式
    var h = window.innerHeight;
    div.style.height = h + "px";
    ul.style.marginTop = (((h - 360 )/2)-40) + "px";


    var passArr = []; //密码
    //var liArr = ul.getElementsByTagName("li");
    ul.addEventListener("click",function(event){
    	passAdd(event.srcElement.innerText);
    })


    function passAdd(n){
    	passArr.push(n);
    	console.log(passArr)
    	console.log(passArr.length)

    	if(passArr.length >= password.length && passPanduan()){
    		document.body.removeChild(div)
    	}
    }

    function passPanduan(){
    	var p = true;
    	var pArr = password.split("");
    	for(i=0;i<password.length;i++){passArr[i] != pArr[i] ? p = false : "";}
    	return p;
    }

})(document)










