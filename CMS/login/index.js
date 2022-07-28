// document.addEventListener('DOMContentLoaded', () => {

let defaultData = {
    "@context": "",
    "@type": "NewsArticle",
    category: "",
    topic: "",
    authorName: "",
    mainEntityOfPage: {
      "@type": "WebPage",
      url: "/pages/",
    },
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      "@id": "#Publisher",
      name: "Sportsreal Team",
      logo: {
        "@type": "ImageObject",
        "@id": "#Logo",
        url: "",
        width: undefined,
        height: undefined,
      },
    },
    mainImage: "",
    imageCredit: "",
    newsBody: ``,
    alt: "",
    otherImages: {},
    description: "",
    dateline: "London,UK",
    copyrightHolder: {
      "@id": "#Publisher",
    },
    author: {
      "@type": "Person",
      name: "",
    },
    datePublished: "",
    dateModified: "",
    dateCreated: "",
    image: {
      "@type": "ImageObject",
      url: "https://e0.365dm.com/22/03/2048x1152/skysports-chelsea-stamford-bridge_5719152.jpg",
      width: 2048,
      height: 1152,
    },
    url: "",
    readalso: {
      link: "#",
      innerText: "",
    },
    tags: []
  }
let elId = (id) => document.getElementById(id);
let heading = elId('story-heading');
let category = elId('catgry');
let author = elId('author');
let imageCredit = elId('image-credit');
let textarea = elId('post-body');

let tags_arr = [];
let tags_div = elId('tags-div');

let changingElements = [
    { el: "topic", elem: heading }, 
    { el: "category", elem: category }, 
    { el: "authorName", elem: author }, 
    { el: "imageCredit", elem: imageCredit },
    { el: "newsBody", elem: textarea }
];
if(!localStorage.getItem('newPost')) {
    localStorage.setItem('newPost', JSON.stringify(defaultData))
}else {
    let newPost = JSON.parse(localStorage.getItem('newPost'));
    changingElements.forEach(e => e.elem.value = newPost[e.el]);
    tags_arr = newPost.tags;
    tags_arr.forEach(tag => {
        let a = document.createElement('a');
        a.innerText = tag;
        tags_div.appendChild(a);
    })
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
function valChange(element, key) {
    let val = element.value;
    let newP = JSON.parse(localStorage.getItem('newPost'));
    newP[key] = val;
    localStorage.setItem('newPost', JSON.stringify(newP));
}
try {
    changingElements.forEach(key => key.elem.addEventListener('blur', function (e){valChange.call(this, e.target, key.el)}));
}catch (err) {}

let help = elId('help');
let helpModal = elId('help-modal');
let addImgdiv = elId('images');
let otherImgDivision = elId('otherImgDivision');
let otherImgArr = [];
let otherImages = [];
let top_img_btn = elId('top-img-btn');
let top_image = elId('top-image');
let topImg =  '';
let inputTopImg = elId('top-img');
function addTopImg() {
    try {
        let form = document.forms.main_Image_Input;
        let files = inputTopImg;
        let files2 = files.files[0];
        if(!files2.type.match(/image.*/)) {
            alert("Sorry, only images are allowed");
            console.error('Attempting to upload a non-image file!');
        }
        let url = URL.createObjectURL(files2);
        if(url == topImg) return;
        if(top_image.innerHTML.includes('img')) {
            top_image.firstElementChild.src = url;
            URL.revokeObjectURL(topImg);
            topImg = url;
            return;
        }else {
            let img = document.createElement('img');
            img.src = url;
            top_image.innerHTML = '';
            top_image.style.height = "auto";
            top_image.appendChild(img);
            top_img_btn.innerHTML = '<i class="fa fa-upload"></i> Change top image';
            topImg = url;
        }
    }catch(e) {
        alert('Please, add a valid image with either of these extensions: ".jpg/JPG", "png/PNG", "svg".');
        return;
    }
}
let newInputsIds = 2;
function addOtherImages(e) {
    let pos = textarea.selectionStart;
    try {
        let blob = e.target.files[0];
        let value =  blob.name;
        let textareaValue = textarea.value;
        for(let img of otherImgArr) {
            if(img.value == value) {
                alert('Add another image using the Add images/pictures "Choose File" option.\nIf strictly needed, try changing the file name directly from your system.');
                return;
            }}
        let paragraph = textareaValue.slice(0, pos).match(/\n*.+\n*/g).length;
        textarea.value = textareaValue.slice(0, pos) + `<image name="${value}">` + textareaValue.slice(textarea.selectionEnd);
        textarea.selectionStart = textarea.selectionEnd = pos;
        let label = createEl('label', {id: 'other-img', innerHTML: '<i class="fa fa-upload"></i> Add other images'});
        label.setAttribute('for', `other-img-file${newInputsIds}`);
        let newInput = createEl('input', {  type: 'file', id: `other-img-file${newInputsIds--}`, name: `other-img${newInputsIds}`});
        otherImgDivision.lastElementChild.previousElementSibling.style.display = 'none';
        otherImgDivision.append(label, newInput);

        let url = URL.createObjectURL(blob);

        let div = createEl('div', {class: "images-div"});
        let img = createEl('img', { src: url });
        let button = createEl('button', { class: 'rem-btn', name: value, innerHTML: "<i class='fa fa-remove'></i>", type: 'button' });
        button.dataset.id = `other-img-file${newInputsIds++}`; newInputsIds++;
        let small = createEl('small', {innerText: value });

        let pAlt = createEl('p'); pAlt.style.padding = "5px 0px";
        let pCredit = createEl('p'); pCredit.style.padding = "5px 0px";
        
        let altInnerT = prompt("Add an alternative text to your image. Alternative texts are shown when the image cannot be displayed due to some reasons e.g Poor internet connection, image not found on server.", "");
        pAlt.innerHTML = `<h4>Image alternative text: <h5 contenteditable="true">${altInnerT}</h5></h4>`;
        
        let pCreditT = prompt("A brief description about the image or a credit to the image source.", "");
        pCredit.innerHTML = `<h4>Image credit: <h5 contenteditable="true">${pCreditT}</h5></h4>`;
        div.append(img, button, small, pAlt, pCredit);

        if(addImgdiv.innerText == 'Posts can have other images. Click the button below to add extra images to your post') addImgdiv.innerText = '';
        addImgdiv.appendChild(div);
        otherImages.push(url);
        otherImgArr.push({ value, alt: altInnerT, credit: pCreditT });
        textarea.value = textarea.value.slice(0, pos) + textTools[key.innerText] + textarea.value.slice(textarea.selectionEnd);
        textarea.selectionStart = textarea.selectionEnd = pos;
   } catch (e) {}
}
let pictures_div = document.getElementsByClassName('images')[0];
pictures_div.addEventListener('click', (e) => {
   if(e.target.className == 'rem-btn') {
      let id = e.target.getAttribute('name');
      let data_id = e.target.dataset.id;
      URL.revokeObjectURL(e.target.parentElement.getAttribute('src'));
      e.target.parentElement.remove();
      let lastElem = otherImgDivision.lastElementChild.previousElementSibling;
      if(lastElem.innerHTML.includes('<i class="fa fa-hand')) lastElem.innerHTML = `<i class="fa fa-upload"></i> Add other images`;
      let index = otherImgArr.indexOf(id);
      let sr = e.target.previousSibling.src;
      let index2 =  otherImages.indexOf(sr);
      otherImgArr.splice(index, 1);
      otherImages.splice(index2, 1);
      let elem = elId(data_id);
      let elemLabel = elem.previousElementSibling;
      elem.parentElement.removeChild(elem);
      elemLabel.parentElement.removeChild(elemLabel);
      if(otherImgArr.length<1) addImgdiv.innerHTML = '<h5 style="display: flex; align-items: center;"><i class="fa fa-info-circle" style="font-size: 2em; margin-right: 10px;"></i> Posts can have other images. Click the button below to add extra images to your post</h5>';
   }
});
function checkImageValidity(e, img) {
    // if(!navigator.onLine) { e.preventDefault(); return }
    let id = e.target.id;
    let val = elId(id).value;
    let dot = val.lastIndexOf('.');
    let extension = val.slice(dot, val.length);
    if (extension.toLowerCase() == '.jpg' || extension.toLowerCase() == '.png' || extension.toLowerCase() == '.svg' || !dot) {
        (img == "topImg")? addTopImg(): addOtherImages(e);
    } else {
            e.target.value = "";
        alert("Images with this extension are not allowed");
    }
}
function otherImgListeners(e) {
    let lab = e.target;
    let i = e.target.parentElement;
    let realLabel = (lab.tagName.toLowerCase() == 'label')? lab: (i.tagName.toLowerCase() == 'label')? i: false;
    if(realLabel) {
        if(otherImgArr.length == 10) {
            e.preventDefault();
            otherImgDivision.lastElementChild.previousElementSibling.innerHTML = `<i class="fa fa-hand-stop-o"></i> Image limit reached!`;
            return alert(`Maximum image limit reached!\nYou are not allowed to add more images.\nConsider removing some existing ones and replace with another.`);
        }
        let inputID = realLabel.getAttribute('for');
        let input = elId(inputID);
        input.addEventListener('change', (e) => checkImageValidity(e, "otherImg"));
    }
}
inputTopImg.addEventListener('change', (e) => checkImageValidity(e, 'topImg'));
otherImgDivision.addEventListener('click', (e) => otherImgListeners(e));
function imagesType(type) {

}
function selectImagesType() {
    let image_type_div = elId('image-type-div').children;
    image_type_div[0].onclick = () => {
        image_type_div[1].classList.remove('active-img-type');
        image_type_div[0].classList.add('active-img-type');
        imagesType("single");
    }
    image_type_div[1].onclick = () => {
        image_type_div[0].classList.remove('active-img-type');
        image_type_div[1].classList.add('active-img-type');
        imagesType("group");
    }
}
selectImagesType();
help.addEventListener('click', (e) => {
    helpModal.style.display = 'block';
    setTimeout(() => {
        helpModal.style.transform = 'scale(1)';
        document.body.style.overflow = 'hidden';
    }, 10);
});

let tags = elId('tags');
tags.onkeyup = (e) => {
    let val = e.target.value;
    let space = val.split("  ");
    if(space.length > 1 && val.trim() != "") {
        if(space[0].length < 3) return;
        let a = document.createElement('a');
        a.innerText = space[0];
        tags_div.appendChild(a);
        tags_arr.push(space[0]);
        tags.value = '';
        let newP = JSON.parse(localStorage.getItem('newPost'));
        newP.tags = tags_arr;
        localStorage.setItem('newPost', JSON.stringify(newP));
            
    }
};
function detectDoubleTapClosure(e) {
    let lastTap = 0, timeout;
    return function detectDoubleTap() {
        const curTime = new Date().getTime();
        const tapLen = curTime - lastTap;
        if(tapLen < 500 && tapLen > 0) {
            e.preventDefault();
            executeTagRemoval(e);
        }else {
            timeout = setTimeout(() => {
                clearTimeout(timeout);
            }, 500);
        }
        lastTap = curTime;
    };
}
function executeTagRemoval(e) {
    if(e.target.tagName.toLowerCase() == "a") {
        let target = e.target, text = target.innerText;
        target.parentElement.removeChild(target);
        tags_arr.splice(tags_arr.findIndex(t => t == text), 1);
        let newPost = JSON.parse(localStorage.getItem('newPost'));
        newPost.tags = tags_arr;
        localStorage.setItem('newPost', JSON.stringify(newPost));
    }
}
tags_div.addEventListener('dblclick', (e) => executeTagRemoval(e));
if(/Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    tags_div.addEventListener('touchend', (e) => detectDoubleTapClosure(e));
}
let iframe = document.getElementsByName('iframe1')[0];
let done = elId('checkPage');
function DefaultPageInfo() {
    this["@context"] = "";
    this["@type"] = "NewsArticle";
    this.inLanguage = "en-US";
    this.dateline = "Lagos,Nigeria",
    this.copyrightHolder =  {
        "@id": "#Publisher",
    }
}
let alertStrings = {
    heading: "Post heading is too short!",
    category: "Category is too short",
    author: "Author name is too short!",
    mainImage: "Main image not available or name is too short!",
    imageCredit: 'Image credit is empty or too short! Are you sure you want to continue?',
    tags: "You did not add any tag to your post! Are sure you want to continue?"
}
let modalButtonOk;
let modalButtonCancel;
function modal(message) {
    let modalDiv = createEl('div', {class: ["modalDiv"]});
    let modal_parent = createEl('div', {class: ["modal_parent"]});
    let infoDiv = createEl('div', {class: ['infoDiv']});
    let buttonsDiv = createEl('div', {class: ['buttonsDiv']});
    let buttonOk = createEl('button', {class: ["modalBtn", "modalBtnOk"], innerText: "Continue", tabIndex: "1"});
    let buttonCancel = createEl('button', {class: ["modalBtn"], innerText: "Cancel", tabIndex: "1"});
    infoDiv.innerText = message;
    modalDiv.addEventListener('click', (e) => {
        if(e.target == modalDiv) {
            modalDiv.remove();
            return false;
        }
        return true;
    });
    buttonOk.onclick = ()=>{
        modalDiv.remove();
        return true;
    }
    buttonCancel.onclick = ()=>{
        modalDiv.remove();
        return false;
    }
    buttonsDiv.append(buttonCancel, buttonOk);
    modal_parent.append(infoDiv, buttonsDiv);
    modalDiv.appendChild(modal_parent);
    document.body.appendChild(modalDiv);
}
done.addEventListener('click', (e) => {
    let stat = [];
    let conditional = [];
    function GeneratePostJson() {
        let mainImage;
        try {
            mainImage = elId('top-img').files[0].name;
        }catch (e) { mainImage = "" }
        function tooShort(elem, length, stringVal) {
            if(!elem || elem.length < length) {
                alert(stringVal); stat.push(false);
                throw new Error("Input fields not properly filled");
            }else {
                stat.push(true); return true;
            }
        }
        if(tooShort(heading, 20, alertStrings.heading)) this.topic = heading.value;
        if(tooShort(category, 3, alertStrings.category)) this.category = category.value;
        this.datePosted = new Date().toISOString();
        if(tooShort(author, 3, alertStrings.author)) this.authorName = author.value;
        this.mainEntityOfPage = {
            "@type": "WebPage",
            url: `/pages/${this.topic.replace(/\s/g, "-")}`
          }
        this.publisher = {
            "@type": "Organization",
            "@id": "#Publisher",
            name: `${this.authorName}`,
            logo: {
            "@type": "ImageObject",
            "@id": "#Logo",
            url: "",
            width: undefined,
            height: undefined,
            },
        };
        if(tooShort(mainImage, 5, alertStrings.mainImage)) this.mainImage = mainImage;
        if(imageCredit.length < 10) {
            conditional.push(alertStrings.imageCredit);
        }
        this.imageCredit = imageCredit.value;
        this.author = {
            "@type": "Person",
            name: `${this.authorName}, Sportsreal News`,
        };
        this.datePublished = new Date().toISOString();
        this.dateModified = new Date().toISOString();
        this.dateCreated = new Date().toISOString();
        let text = () => {
            let val = textarea.value.replace(/\*\*(.+?)\*\*/g, function(match, p1, offset, string) {
                return ["<b>", p1, "</b>"].join("");
            }).replace(/__(.+?)__/g, function(match, p1, offset, string) {
                return ["<u>", p1, "</u>"].join("");
            }).replace(/<image\sname="(.+?)">/g, "").replace(/""(.+?)""/g, function(match, p1, offset, string) {
                return ["<q>", p1, "</q>"].join("");
            }).replace(/"(.+?)"/g, function(match, p1, offset, string) {
                return ["<i>", p1, "</i>"].join("");
            }).replace(/\n+/g, '\n\n');
            this.newsBody = val;
        }
        text();
        this.url = new URL(this.topic);
        if(tags_arr.length < 1) {
            conditional.push(alertStrings.tags);
        }
        this.tags = tags_arr;
        this.otherImages = new function() {
            let num = 0;
            this[num]= new function() {
                for(let i=0;i<otherImgArr.length;i++) {
                    this[i] = {
                        src: otherImgArr[i].value,
                        alt: otherImgArr[i].alt,
                        credit: otherImgArr[i].credit
                    }
                }
                this.insertAt = "paragraph-4";
            }
            
        }
        DefaultPageInfo.call(this);
    }
    let state = new GeneratePostJson();
    localStorage.setItem('newPost', JSON.stringify(state));
    if(conditional.length > 0) {
        for(let val of conditional) {
            let condition = confirm(val);
            if(!condition) {
                break;
            }
            if(conditional[conditional.length-1] == val) {
                if(condition) loadPageEx();
            }
        }
    }else {
        loadPageEx();
    }
    function loadPageEx() {
        if(!stat.includes(false)) {
            if(!navigator.onLine) {
                let form = document.forms.main_Image_Input;
                let formData = new FormData(form);
                let form2 = document.forms.saveOtherImages;
                let formData2 = new FormData(form2);
                fetch('http://localhost:3001/saveTopImage', {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    uploadOther()
                })
                .catch(error => console.error(error));
                function uploadOther() {
                    fetch('http://localhost:3001/saveOtherImages', {
                        method: "POST",
                        body: formData2
                    })
                    .then(res => res.json())
                    .then(resu =>  {
                        console.log(resu);
                        fetch('http://localhost:3001/preview', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(state)
                        })
                        .then(response => response.text())
                        .then(result => {
                            iframe.style.display = "block";
                            iframe.srcdoc = result;
                        }).catch(er => console.error("Cannot get preview: "+ er));
                    })
                    .catch(err => console.error("Error saving other images: "+ err));
                    // open("http://localhost:3001/preview");
                    
                }
            }else {
                alert("No internet connection!");
            }
        }
    }
});
    
// })