const ubahBackground = document.getElementById('ubahBackground');

ubahBackground.onclick = () => {
    document.body.style.backgroundColor = 'lightblue';
}

const ubahBackgroundAcak = document.querySelector('#ubahBackgroundRandom');

ubahBackgroundAcak.addEventListener('click', () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

    const kotakMerah = document.querySelector('.merah');
    kotakMerah.style.backgroundColor = 'rgb('+ r +', 0, 0)';
});

sHijau.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

    const kotakHijau = document.querySelector('.hijau');
    kotakHijau.style.backgroundColor = 'rgb(0, '+ g +', 0)';
});

sBiru.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

    const kotakBiru = document.querySelector('.biru');
    kotakBiru.style.backgroundColor = 'rgb(0, 0, '+ b +')';
});