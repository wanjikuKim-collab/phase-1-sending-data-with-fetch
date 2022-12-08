document.addEventListener('DOMContentLoaded',()=>displayUser())

// creates a container to hold the users
function displayUser (){
    let body = document.querySelector('body');    
    body.innerHTML = `
        <form>            
            <h4> Data from DB </h4>
            <label for="name">Name:</label>
            <input type="text" name="name" id="input-name" />
            <label for="name">Email: </label>
            <input type="email" name="name" id="email" />
            <input type="submit" value="create" />
        </form>
        <p id="display"> Display:</p>
        <p id="error"></p>
           `   


    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault();
        submitData()
     

    })
}


//post
const submitData= (name,email)=>{  
    let newUser ={
        name:"Steve",
        email:"steve@steve.com"
    }
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'        
        },
        body:JSON.stringify(newUser)
    })
        .then(response=>response.json())
        .then(data=>{
            let displayId = document.createElement('p')
            displayId.textContent = data.id
            let p = document.querySelector('#display');
            p.appendChild(displayId)         
        })
        .catch(error=>{
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            const message = document.getElementById('error');
            message.appendChild(errorMessage)
            // alert("Request Failed!",error)
            res.end(process.pid.toString());
        } )
        
}
// Use a second then() to access this newly converted object. 
// From this object, find the new id and append this value to the DOM.


