function ironMan(man){
   return "your favourate marvel character is"  + man
   }
 let myMan = ironman("batMan");
 console.log(myMan);


 function sayhello() {
    let name = prompt("What is your name?");
    console.log("Hello, " + name + "!");
 }

function makeCookie(flavor = "vanilla") {
    return "Here's your " + flavor + " cookie!";
  }
  
  let myCookie = makeCookie();
  console.log(myCookie);  
  