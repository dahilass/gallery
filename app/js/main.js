window.onload = function () {
    const e = document.querySelector('.theme-changer');
    setTimeout(() => {
        e.classList.remove('theme-changer_hidden'),
            document.body.classList.add('loaded'),
            Draggable.create('.gallery', {
                bounds: 'body',
                inertia: !0,
                zIndex: 100,
                allowContextMenu: !0,
            });
    }, 200),
        e.addEventListener('click', () => {
            document.body.classList.toggle('invert');
        })
};
