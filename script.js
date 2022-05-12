const signUp = e => {
    let username = document.getElementById('username').value,
        email = document.getElementById('email').value;
       
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.username.toLowerCase() == username.toLowerCase() 
            // && 
            // data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ username, email});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
   
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('username').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.username.toLowerCase() || data.username.toUpperCase() == email);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/home.html";
    }
    
    // storage();
    e.preventDefault();
    // console.log(JSON.parse(localStorage.setItem(formData)))
}


// function storage() {

//    let {username} =  JSON.parse(localStorage.getItem('formData')).some(data => data.username);
//    var output = document.getElementById('output')
//    output.innerHTML = `
//    <div>Welcome</div>
//    <div>${username}</div>
//    `

// }

function get() {
    
    var storedValue = JSON.parse(localStorage.getItem('formData')) || [];
//    console.log(storedValue.username)
    if (storedValue) {
        document.getElementById('output').innerHTML = localStorage.getItem("username");
    }
}



for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}