let hh = document.querySelector('#hh')
let mm = document.querySelector('#mm')
let ss = document.querySelector('#ss')
let hhD = document.querySelector('.hhD')
let mmD = document.querySelector('.mmD')
let ssD = document.querySelector('.ssD')


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

    // Horloge digitale

    let hr = new Date().getHours()
    let mn = new Date().getMinutes()
    let sc = new Date().getSeconds()

    hr = (hr < 10) ? ('0' + hr) : (hr)
    mn = (mn < 10) ? ('0' + mn) : (mn)
    sc = (sc < 10) ? ('0' + sc) : (sc)

    hhD.innerHTML = hr
    mmD.innerHTML = mn
    ssD.innerHTML = sc
});