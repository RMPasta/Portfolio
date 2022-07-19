let gtt = document.getElementById('gtt');
let mix = document.getElementById('mixedproject');
let gtPreview = document.getElementById('gtpreview');
let mixPreview = document.getElementById('mixpreview');

gtt.style.display = 'none'
mix.style.display = 'none'

gtPreview.onclick = function () {
    gtt.style.display = '';
    gtPreview.style.display = 'none';
}

mixPreview.onclick = function () {
    mix.style.display = '';
    mixPreview.style.display = 'none';
}
