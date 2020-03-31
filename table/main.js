var db=
[
    {Firstname:"duong",Lastname:"phuong",Email:"12345@gmail.com"},
    {Firstname:"ngo",Lastname:"thang",Email:"abcxyz@gmail.com"},
    {Firstname:"nguyen",Lastname:"lan",Email:"abcxyz@gmail.com"}

];


let table = document.querySelector('tbody');
let th = document.querySelector('th')

let data;


function fill(list)
 {
    table.innerHTML = list
      .map(
        ({ Firstname, Lastname, Email }) =>
          `<tr><td>${Firstname}</td><td>${Lastname}</td><td>${Email}</td></tr>`
      ).join("");
  }
  fill(db);


(function loaData(){
  var abc = new XMLHttpRequest();
  abc.onreadystatechange = function()
  {
    if(this.readyState == 4 && this.status ==200)
    {
      db=JSON.parse(this.responseText).data;
      fill(db)
    }
  };
  abc.open("GET","https://reqres.in/api/users",true);
  abc.send();
})



    
let inputFilter =document.getElementById('search-input')


inputFilter.onkeyup = function()
{
  var value = inputFilter.value;
  var data = searchTable(value,db);
  fill(data);  
}





function searchTable(value,data)
{
  var filterData = [];
  for (let i=0;i<data.length;i++)
  {
    value = value.toLowerCase();
    var name =data[i].Firstname.toLowerCase();
    if(name.includes(value))
    {
      filterData.push(data[i]);
    }
  }
  return filterData;
}


let sort = document.querySelectorAll('th');

sort.forEach((e)=>e.onclick =sortTable);

function sortTable()
{
  var column = this.dataset.column;
  let text = this.innerHTML;
  text =text.substring(0,text.length - 1);
  if(this.dataset.order == 'abc')
  {
    this.dataset.order='xyz';
    db = db.sort((a,b)=> a[column]>b[column] ? 1 : -1);
    text+='&#9660'
  }
  else
  {
    this.dataset.order='abc';
    db = db.sort((a,b)=>a[column]<b[column]?1 :-1);
    text+='&#9650'
  }

  this.innerHTML =text;
  fill(db); 
}



