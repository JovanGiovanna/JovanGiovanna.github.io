//array
data = [{
    'img1' : 'download.jpg',
    'img2' : 'mqdefault.jpg Na.js',
    'title' : 'web e commerce',
    'subtitle' : 'zenit',
    'desc' : 'wkoksowkaoskaoskoakws',
}] ,

data = [{
    'img3' : 'download.jpg',
    'img4' : 'mqdefault.jpg Na.js',
    'title' : 'web e commerce',
    'subtitle' : 'zenit',
    'desc' : 'wkoksowkaoskaoskoakws',
}] 

var container = document.querySelector('.container project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src=" `+element.img1+`  " alt="">
        <img src="`+element.img2+`  " alt="">
    </div>

    <div class="desc-project">
        <h1>WEB E_COMMERCE</h1>
        <h2>Zenit</h2>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim nostrum iste doloremque, vero neque rem corrupti labore autem. Beatae, molestiae? Ab aperiam dicta, fugit maiores eius amet consequuntur exercitationem?</h2>
    </div>
<div clas="desc-project">
<h1>${element.title}</h1>
<h2>${element.subtitletitle}</h2>
<p>${element.desc}</p>
</div>
    <button class="read-more">Baca Selengkapnya</button>
    </div>`
});



