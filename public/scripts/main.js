//General page Javascript, not related to Faro SDK.

let cartQuanity=document.getElementById("AddCartQuantity");

cartQuanity.value=getRandomInt(1,100);//on page load - will set a random value so easier to submit multiple events. 

randomlySelectUserType();
//Pre-populate values for convenience.  
let username=document.getElementById("Username");
let email=document.getElementById("email");
let Id=document.getElementById("id");
let radio=document.getElementsByName("flexRadioDefault");
let userType=getRadioValue();


Id.value=getRandomInt(1,10000);//on page load - will set a random value so easier to submit with different Ids every session.
username.value="test-user"+Id.value;
email.value="test-user"+Id.value+"@grafana.com"

function randomlySelectUserType(){

  let random=getRandomInt(1,10);
  if (random>1 && random<=4){
    document.getElementById("flexRadioDefault1").checked=true 
   }
  else {
    document.getElementById("flexRadioDefault2").checked=true 

  }
}

//Add to cart Custom Event
document.getElementById("AddCart").onclick=function(){

    var cartValue= document.getElementById("AddCartQuantity").value;
    faro.api.pushEvent(
        'CartAdd',
            {
              cartValue: cartValue,
            }
          );
    console.log("sent event for cart with value of "+ cartValue);
    cartQuanity.value=getRandomInt(1,100);//put new value in automatically for convenience.
    }



//Sign in Custom Event 
document.getElementById("SignIn").onclick=function(){

    console.log("sent event for SignIn ");

    faro.api.setUser({
        email: email.value,
        id: Id.value,
        username: username.value,
        attributes: {
          role: 'user',
          customerType: getRadioValue()
        },
      });

      faro.api.pushEvent('SignIn');  
    }









//utility functions

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRadioValue(){
  userTypeValue="";
  for(let i=0;i<radio.length;i++){
    if(radio[i].checked){
        userTypeValue=radio[i].value; 
        return userTypeValue; 
      }
    }
  }



//Cause Error (not working)
  function throwError(){

    throw TypeError("Wrong type found, expected character")
    
  }

  function noObjectError(){

    document.getElementById("missing button").getAttribute;

  }




  const callUndefined = () => {
    // @ts-ignore
    test();
  };

  const fetchError = () => {
    fetch('http://localhost:64999', {
      method: 'POST',
    });
  };

  const promiseReject = () => {
    new Promise((_accept, reject) => {
      reject('This is a rejected promise');
    });
  };

  const pushError = () => {
    faro.api.pushError(new Error('This is a manually generated error'));
  };


