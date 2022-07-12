// crud 
selectData()
function validAndCreat(){
    let msg = document.getElementById('msg'); 
    msg.innerHTML = ''
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let age = document.getElementById('age').value
    let country = document.getElementById('country').value
    let idUser = Math.floor(Math.random() * 10);
    console.log("check id",idUser);
    let users = {name,email,phone,age,country,idUser}
    console.log("check user",users);
    if(users.name ==''){
        msg.innerHTML ='Pls enter your info'
    }
    else if(users.email ==''){
        msg.innerHTML ='Pls enter your email'
    }
    else if(users.phone ==''){
        msg.innerHTML ='Pls enter your phone'
    }
    else if(users.age ==''){
        msg.innerHTML ='Pls enter your age'
    }
    else if(users.country ==''){
        msg.innerHTML ='Pls enter your country'
    }
    else{
			let arr=getCrudData();
			if(arr==null){
				let data=[users];
				setCrudData(data);
			}else{
				arr.push(users);
				setCrudData(arr);
			}
			msg.innerHTML='Data added';
        for (const user in users) {
          document.getElementById(`${user}`).value = ''
        }
		selectData();
    }
}
function selectData(user){
	let arr=getCrudData();
	if(arr!=null){
        let tbody = document.querySelector('.table_list-user > tbody')
         tbody.innerHTML = arr
            .map((item,index) => {
                return `
                <tr id='show_result'>
                    <td class='list_item'><h5>${item.name}</h5></td>
                    <td class='list_item'><h5>${item.email}</h5></td>
                    <td class='list_item'><h5>${item.age}</h5></td>
                    <td class='list_item'><h5>${item.phone}</h5></td>
                    <td class='list_item'><h5>${item.country}</h5></td>
                    <td class='list_item'><a  class="btn btn_edit" onclick="editData(${index})">Edit</a>
                   <button class="btn btn-delete" onclick="deleteData(${index})">Delete</button></td>
                </tr>`;
            })
            .join("")
	}
    if(user){
        let tbody = document.querySelector('.table_list-user > tbody')
        tbody.innerHTML = user
           .map((item,index) => {
               return `
               <tr id='show_result'>
                   <td class='list_item'><h5>${item.name}</h5></td>
                   <td class='list_item'><h5>${item.email}</h5></td>
                   <td class='list_item'><h5>${item.age}</h5></td>
                   <td class='list_item'><h5>${item.phone}</h5></td>
                   <td class='list_item'><h5>${item.country}</h5></td>
                   <td class='list_item'><a href='edit.html' class="btn btn_edit" onclick="editData(${index})">Edit</a>
                  <button class="btn btn-delete" onclick="deleteData(${index})">Delete</button></td>
               </tr>`;
           })
           .join("")
    }
}
function editData(id){
    console.log("check id",id);
	let arr=getCrudData();
    let arrDetail = arr[id]
    localStorage.setItem('editUser',JSON.stringify(arrDetail));
    // let ab = document.getElementById('name_edit').innerHTML = name
    // console.log("check a",ab);
    location.href = './edit.html'
}
function deleteData(id){
	let arr=getCrudData();
	arr.splice(id,1);
	setCrudData(arr);
	selectData();
}
function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}
function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}
function search(){
	let arr=getCrudData();
    let value = document.getElementById('search').value
    let userSearch = arr.filter(user => {return user.name.toUpperCase().includes(value.toUpperCase())})
    selectData(userSearch)
}
// panigator
// function panigator(){
// 	let arr=getCrudData();
//     let currentPage = 1
//     let perPage = 2
//     let totalPage = arr.length/2
//     let perUSer = arr.slice((currentPage-1)*perPage,(currentPage-1)*perPage+perPage)
// }
