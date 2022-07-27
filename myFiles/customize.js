
let paragraphs = state.newsBody.split(/\n/g);

let postBody = document.getElementsByClassName('post-body')[0];
let ids = 0;
for(let p of paragraphs) {
    if(p.match(/^<a/) || p.match(/^<b/)) {
        postBody.innerHTML += `<p id="paragraph-${ids++}">${p}</p>`;
    }
    else if(p.match(/^\W$/)) {
		continue;
    }else if(p.match(/^\s+/)) {
        postBody.innerHTML += `<p id="paragraph-${ids++}">${p}</p>`;
    }
}

function createEl(element, prop={}) {
	let el = document.createElement(element);
    for(let key of Object.keys(prop)) {
		if(key == "class" || key == "name") {
			(Array.isArray(prop[key]))? el.setAttribute(key, prop[key].join(' ')): el.setAttribute(key, prop[key]);
		}else {
			el[key] = prop[key];
		}
	}
	return el;
}
function generateImages() {
	let i=0;
	while(i<Object.keys(this).length) {
		let section = document.createElement('section');
		let div1 = createEl('div', {class: ['other-images']});
		for(let key of Object.keys(this[i])) {
			if(key == 'insertAt') break;
			let imageCred = this[i][key].credit;
			let imageSrc = this[i][key].src;
			let alt = this[i][key].alt;
			let div2 = createEl('div', {innerHTML: `<img data-src="${imageSrc}" alt="${alt}">`});
			let iTag = createEl('i', {innerHTML: imageCred});
			if(!imageCred.trim() == '' || imageCred.trim().length > 15) div2.appendChild(iTag);
			div1.appendChild(div2);
		}
		section.appendChild(div1);
		document.getElementById(this[i].insertAt).insertAdjacentElement("afterend", section);
		i++;
	}
}
generateImages.call(state.otherImages);
let root = document.getElementById('paragraph-4') || document.getElementById('paragraph-3');
root.insertAdjacentHTML("afterend", `<div class="read-also" id="read-also">
<b>READ ALSO: </b>
<a href="#">${state.readalso.innerText}</a>
</div>`);
let elem = document.getElementById('read-more');
let elem2 = document.getElementById('also-like');
let otherImages = document.getElementsByClassName('other-images');

function isVisble(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
}
function showVisible(element) {
	if(isVisble(element)){ 
    for(let img of element.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if(!realSrc || img.dataset.checked == 'true') continue;
            img.src = realSrc; 
            img.dataset.checked = 'true';
            img.onload = () => {
                img.style.height = 'auto', 
                img.dataset.src = ''
            }
        }
    }
}
for(let other of otherImages) {
	window.addEventListener('scroll', () => showVisible(other));
}
window.addEventListener("scroll", () => showVisible(elem));
window.addEventListener("scroll", () => showVisible(elem2));