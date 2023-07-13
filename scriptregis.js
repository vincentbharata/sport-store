const form = document.getElementById("myform")
const errorMessage = document.getElementById("errorMessage")

function handleSubmit(e){
    const formData = new FormData(form)

    const fullname = formData.get('FNinput')

    var phone = formData.get('phoneNum')
    var number = /^[0-9]+$/
    
    const email = formData.get('email')
    const at = email.indexOf("@")
    const dot = email.lastIndexOf(".")


    const gender = formData.get('Gender')
    const age = formData.get('ageNum')
    const provincy = formData.get('SelPro')
    const address = formData.get('AdLoc')
    const post = formData.get('PosNum')
    const notes = formData.get('AddNotes')
    const agree = formData.get('agree')
    let error = []

    //untuk validasi
    if(!fullname){
        error.push("Name must be filled first!")
    }else if(fullname.length < 4){
        error.push("Sorry, your name is too short")
    }else if(!phone){
        error.push("Please insert your phone!")
    }else if(!phone.match(number)){
        error.push("Please input only number!")
    }else if(phone.length < 10 || phone.length > 12){
        error.push("Phone number must be 10 or 12 digits!")
    }else if(!email){
        error.push("You have to fill the email address!")
    }else if(at<1 || dot<at+2 || dot+2>=email.length){
        error.push("Email is not valid!")
    }else if(!gender){
        error.push("Select your gender!")
    }else if(!age.match(number)){ 
        error.push("Age must be filled with number")
    }else if(!address){
        error.push("Please input your address!")
    }else if(address.length < 21){
        error.push("Address cannot be that short!")
    }else if(!post){
        error.push("Postal code must be filled!")
    }else if(!post.match(number) || post.length != 5){
        error.push("Postal code should be 5 digits of number!")
    }else if(agree != "ok"){
        error.push("You have to checklist the terms and conditions!")
    }

    if(error.length > 0){
        alert(error.join("\n"))
        e.preventDefault()
    }else{
        if(!confirm("The datas cannot be changed after you submit. Do you want to continue?")){
            e.preventDefault()
        }
    }

}

form.addEventListener('submit',handleSubmit)