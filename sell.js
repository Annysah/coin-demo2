const select = document.querySelectorAll("#Currency");
const input = document.querySelectorAll("input");

const API_URL = "https://api.coingecko.com/api/v3/exchange_rates";

let htmlString = "";

async function cryptocurrency() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    //console.log(rate);

    arrKeys.map(item=> {
        return htmlString += `<option value=${item}>${item}</option>`;
    })
    
    for(let i=0; i<select.length; i++){
        select[i].innerHTML = htmlString;
    };
    //console.log(rates[select[1].value].value);

    function convert(i,j) {
        input[i].value = input[j].value * rates[select[i].value].value / rates[select[j].value].value;
    }

    input[0].addEventListener('keyup', ()=> convert(1,0));

    input[1].addEventListener('keyup', ()=> convert(0,1));

    select[0].addEventListener('change', ()=> convert(1,0));

    select[1].addEventListener('change', ()=> convert(0,1));
};

cryptocurrency();
