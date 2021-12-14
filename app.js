addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if (btn-menu) {
        btn-menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu-items')
            menu-items.classList.toggle('show')
        })
    }
})