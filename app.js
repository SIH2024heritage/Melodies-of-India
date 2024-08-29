import LocomotiveScroll from 'locomotive-scroll';

const app = () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
   
    });
}



export default app;