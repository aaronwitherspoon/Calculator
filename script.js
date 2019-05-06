var answer = "";
var temp = "";
var temp2 = "";
var scrn = document.getElementById("screen");
document.getElementById("one").onclick = function(){
	temp += "1";
	scrn.innerHTML = temp;
};
document.getElementById("two").onclick = function(){
	temp += "2";
	scrn.innerHTML = temp;
};
document.getElementById("three").onclick = function(){
	temp += "3";
	scrn.innerHTML = temp;
};
document.getElementById("four").onclick = function(){
	temp += "4";
	scrn.innerHTML = temp;
};
document.getElementById("five").onclick = function(){
	temp += "5";
	scrn.innerHTML = temp;
};
document.getElementById("six").onclick = function(){
	temp += "6";
	scrn.innerHTML = temp;
};
document.getElementById("seven").onclick = function(){
	temp += "7";
	scrn.innerHTML = temp;
};
document.getElementById("eight").onclick = function(){
	temp += "8";
	scrn.innerHTML = temp;
};
document.getElementById("nine").onclick = function(){
	temp += "9";
	scrn.innerHTML = temp;
};
document.getElementById("zero").onclick = function(){
	temp += "0";
	scrn.innerHTML = temp;
};
document.getElementById("decimal").onclick = function(){
	if (temp.indexOf(".") >= 0){
		return;
	}
	temp += ".";
	scrn.innerHTML = temp;
};
document.getElementById("divide").onclick = function(){
	if(temp.length == 0 && temp.indexOf("/") == temp.length-1 || temp.indexOf("*") == temp.length-1 || temp.indexOf("-") == temp.length-1 || temp.indexOf("+") == temp.length-1){
		return;
	}
	answer += temp;
	temp = "";
	answer = eval(answer);
	answer += "/";
	temp2 = "/"
	scrn.innerHTML = temp2;
};
document.getElementById("multiply").onclick = function(){
	if(temp.length == 0 && temp.indexOf("/") == temp.length-1 || temp.indexOf("*") == temp.length-1 || temp.indexOf("-") == temp.length-1 || temp.indexOf("+") == temp.length-1){
		return;
	}
	answer += temp;
	temp = "";
	answer = eval(answer);
	answer += "*";
	temp2 = "*"
	scrn.innerHTML = temp2;
};
document.getElementById("subtract").onclick = function(){
	if(temp.length == 0 && temp.indexOf("/") == temp.length-1 || temp.indexOf("*") == temp.length-1 || temp.indexOf("-") == temp.length-1 || temp.indexOf("+") == temp.length-1){
		return;
	}
	answer += temp;
	temp = "";
	answer = eval(answer);
	answer += "-";
	temp2 = "-";
	scrn.innerHTML = temp2;
};
document.getElementById("add").onclick = function(){
	if(temp.length == 0 && temp.indexOf("/") == temp.length-1 || temp.indexOf("*") == temp.length-1 || temp.indexOf("-") == temp.length-1 || temp.indexOf("+") == temp.length-1){
		return;
	}
	answer += temp;
	temp = "";
	answer = eval(answer);
	answer += "+";
	temp2 = "+";
	scrn.innerHTML = temp2;
};
document.getElementById("equals").onclick = function(){
	answer += temp;
	temp = " ";
	temp2 = "";
	answer = eval(answer)
	scrn.innerHTML = answer;
};
document.getElementById("ac").onclick = function(){
	temp = "";
	temp2 = "";
	answer = "";
	scrn.innerHTML = temp;
};