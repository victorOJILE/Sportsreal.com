let textTools = {
    "0": '**Write here**',
    "1": "''Write here''",
    "2": '__Write here__',
    "3": `<a href="Write or paste link here">Write here</a>`,
    "4": `<ol type="1">\n<li>Write here</li></ol>`,
    "5": `<ul>\n<li>Write here</li></ul>`,
    "6": '""Write here""',
    "7": `<h1>Write here</h1>`,
    "8": `<h2>Write here</h2>`,
    "9": `<h3>Write here</h3>`,
    "10": `<h4>Write here</h4>`,
    "11": `<h5>Write here</h5>`,
    "12": `<h6>Write here</h6>`
};
let buttons = document.querySelectorAll('.edit-text button');

for(let key of buttons) {
    key.addEventListener('click', (e) => {
        key.classList.toggle('active-button');
        let keyVal = key.value;
        let pos = textarea.selectionStart;
        textarea.value = textarea.value.slice(0, pos) + textTools[keyVal] + textarea.value.slice(textarea.selectionEnd);
        textarea.selectionStart = textarea.selectionEnd = pos +14;
        textarea.focus();
    });
};
textarea.addEventListener('keydown', function(e) {
    let obj = {
        'Enter': "<br>"
    };
    let pos = textarea.selectionStart;
    if(obj[e.key]) {
        e.preventDefault();
        if(textarea.value.slice(pos, pos+5) == '</li>') {
            textarea.selectionStart = pos +5;
            textarea.value = textarea.value.slice(0, pos) + "</li>\n<li>Write here...</li>" + textarea.value.slice(textarea.selectionEnd);
            textarea.selectionStart = textarea.selectionEnd = pos +10;
        }else if(textarea.value.slice(pos, pos+5) == '</ol>') {
            textarea.selectionStart = pos;
            textarea.value = textarea.value.slice(0, pos) + "\n<li>Write here...</li>" + textarea.value.slice(textarea.selectionEnd);
            textarea.selectionStart = textarea.selectionEnd = pos +5;
        }else if(textarea.value.slice(pos, pos+5) == '</ul>') {
            textarea.selectionStart = pos;
            textarea.value = textarea.value.slice(0, pos) + "\n<li>Write here...</li>" + textarea.value.slice(textarea.selectionEnd);
            textarea.selectionStart = textarea.selectionEnd = pos +5;
        }else {
            e.target.value = textarea.value.slice(0, pos) + "\n" + textarea.value.slice(textarea.selectionEnd);
            textarea.selectionStart = textarea.selectionEnd = pos +1;
        }
    }
});
