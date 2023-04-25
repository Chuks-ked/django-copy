console.log('hello')

const copyBtns = [...document.getElementsByClassName('copy-btn')]

let previous = null

copyBtns.forEach(btn=> btn.addEventListener('click', ()=>{
    const color = btn.getAttribute('data-hex')
    navigator.clipboard.writeText(color)
    btn.textContent = 'copied'

    navigator.clipboard.readText().then(clipText=>{
        console.log(clipText)
        btn.textContent = `copied ${clipText}`
    })

    if(previous){
        previous.textContent= 'click'
    }
    previous = btn
}))