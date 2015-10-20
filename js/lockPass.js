(function(){
	var div = document.createElement("div");
	div.id = "lockPassPm";
	div.innerHTML = '<ul id="lpUl"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>*</li><li>0</li><li>#</li></ul>';
	document.body.appendChild(div);
	var body = document.getElementsByTagName("body")[0];

    var lp = document.getElementById("lockPassPm");
    var lpUl = document.getElementById("lpUl");
    var h = window.innerHeight;
    lp.style.height = h + "px";
    lpUl.style.marginTop = (((h - 360 )/2)-40) + "px";






})(document)