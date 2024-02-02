const sidebarWrapper = document.querySelector('.sidebar__links__wrapper');
const sidebarToggleBtn = document.querySelector('.sidebar__toggle');
const sidebarCloseIcon = document.querySelector('.sidebar__close__icon');

sidebarToggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('active');
});
sidebarCloseIcon.addEventListener('click', () => {
  sidebarWrapper.classList.remove('active');
});