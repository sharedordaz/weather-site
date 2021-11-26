let images = document.querySelectorAll('.images-grid img');
const config = {
    threshold: 0.8,
    rootMargin: "0px 0px 0px 0px"
}

const load = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src'); };
};

if ('IntersectionObserver' in window) { //check if the browser supports the API
    const observer = new IntersectionObserver((items, observer) => {
        //the function is runned when the intersection happens
        items.forEach((item) => {    
            if (item.isIntersecting) {
                load(item.target);
                observer.unobserve(item.target);
            }
        });
    }, config ); //the parameters of the intersection

    images.forEach((img) => {
        observer.observe(img); //after creating the observer, we "observe"
    });                        //the image in this case
} else {
    images.forEach((img) => {
        load(img);    //if we the browser dont supports the IO API, only
    });               //loads each image
}