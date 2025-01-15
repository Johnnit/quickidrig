window.onscroll = () => {
  document.querySelector('.up').style.display = 'block';
}
document.querySelector('header .span').onclick = ()=>{
  location.href = '#contact';
}

document.querySelector('.up').onclick=()=>{
  location.href='#top';
}

function fake(){
  location.href='./fake.html';
}

let gender = document.querySelector('#gender');
let contry = document.querySelector('#country');
let age = document.querySelector('#age');
let mailArray = ["gmail", 'outlook', 'yahoo'];
let shufMail= Math.floor(Math.random()*mailArray.length);
document.querySelector('#check').onclick = (e)=>{
  e.preventDefault();
  
  
fetch(`https://randomuser.me/api/?nat=${contry.value}&gender=${gender.value}`)
.then((res)=> res.json())
.then((data)=>{
  console.log(data);
  let name = data.results[0].name.first + ' ' + data.results[0].name.last;
  let title = data.results[0].name.title;
  let email = data.results[0].email;
  let mail = email.replace('example', 'gmail');
  let gender = data.results[0].gender;
  let phone = data.results[0].phone;
  let nation = data.results[0].nat;
  let age =  data.results[0].dob.age;
  let dob = data.results[0].dob.date.slice(0,10);
  let pics = data.results[0].picture.large;
  let country = data.results[0].location.country;
  let zip = data.results[0].location.postcode;
  let state = data.results[0].location.state;
  let city = data.results[0].location.city;
  let geo = data.results[0].location.coordinates.latitude + ', ' + data.results[0].location.coordinates.longitude;
 let sname = data.results[0].location.street.name;
 let snum = data.results[0].location.street.number;
 let ssn;
 let ssnval;
 if (data.results[0].id.name !== ' ' && data.results[0].id.value !== null) {
  ssn = data.results[0].id.name;
ssnval = data.results[0].id.value;
}
else {
  ssnval = 'No SSN in this region';
  ssn ='SSN'
}
 let tmz = data.results[0].location.timezone.description;
 let tmzoff = data.results[0].location.timezone.offset;
 
  document.querySelector('.details').innerHTML = `
     <div class="profile">
     <img src="${pics}" alt="image" id="image">
     <div class="idList">
       <b>Name: </b>
       <span class="name">${name}</span>
     </div>
   </div>
   
   <div class="idDetail">
     
     <div class="idList">
  <b>Title: </b>
  <span class="title">${title}</span>
</div>

     <div class="idList">
  <b>Gender: </b>
  <span class="sex">${gender}</span>
</div>
<div class="idList">
  <b>Email address: </b>
  <span class="mail">${mail}</span>
</div>

<div class="idList">
  <b>Age: </b>
  <span class="age">${age}</span>
</div>
<div class="idList">
  <b>Birthday: </b>
  <span class="dob">${dob}</span>
</div>
<div class="idList">
  <b>Nationality: </b>
  <span class="country">${country}</span>
</div>
<div class="idList">
  <b>${ssn}: </b>
  <span class="ssn">${ssnval}</span>
</div>

<div class="idList">
  <b>City, State, ZIP: </b>
  <span class="city">${city}, ${state}, ${zip}</span>
</div>
<div class="idList">
  <b>Phone number: </b>
  <span class="fone">${phone}</span>
</div>
<div class="idList">
  <b>Location: </b>
  <span class="adrs">${snum}, ${sname}, ${city}, ${state} state.</span>
</div>
<div class="idList">
  <b>Geo coordinate: </b>
  <span class="adrs">${geo}</span>
</div>

  `;
  location.href='#detailWrap';
  document.querySelector('.detailWrap').style.top = '300px';
})
.catch(err=>{
  console.log(err);
})

}