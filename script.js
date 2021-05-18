var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response)
    for (var i in data)
    {
        var name = data[i].name;
        var lang = data[i].latlng;
        console.log(name+" "+lang);
        weatherdata(name ,...lang);
    }
}

var weatherdata=function(name,lat,long){
    console.log
    var request = new XMLHttpRequest();
    url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=d884b0ad9862edede95cea02c1571661'
    request.open('GET',url,true)
    request.send();
    request.onload = function(){
        var data = JSON.parse(this.response)
        console.log(`${name} :${data.main.temp} `)


    }
}   


