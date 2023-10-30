const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnpopup=document.querySelector('.btnlogin-popup');
const xMark=document.querySelector('.close-icon')
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
xMark.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
