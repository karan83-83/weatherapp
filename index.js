

const fetchapi=async(search)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=040f55f0051f19a96f9d68c70866b07a`
    let response= await fetch(url);
    let resjson=await response.json();
     console.log(resjson.main);

     let h1=document.querySelector("h1");
     let p=document.querySelector("p");
     let h3=document.querySelector("h3");
     let h4=document.querySelector("h4");
     p.innerText=resjson.weather[0].main;
     h1.innerText=resjson.main.temp+"°C";
     h3.innerText=resjson.name;
     h4.innerText=`Min : ${resjson.main.temp_min} °C | Max : ${resjson.main.temp_max} °C `

}
let box=document.querySelector(".box")
let p=document.createElement("p");
p.innerText="No data found";
box.appendChild(p);

let btn=document.querySelector("i");
btn.addEventListener("click",async ()=>{
    let search=document.querySelector("input").value;
    if(!search){
        
        p.innerText="No data found";
            box.appendChild(p);
        
    }else{
        await fetchapi(search);
        
        box.removeChild(p);
        
        
        
    }

})