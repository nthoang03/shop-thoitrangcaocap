const header=document.quaryselector("herder");

window.addEventListener("scroll",function(){
	header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.queryselector('.navmenu');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navmenu.classList.toggle('open');
}