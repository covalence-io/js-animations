(function () {
    const block = document.getElementById('block');

    if (!block) {
        console.log('No block found :(');
        return;
    }

    animate(1);

    function animate(i) {
        if (i/5 > 50) {
            i = 0;
        }

        requestAnimationFrame(function () {
            block.style.left = `${i/5}%`;
            animate(++i);
        });
    }
})();