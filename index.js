
function fun(){
var object=new XMLHttpRequest();
object.onreadystatechange=function(){
  if(this.readyState==4 && this.status==200){
    var img=document.getElementById("myimg");
    var title=document.getElementById("title");
    var fname=document.getElementById("fname");
      var gender=document.getElementById("gender");
    var lname=document.getElementById("lname");
    var city=document.getElementById("city");
     var state=document.getElementById("state");
    var x=JSON.parse(this.responseText);
    var url=x.results[0].picture.large;
     fname.innerHTML=x.results[0].name.first;
    lname.innerHTML=x.results[0].name.last;
    title.innerHTML=x.results[0].name.title;
    gender.innerHTML=x.results[0].gender;
    city.innerHTML="city-"+x.results[0].location.city;
    state.innerHTML="("+x.results[0].location.state+")";
    img.src=url;
    
    
  }
}
object.open('GET','https://randomuser.me/api',true);
object.send();
}
