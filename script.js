const api=()=>{
    const apiKey='1deb773b0094302280faf1eed6caa010'
    const inputVal=document.getElementById('inputdata').value;
    
    console.log(inputdata);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    //console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayWeatherData(data))
}

const submitButton=document.getElementById('submit')
submitButton.addEventListener('click',function(){
    api();
})
const displayWeatherData=(data)=>{
    const iconValue=data.weather[0].icon;
    console.log(typeof icon);
    const url=`http://openweathermap.org/img/wn/${iconValue}@2x.png`;
    console.log(url);
    const div=document.createElement('div');
    div.innerHTML=`<h1>country: ${data.sys.country}</h1>
    <h1>temperature:${data.main.temp}</h1>
    <h1>time:${(data.timezone)/60}</h1>
    <h1>${data.weather[0].description}   <img src="${url}"></h1>
   
    `;
    document.getElementById('box').appendChild(div);


}