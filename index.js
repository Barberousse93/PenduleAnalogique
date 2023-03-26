let hh = document.querySelector('#hh')
let mm = document.querySelector('#mm')
let ss = document.querySelector('#ss')
let hhD = document.querySelector('.hhD')
let mmD = document.querySelector('.mmD')
let ssD = document.querySelector('.ssD')
let jour = document.querySelector('.jour')
let dateN = document.querySelector('.dateN')
let mois = document.querySelector('.mois')
let annee = document.querySelector('.annee')


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
})

// Bouton checbox
const bouton = document.querySelector('#chkbx')
const digital = document.querySelector('.digital')
const calendrier = document.querySelector('.calendrier')

bouton.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        digital.classList.remove('visible')
        calendrier.classList.add('visible')
        updateCalendar()
    } else {
        digital.classList.add('visible')
        calendrier.classList.remove('visible')
    }
})

function updateCalendar() {
    // ---- jour ----
    day = new Date().getDay()
    switch (day) {
        case 0:
            day = 'Dimanche'
            break;
        case 1:
            day = 'Lundi'
            break;
        case 2:
            day = 'Mardi'
            break;
        case 3:
            day = 'Mercredi'
            break;
        case 4:
            day = 'Jeudi'
            break;
        case 5:
            day = 'Vendredi'
            break;
        case 6:
            day = 'Samedi'
            break;
    }
    jour.innerHTML = day

    // ---- date ----
    date = new Date().getDate()
    dateN.innerHTML = date

    // ---- mois ----
    month = new Date().getMonth()
    switch (month) {
        case 0:
            month = 'janvier'
            break;
        case 1:
            month = 'février'
            break;
        case 2:
            month = 'mars'
            break;
        case 3:
            month = 'avril'
            break;
        case 4:
            month = 'mai'
            break;
        case 5:
            month = 'juin'
            break;
        case 6:
            month = 'juillet'
            break;
        case 7:
            month = 'août'
            break;
        case 8:
            month = 'septembre'
            break;
        case 9:
            month = 'octobre'
            break;
        case 10:
            month = 'novembre'
            break;
        case 11:
            month = 'décembre'
            break;
    }
    mois.innerHTML = month

    // ---- année ----
    year = new Date().getFullYear()
    annee.innerHTML = year
}