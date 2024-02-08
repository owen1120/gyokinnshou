document.getElementById('togglemenu').addEventListener('click', function() {
    document.getElementById('full-screen-nav').style.display = 'flex';
    document.body.classList.add('no-scroll');
});

document.getElementById('closemenu').addEventListener('click', function() {
    document.getElementById('full-screen-nav').style.display = 'none';
    document.body.classList.remove('no-scroll');
});
