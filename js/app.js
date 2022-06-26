function search_bar() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let images = document.getElementsByClassName('image');

    for (i = 0; i < images.length; i++) {
        let image_title = images[i].getAttribute("title").toLowerCase();

        if (!image_title.includes(input)) {
            images[i].style.display="none";
        } else {
            images[i].style.display="";
        }

    }
}




