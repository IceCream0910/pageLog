var overlay = document.getElementById('dropdown-overlay')

function displayOverlay() {
    if (overlay.style.opacity === '0') {
        overlay.style.opacity = '1'
    } else {
        overlay.style.opacity = '0'
    }
}

let backgroundData = backgrounds[Math.floor(Math.random() * backgrounds.length)]
document.getElementById('main').style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url('+ backgroundData['url'] + ')'
let footer = '<p class="name"><a href="' + backgroundData['origin']['source'] + '" target="_blank">' + backgroundData['name'] + '</a></p><p class="by"><a href="' + backgroundData['license']['url'] + '" target="_blank">' + backgroundData['author']
if (backgroundData['license']['name'] == '') {
    document.getElementById('footer').innerHTML = footer + '</a></p>'
} else {
    document.getElementById('footer').innerHTML = footer + ' (' + backgroundData['license']['name'] + ')</a></p>'}


var filter = "win16|win32|win64|mac|macintel";
if ( navigator.platform ) {
if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
//모바일 접속
} else {
//pc접속
window.open('','_self').close();
window.open('mobileOnly.html');
}
}
