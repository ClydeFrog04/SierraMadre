const userpwrd = prompt("Please enter the password: ");
const accessPwrd = "confiscate";

if(userpwrd !== accessPwrd){
    window.location.replace("index.html");
}