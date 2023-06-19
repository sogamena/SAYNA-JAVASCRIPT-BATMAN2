var slider_video = document.querySelector('.bande_annonce');
var videos = ['bande_annonce1.mp4','bande_annonce2.mp4','bande_annonce3.mp4'];
var i = 0;


function setVideo(){
    return slider_video.setAttribute('src','../video/' + videos[i]);
}
function precedent(){
    if (i<=0) i = videos.length;
        i--;
    return setVideo();
}

function suivant(){
    if (i>= videos.length) i= -1;
        i++;
    return setVideo();
}

document.querySelector("#show").addEventListener("click", function(){
    document.querySelector("#confirme").classList.add("active");
})

document.querySelector("#confirme .btn-fermer").addEventListener("click", function(){
    document.querySelector("#confirme").classList.remove("active");
})