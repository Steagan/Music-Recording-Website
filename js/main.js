function initMap() {
    const loc = { lat :51.507351, lng:-0.127758 };
    const map = new google.maps.Map(document.querySelector('.map'),{
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map});
}

$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top-80
        },
        800
        );
    }
});