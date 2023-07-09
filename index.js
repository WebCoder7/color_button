
let btn = document.querySelector(`button`)
let body = document.querySelector(`body`)

btn.onclick = () => {
    let random = Math.floor(Math.random() * 250)
    let random2 = Math.floor(Math.random() * 250)
    let random3 = Math.floor(Math.random() * 250)
    body.style.background = `rgba(${random}, ${random2}, ${random3},1)`
    btn.style.background = "#f"+random
}





