const playVideo = (filename, idVideo, divVideo, frameVideo) => {
    // https://www.youtube.com/watch?v=5lCRsLjMeso => fileName = 5lCRsLjMeso
    document.getElementById(idVideo).style.display = 'none';
    document.getElementById(divVideo).style.display = 'block';
    document.getElementById(frameVideo).src = "https://www.youtube.com/embed/" + filename;
};
