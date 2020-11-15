"use strict";

const form = document.querySelector('#form')


// console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault()
    let currency = document.querySelector('#currency').value
    let amount = document.querySelector('#amount').value
    if (currency == 'NGN') {
        fetch('https://free.currconv.com/api/v7/convert?q=USD_NGN&compact=ultra&apiKey=b95bc7d326175bbd4ebd')
        .then(response => (response.json()))
        .then(data => {
            let convertedNaira = data.USD_NGN;
            let convertToDollar = amount / convertedNaira
            fetchAmount('USD', convertToDollar)
        })
    } else {
        fetchAmount(currency, amount)
    }
})


const fetchAmount = (currency, val) => {
    fetch('https://blockchain.info/tobtc?currency=' + currency  + '&value=' + val)
    .then(response => response.json())
    .then(data => {
        render(data)
    })
};

const render = dataToRender => {
    let btcNum = document.querySelector('.btc-num')
    console.log(btcNum)
    btcNum.textContent = dataToRender
}
