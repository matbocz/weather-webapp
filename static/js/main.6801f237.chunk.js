(this["webpackJsonpweather-webapp"]=this["webpackJsonpweather-webapp"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a.n(i),s=(a(13),a(14),a(15),a(3)),l=a(4),o=a(7),m=a(6),u=a(5),p=a.n(u),h=function(e){return r.a.createElement("form",{onSubmit:e.submit,className:"form-row mt-4"},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"inputCity",className:"form-control",placeholder:"Enter a city",type:"text",value:e.inputValue,onChange:e.change,"aria-describedby":"helpCity"}),r.a.createElement("small",{id:"helpCity",className:"form-text text-muted"},"Please enter a valid city name"))),r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"btn btn-primary w-100"},r.a.createElement("img",{src:p.a,alt:"Search"}))))},d=function(e){var t=e.weather,a=t.error,n=t.city,i=t.description,c=t.temp,s=t.pressure,l=t.humidity,o=t.sunrise,m=t.sunset,u=t.wind,p=t.icon,h=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card text-center mt-2"},r.a.createElement("h5",{className:"card-header"},"City not found"))),d=null;if(!a&&n){var g="http://openweathermap.org/img/wn/"+p+"@2x.png",E=new Date(1e3*o).toLocaleTimeString("en-US"),f=new Date(1e3*m).toLocaleTimeString("en-US");d=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card text-center mt-2"},r.a.createElement("h5",{className:"card-header"},"Weather in ",n),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},i[0].toUpperCase()+i.slice(1)),r.a.createElement("img",{src:g,alt:"Weather icon"})),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"Temperature: ",Math.round(c)," \xb0C"),r.a.createElement("li",{className:"list-group-item"},"Pressure: ",s," hpa"),r.a.createElement("li",{className:"list-group-item"},"Humidity: ",l," %"),r.a.createElement("li",{className:"list-group-item"},"Wind: ",u," m/s"),r.a.createElement("li",{className:"list-group-item"},"Sunrise: ",E),r.a.createElement("li",{className:"list-group-item"},"Sunset: ",f))))}return r.a.createElement(r.a.Fragment,null,a?h:d)},g="0ad8cfe8f31c124b14fb76eb2da3c25e",E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",error:!1,city:"",description:"",temp:"",pressure:"",humidity:"",sunrise:"",sunset:"",wind:"",icon:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a="http://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.inputValue,"&appid=").concat(g,"&units=metric");fetch(a).then((function(e){if(console.log(e),e.ok)return e;throw Error("Response error")})).then((function(e){return e.json()})).then((function(t){e.setState({error:!1,city:e.state.inputValue,description:t.weather[0].description,temp:t.main.temp,pressure:t.main.pressure,humidity:t.main.humidity,sunrise:t.sys.sunrise,sunset:t.sys.sunset,wind:t.wind.speed,icon:t.weather[0].icon})})).catch((function(t){console.log(t),e.setState({error:!0,city:e.state.inputValue})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{inputValue:this.state.inputValue,change:this.handleChange,submit:this.handleSubmit}),r.a.createElement(d,{weather:this.state}))}}]),a}(n.Component);var f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement("footer",{className:"fixed-bottom"},r.a.createElement("div",{className:"text-center py-4 bg-primary text-white"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"https://github.com/matbocz",className:"text-white"}," ","Mateusz Boczarski"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a.p+"static/media/search.5db892d8.svg"},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.6801f237.chunk.js.map