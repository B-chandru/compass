var h3=document.querySelector("h3");
var long=document.getElementById("longitude")
var direction =document.querySelector("#direction");

  navigator.geolocation.watchPosition((data)=>{
   h3.innerText = data.coords.latitude;
   long.innerText= data.coords.longitude;
   direction.style.transform=`rotate(${data.coords.heading}deg)`;
  },(err)=>{
      console.error(err);
      alert("allow this app to access your location !");
  });
setTimeout(() => {
  location.reload();
}, 10000);
