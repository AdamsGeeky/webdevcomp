let guistList = ["musa", "mubarak","muhammad","bellow","Addul","usman","fadila","Aishatu","fatima","nafisa"];
// alert(guistList.length);
let name = prompt();
let chech = guistList.includes(name);
if(chech){
	let greetting = [" Gland you show up",
					"  Allow me to intruce to you",
					" fenally you make it ",
					" your always welcome",
					" hope you brought WIFI",
					" that my man let do it"];
					
		let randomGreetting = Math.random() * greetting.length;
		let  randomChoice = Math.floor(randomGreetting) + 1;
		let greet = greetting[randomChoice];

	alert("welcome  " + name +greet);
}else{
	alert("what is your name Again");
	
}