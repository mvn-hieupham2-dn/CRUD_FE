
fetchDataUSer()

function fetchDataUSer(){
    let name_edit = document.getElementById('name_edit')
    let email_edit = document.getElementById('email_edit')
    let phone_edit = document.getElementById('phone_edit')
    let age_edit = document.getElementById('age_edit')
    let country_edit = document.getElementById('country_edit')
    let dataDetailUser= JSON.parse(localStorage.getItem('editUser'));
    name_edit.value = dataDetailUser.name
    email_edit.value = dataDetailUser.email
    phone_edit.value = dataDetailUser.phone
    age_edit.value = dataDetailUser.age
    country_edit.value = dataDetailUser.country
}
function handleEdit(){
    let dataDetailUser= JSON.parse(localStorage.getItem('editUser'));
    console.log("check dataDetailUser",dataDetailUser.idUser);
    let arr=JSON.parse(localStorage.getItem('crud'));
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].idUser == dataDetailUser.idUser){
        arr[i].name = name_edit.value
        arr[i].email = email_edit.value
        arr[i].phone = phone_edit.value
        arr[i].age = age_edit.value
        arr[i].country = country_edit.value

       }
        
    }
    arr= setCrudData(arr)


}
function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}