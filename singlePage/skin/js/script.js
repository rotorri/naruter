function copy(type) {
    let copyUrl = '';
    let imgSrc = document.getElementById('myBanner').src;
    let domain = window.location.protocol+'//'+window.location.hostname;
    let siteTitle = top.document.title;
    let bannerTag = '<a href="'+domain+'" target="_blank"><img src="'+imgSrc+'" alt="'+siteTitle+'" style="width:100%; height:auto;"></a>';

    if(type == 'img') {
        copyUrl = imgSrc;
    } else if (type == 'url') {
        copyUrl = domain;
    } else {
        copyUrl = bannerTag;
    }

    window.navigator.clipboard.writeText(copyUrl).then(() => {
        alert("클립보드에 복사되었습니다. 원하는 곳에 붙여넣기 하세요.");
    });
}

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