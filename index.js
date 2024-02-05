function showInput(){
    document.querySelector('input').style.display = "block";
}
const toggle = document.getElementById('toggle');
toggle.onclick()= function(){
    toggle.classList.toggle('active')
}