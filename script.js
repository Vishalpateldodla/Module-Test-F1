function submitForm(){
    let text = document.getElementById('text').value;
    let email = document.getElementById('email').value;
    console.log(text, email, para)
    if(text!=null && email!=null){
        alert("form submitted successfully!")
    }
    else{
        alert("All the fiels requried")
    }
    
}