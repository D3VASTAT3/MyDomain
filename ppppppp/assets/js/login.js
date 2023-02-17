const url = "https://oyfuerrpagolgokoemnj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95ZnVlcnJwYWdvbGdva29lbW5qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NjIwMTEzMiwiZXhwIjoxOTkxNzc3MTMyfQ.jXQkLF6NsIlYy0vj2f7DCWYyyXmWkHDDlcx7SIUpYcQ";
const database = supabase.createClient(url,key);

const form = document.querySelector('form');

const login = document.querySelector('#login');
const signup = document.querySelector('#signup');

login.addEventListener('click', async e => {
    e.preventDefault();

    if(checkform(form)){
        const email = form.email.value;
        const password = form.password.value;

        
        let { data, error } = await database.auth.signInWithPassword({
            email: email,
            password: password
        });

        console.log(data,error);
        
        if(error){
            alert('Wrong credentials!');
        }
        
        if(data.session.user.email === email){
            alert('welcome!');
            window.location.replace("https://youtu.be/dQw4w9WgXcQ");
        }
        
    }
    
    
        
});



function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
        }
    }
    return true;
}

