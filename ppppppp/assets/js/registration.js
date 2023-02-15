const url = "https://oyfuerrpagolgokoemnj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95ZnVlcnJwYWdvbGdva29lbW5qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NjIwMTEzMiwiZXhwIjoxOTkxNzc3MTMyfQ.jXQkLF6NsIlYy0vj2f7DCWYyyXmWkHDDlcx7SIUpYcQ";
const database = supabase.createClient(url,key);

const signup = document.querySelector("#signup");
const form = document.querySelector('form');

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

signup.addEventListener('click', async e => {
    e.preventDefault();

    if(checkform(form)){
        const username = form.username.value;
        const password = form.password.value;
        const email = form.email.value;
        const contactno = form.contactno.value;
        let success = false;

        form.reset();
        signup.innerText = 'Creating...';
        // const res = await database
        //     .from('user')
        //     .insert({
        //         username: username,
        //         password: password,
        //         email: email,
        //         contactno: contactno
        //     })
    
        
        const { data, error } = await database.auth.signUp({
            email: email,
            password: password
        })
  
        // console.log(res);
        signup.innerText = "Done!"
        const alerter = setInterval(() => {
            signup.innerText = "Sign Up"
        }, 5000);
    }

});
