alert("Chatbot : Alpha Hospital");
alert("Talk to our bot to solve your queries.");
alert("There you go!");
window.addEventListener('load', function(){


var chat = document.getElementById("chatButton");
var no = document.getElementById("noButton");
var yes = document.getElementById("yesButton");
var txt = document.getElementById("textBox");
var confirm = document.getElementById("confirmation");
var help = document.getElementById("helpBox");
var helpBtn = document.getElementById("helpButton");
var trainingArea = document.getElementById("trainArea");
var botTalk = ["Hello,how can I help you","You can reach us at : 723829*** or hospitalwebwm@gmail.com","The slots are: 9am-12 pm, 2pm-5pm, 6pm-10pm. To book your slot contact or email us at helpline.","Alright!","Okay, tell me the day. I will let you know the slots. Please note that Saturday and Sunday are off days."];
var divArr=[];
var delayVar=0;

function newDiv(COLOR, TEXT){
var newdiv = document.createElement("div");

newdiv.style.width = "90%";
newdiv.style.height = "10%";
newdiv.style.background = COLOR;
if(COLOR=="black"){
	newdiv.style.left="53%";
}
else{
	newdiv.style.left="47%";
}
newdiv.style.bottom="15%";
newdiv.style.position="fixed";
newdiv.style.borderRadius="10px";
newdiv.style.transform="translate(-50%,0)";
newdiv.style.paddingLeft ="10px";
newdiv.style.paddingTop ="5px";
newdiv.style.fontFamily="	Verdana, Times, serif";
newdiv.innerHTML = TEXT;
newdiv.style.border = "1px solid black";
newdiv.style.color="white";
document.body.appendChild(newdiv);

divArr.push(newdiv);

for (y=0;y<divArr.length-1;y++){
	if (divArr[y].style.bottom=="15%"){
	divArr[y].style.bottom="28%";
}
else if (divArr[y].style.bottom=="28%"){
	divArr[y].style.bottom="41%";
}
else if (divArr[y].style.bottom=="41%"){
	divArr[y].style.bottom="54%";
}
else if (divArr[y].style.bottom=="54%"){
	divArr[y].style.bottom="67%";
}
else if (divArr[y].style.bottom=="67%"){
	divArr[y].style.bottom="80%";
}
else if (divArr[y].style.bottom=="80%"){
	divArr[y].style.bottom="93%";
}
else if (divArr[y].style.bottom=="93%"){
	divArr[y].style.bottom="106%";
}
else if(divArr[y].style.bottom=="106%"){
	divArr[y].style.display="none";
}
}


}
/*
newDiv("green","Who are you?");
newDiv("orange","I am a bot.");
*/
//***********Machine learning**************
var net = new brain.NeuralNetwork();
var trainData = [];
var maxLength = 0;
var remainingLength = 0;
var newInput;
var commands = 15;

//Greeting
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,1,0,0,0], output: {[1]: 1} }); //HI
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0], output: {[1]: 1} }); //HEY
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0], output: {[1]: 1} }); //HELLO
trainData.push({ input: [1,0,1,1,0,0,0,1,0,0,1,1,1,0], output: {[1]: 1} }); //Yo 
																					

																					
//helpline
trainData.push({ input: [1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0], output:{[2]: 1}});
																																																								   
//For Monday?
trainData.push({ input: [1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0], output:{[3]: 1}});
trainData.push({ input: [1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0],  output:{[3]: 1}});
trainData.push({ input: [1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0],  output:{[3]: 1}});
trainData.push({ input: [1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0],  output:{[3]: 1}});
trainData.push({ input: [1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0],output:{[3]: 1}});

//Thankyou
trainData.push({ input: [1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0], output:{[4]: 1}});
trainData.push({ input: [1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0], output:{[4]: 1}});
																																																									 

//Book an appointment for me
trainData.push({ input: [1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1, 0,1,1,1,0,0,0,0, 0,1,1,1,0,0,0,0, 0,1,1,0,1,1,1,1, 0,1,1,0,1,0,0,1, 0,1,1,0,1,1,1,0, 0,1,1,1,0,1,0,0, 0,1,1,0,1,1,0,1, 0,1,1,0,0,1,0,1, 0,1,1,0,1,1,1,0, 0,1,1,1,0,1,0,0 ], output:{[5]: 1}}); 





//Commands to fill up the arrays with zeros. All arrays must be of same length
for (j=0;j<trainData.length;j++){
	if (trainData[j].input.length > maxLength){
		maxLength = trainData[j].input.length;
	}
}
for (q=0;q<trainData.length;q++){
	if (trainData[q].input.length < maxLength){
		remainingLength = maxLength - trainData[q].input.length;
		zeroArray = Array(remainingLength).fill(0);
		trainData[q].input = trainData[q].input.concat(zeroArray);
	}
}

//Training
net.train(trainData, {
	log: false,
	logPeriod: 10,
	errorThresh: 0.0005,
}); //Using all the training data to train the AI


//Chat button
chat.addEventListener("click",function(){

if (txt.value != ""){

newDiv("black",txt.value);

var data = textToBinary(txt.value);

	var result = brain.likely(data, net);

	for (k=1;k<=botTalk.length;k++){

	if (result == k){
		delayVar=k;
		setTimeout(function(){
newDiv("#52527a",botTalk[delayVar-1]);

trainingArea.style.display="inline";
	
},800);
	}

	}

   help.style.display = "none";
	helpBtn.style.display = "none";
}
});





function textToBinary(text){
	//Storing all letters as binary numbers for AI
text = text.toUpperCase();
	var data = [];
	
	for (i=0;i<text.length;i++){
		
		if ( text[i]=="A"){
			data = data.concat([1,0,0,0,0,0,0]);
		}
		else if (text[i]=="B"){
			data = data.concat([1,0,0,0,0,0,1]);
		}
		else if (text[i]=="C"){
			data = data.concat([1,0,0,0,0,1,0]);
		}
		else if (text[i]=="D"){
			data = data.concat([1,0,0,0,0,1,1]);		
		}
		else if (text[i]=="E"){
			data = data.concat([1,0,0,0,1,0,0]);
		}
		else if (text[i]=="F"){
			data = data.concat([1,0,0,0,1,0,1]);
		}
		else if (text[i]=="G"){
			data = data.concat([1,0,0,0,1,1,0]);
		}
		else if (text[i]=="H"){
			data = data.concat([1,0,0,0,1,1,1]);	
		}
		else if (text[i]=="I"){
			data = data.concat([1,0,0,1,0,0,0]);
		}
		else if (text[i]=="J"){
			data = data.concat([1,0,0,1,0,0,1]);
		}
		else if (text[i]=="K"){
			data = data.concat([1,0,0,1,0,1,0]);		
		}
		else if (text[i]=="L"){
			data = data.concat([1,0,0,1,0,1,1]);
		}
		else if (text[i]=="M"){
			data = data.concat([1,0,0,1,1,0,0]);							
		}
		else if (text[i]=="N"){
			data = data.concat([1,0,0,1,1,0,1]);
		}
		else if (text[i]=="O"){
			data = data.concat([1,0,0,1,1,1,0]);
		}
		else if (text[i]=="P"){
			data = data.concat([1,0,0,1,1,1,1]);
		}
		else if (text[i]=="Q"){
			data = data.concat([1,0,1,0,0,0,0]);
		}
		else if (text[i]=="R"){
			data = data.concat([1,0,1,0,0,0,1]);
		}														
		else if (text[i]=="S"){									
			data = data.concat([1,0,1,0,0,1,0]);
		}
		else if (text[i]=="T"){
			data = data.concat([1,0,1,0,0,1,1]);		
		}
		else if (text[i]=="U"){
			data = data.concat([1,0,1,0,1,0,0]);
		}
		else if (text[i]=="V"){
			data = data.concat([1,0,1,0,1,0,1]);
		}
		else if (text[i]=="W"){
			data = data.concat([1,0,1,0,1,1,0]);
		}
		else if (text[i]=="X"){
			data = data.concat([1,0,1,0,1,1,1]);		
		}
		else if (text[i]=="Y"){
			data = data.concat([1,0,1,1,0,0,0]);
		}
		else if (text[i]=="Z"){
			data = data.concat([1,0,1,1,0,0,1]);
		}
		else if (text[i]=="?"){
			data = data.concat([1,1,1,1,1,1,1]);
		}
	}
	//Used the code below to be able to read long arrays
	//console.log(data.toString());

	//Fill user input array with zeros to get correct length
	if (data.length < maxLength){
		remainingLength = maxLength - data.length;
		zeroArray = Array(remainingLength).fill(0);
		data = data.concat(zeroArray);
	}
	return data;
}
});

