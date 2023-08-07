var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");

var signEmailInput = document.getElementById("signEmail");
var signPassInput = document.getElementById("signPass");

var users ; 
if(localStorage.getItem("usList")==null){
    var users=[];
}
else{
    users = JSON.parse(localStorage.getItem("usList"));
}
function addUser(){
    if(!checkIsEmpty()){
        if(exist()){
            displayExist();
        }
        else{
        var user = {
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value,
        }
        users.push(user);
        localStorage.setItem("usList",JSON.stringify(users));
        displaySucess()
        
    }
        
    }
    else{
        displayRequired();
    }
   
   
};
function  welcome(){
   // document.getElementById("welcome").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("userName", JSON.stringify(userName)))}`
   document.getElementById("welcome").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("urList"))}`;



}

function exist(){
    for(var i=0;i<users.length;i++){
        if(users[i].email==userEmailInput.value ){
            return true; 
        }
    }
    return false;
}
function existLogin(){
for(var i=0;i<users.length;i++){
    if(users[i].email==signEmailInput.value && users[i].password==signPassInput.value){
        var name=users[i].name;
        localStorage.setItem("urList",JSON.stringify(name));
        location.replace("home.html");
        
        
       return true;
    }
}
};
function searchUser(){
    if(checkIsEmptySign()){
       displayRequiredSign();

    }
   else{
        if( existLogin()){

       }
       else{
           displayIncorrect();
       }
        
    }

};
function clearForm(){
   userNameInput.value="";
   userEmailInput.value="";
   userPasswordInput.value="";
  
};

function checkIsEmpty(){
    if(userNameInput.value!="" && userPasswordInput.value !="" && userEmailInput.value !=""){
        return false;
    }
    else{
        return true;
    }
}
function checkIsEmptySign(){
    if(signEmailInput.value =="" || signPassInput.value =="" ){
        return true;
    }
    else{
        return false;
    }
}





function displayRequired(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};
function displayExist(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>email already exists</span>`;

};
function displayIncorrect(){
    document.getElementById("sign").innerHTML=`<span class=' text-danger'>incorrect email or password</span>`;
};
function displayRequiredSign(){
    document.getElementById("sign").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};
function displaySucess(){
    document.getElementById("required").innerHTML=`<span class=' text-success'>Success</span>`;
};
