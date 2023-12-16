'use strict';


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const countryInfo = function(){

const request = new XMLHttpRequest();
request.open("Get", `https://restcountries.com/v3.1/name/${countryName}`);
request.send();

request.addEventListener("load", function(){

      const [countryData] = JSON.parse(this.responseText);
      console.log(countryData);

      const [currency, ...rest] = (Object.entries(countryData.currencies)[0])
      
      const html = `
      <article class="country">
          <img class="country__img" src="${countryData.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${countryData.name.common}</h3>
            <h4 class="country__region">${(Object.entries(countryData.languages)[0])[1]}</h4>
            <p class="country__row"><span>👫</span>${countryData.population}</p>
            <p class="country__row"><span>🗣️</span>${(Object.entries(countryData.languages)[0])[1]}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>
        `
       countriesContainer.insertAdjacentHTML("beforeend", html);
})
}
let countryName;
btn.addEventListener("click", function(e){
      e.preventDefault();
      countryName = prompt("Enter the country name.");
      countryInfo(countryName);

})
