ymaps.ready(init);
function init(){
    const myMap = new ymaps.Map('js-map', {
        center: [55.758881, 37.620013],
        zoom: 15,
        controls: []
    });
    const myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.svg',
        iconImageSize: [20, 35]
    });
    myMap.geoObjects.add(myPlacemark); 
};