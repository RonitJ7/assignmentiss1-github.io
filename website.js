document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', toggle_mode);
});

function toggle_mode() {
    document.body.classList.toggle('light-mode');
}

function toggle_heart(){
    var toggleLike = document.getElementById('heart');
    document.body.classList.toggle("change-like");
};

let start =0;
document.getElementById("heart").onclick=function(){
    start^=1;
    document.getElementById("like-count").innerHTML=start;
    toggle_heart();
}