const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONOE WITH REQUEST!!!")
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("ERROR!!!")
    console.log(this.responseText);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();