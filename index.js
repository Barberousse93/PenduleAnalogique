let hh = document.querySelector('#hh')
let mm = document.querySelector('#mm')
let ss = document.querySelector('#ss')


setInterval(() => {
    let h = new Date().getHours() * 30
    let m = new Date().getMinutes() * 6
    let s = new Date().getSeconds() * 6

    let hDeg = (h + (m / 12)) + 'deg'
    let mDeg = m + 'deg'
    let sDeg = s + 'deg'

    hh.style.transform = 'rotateZ(' + hDeg + ')'
    mm.style.transform = 'rotateZ(' + mDeg + ')'
    ss.style.transform = 'rotateZ(' + sDeg + ')'
}, 900);