
// function onScrollLoad(element) {
//     function isVisble(elem) {
//         let coords = elem.getBoundingClientRect();
//         let windowHeight = document.documentElement.clientHeight;
//         let topVisible = coords.top > 0 && coords.top < windowHeight;
//         let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
//         return topVisible || bottomVisible;
//     }
//     function showVisible(el) {
//         if(isVisble(el)) { 
//         for(let img of el.querySelectorAll('img')) {
//             let realSrc = img.dataset.src;
//             if(!realSrc || img.dataset.checked == 'true') continue;
//                 img.src = realSrc; 
//                 img.dataset.checked = 'true';
//                 img.onload = () => {
//                     img.style.height = 'auto', 
//                     img.dataset.src = ''
//                 }
//             }
//         }
//     }
//     let otherImages = element.children;
//     for(let other of otherImages) {
//         window.addEventListener('scroll', () => showVisible(other));
//     }
// }
// export default onScrollLoad;