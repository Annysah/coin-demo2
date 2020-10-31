//const apiKey = "ae1ee8aa-9c33-4f88-8571-beffbf3dcb97";

//const api = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", 
//qString="?CMC_PRO_API_KEY=" + apiKey;

function coinPrice() {

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&ids=bitcoin%2C%20ethereum%2C%20tether%2C%20tron%2C%20ripple%2C%20bicoin-cash%2C%20litecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h')
    .then(function (response) {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        if(data.length > 0) {
            let htmlString = "";

            data.forEach((u) => {
                htmlString += "<tr>";
                htmlString += "<td>"+u.market_cap_rank+"</td>";
                htmlString += "<td>"+u.symbol+"</td>";
                htmlString += "<td>"+u.name+"</td>";
                htmlString += "<td>"+"&#x20A6;"+u.current_price+"</td>";
                htmlString += "<td>"+"&#x20A6;"+u.market_cap+"</td>";
                htmlString += "<td>"+u.price_change_percentage_1h_in_currency+"%"+"</td>";
                htmlString += "<td>"+u.price_change_percentage_24h+"%"+"</td>";
            })
            document.getElementById("data").innerHTML = htmlString;
        }
    })
    .catch(function (error) {
        console.log(error);
    })

}

coinPrice();




