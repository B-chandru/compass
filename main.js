var h3=document.querySelector("h3");
var direction =document.querySelector("#direction");

  navigator.geolocation.watchPosition((data)=>{
   h3.innerText = data.coords.speed;
   direction.style.transform=`rotate(${data.coords.heading}deg)`;
  },(err)=>{
      console.error(err);
      alert("allow this webapp to use your location , then only we can show you the direction:) ");
  });
