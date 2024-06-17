function bgm(btn) {
    let playlistId = 'PLqBWcx7bWEcEdGFj6_kYjMchla4Q5tn1b'; // 재생목록 고유 id
    let src = 'https://www.youtube.com/embed?listType=playlist&list='+playlistId+'&autoplay=1&disablekb=1&loop=1&playsinline=1&rel=0&origin='+playlistId;
    let newEle = document.createElement("iframe");
    newEle.setAttribute("id","youtube");
    newEle.setAttribute("src",src);
    newEle.setAttribute("allow","autoplay; encrypted-media");
    let parent = document.getElementById('bgm');
    let status = document.getElementById('bgmStatus');

    if(btn == 'play') {
        parent.appendChild(newEle);
        status.setAttribute("value","play");
    } else {
        document.getElementById('youtube').remove();
        status.setAttribute("value","stop");
    }
};