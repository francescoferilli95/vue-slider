/**
 * 
 *  SLIDER APP VUE JS
 * 
/**/

const app = new Vue({
    el: '#app',
    data: {
        images: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg',
        ],
        indexImage: 0,
        textImage: 'Landscape Image',
        intervalID: 0,
    },
    created() {
        this.startLoop();
    },
    methods: {
        prevImage() {
            this.indexImage--;

            if(this.indexImage < 0) {
                this.indexImage = this.images.length - 1;
            }
        },
        nextImage() {
            this.indexImage++;

            if(this.indexImage > (this.images.length - 1)) {
                this.indexImage = 0;
            }
        },
        setImage(index) {
            this.indexImage = index;
        },
        startLoop() {
            this.intervalID = setInterval(() => {
                this.nextImage();
            }, 3000);
        },
        stopLoop() {
            clearInterval(this.intervalID);
        },
    },
});