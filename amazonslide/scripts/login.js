document.getElementById('loginForm').onsubmit= function(event) {

event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username==="powmiya" && password==="12345"){
        alert("login sucess");
        //window.locotion.replace("index.html")
    window.location.replace("index.html")
    }
    else if(username=="" || password==""){
        alert("empty");
    }
    else{
        alert("try agin");
    }


};