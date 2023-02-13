// step -1 : add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function(){
    
    // step 2 : get the email address inside the email input 

    // always remind to use .value to get text from an input 

    const emailField = document.getElementById('user-mail');
    const email = emailField.value;
    
    // step 3 : get password
    // // 3.a set id on the html element
    // 3.b : get the Element 
    // 3.c get the value from the Element
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   

    // danger no dot verify email password on the client side 
    // step 4 : verify email and password 

    if (email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }

    else{
        alert('invalid user');
    }
    
    
    




})