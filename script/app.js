
const peoples = () =>{
    let avatars = [0,1,2,3].map(item => (
        `<img src="../assets/avatar-${item}.jpg" class="avatar avatar-head" alt="">`
    )).join("")
    let element = document.getElementById("people-avatar")
    element.innerHTML = avatars+`<div class="avatar avatar-head centerJustify centerALign plus"><i class="fa-solid fa-plus"></i></div>`
}
peoples()
