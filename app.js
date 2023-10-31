let users=[]
function register(){
    let name = document.getElementById('name')
    let email = document.getElementById("email")

    let tempUser={
        name : name.value,
        email: email.value
    }
    let userEmailCount = users.filter((user)=>{
        return user.email == email.value;
    })

    if (userEmailCount==0){
        users.push(tempUser)
    }
    else{
        alert("User with same email already exists")
    }   
    console.log(users)
}