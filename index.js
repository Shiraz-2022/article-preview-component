const shareImage=document.querySelector(".share_image");

shareImage.addEventListener("click",function(){
    document.querySelector(".share_pop_up").classList.toggle("active_share_pop_up");
    document.querySelector(".share").classList.toggle("active_share");
    document.querySelector(".avatar_image").classList.toggle("hidden");
    document.querySelector(".avatar_image").classList.toggle("hidden");
})
