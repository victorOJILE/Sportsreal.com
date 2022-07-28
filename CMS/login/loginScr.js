
(function () {
    let forms = document.forms;
    Array.from(forms).forEach(e => e.addEventListener('submit', (event) => event.preventDefault()));
    let form = document.forms.form;
    let inputs = form.getElementsByTagName('input');
    let inputObj;
    let submit = document.getElementById('submit');
    window.addEventListener('keydown', (e) => {
        if(e.key == "Enter") {
            submit.click();
        }
    })
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        inputObj = {};
        for(let input of inputs) {
            if(input.checkValidity()) {
                if(input.id == 'emailM' && input.value != document.getElementById('email').value) {
                    alert("Email address does not match");
                    return;
                }
                inputObj[input.name] = input.value;
                continue;
            }
            console.log("Input with the name", input.name, "is not properly filled");
            return;
        }
        console.log(inputObj);
        try {
            let genderM = document.getElementById('male');
            if(inputObj.male != "male" && inputObj.female != 'female') {
                return alert('Gender not selected!');
            }
        } catch (error) { }
        let json = JSON.stringify(inputObj);
        console.log(json);
        fetch("http://localhost:3001/signupjs", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(inputObj)
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.error(error));
    })
})()
document.addEventListener('DOMContentLoaded', () => {
    let elId = (id) => document.getElementById(id);
    let un = elId('username'), psw = elId('password');
    let fL =["<", ">", "[", "]", '"', "!", "{", "}"];
    function validateInputs(e) {
        if(fL.includes(e.key)) {
            e.preventDefault();
            return;
        }
    }
    un.addEventListener('keydown', (e) => validateInputs(e));
    psw.addEventListener('keydown', (e) => {
        if(fL.includes(e.key)) {
            e.preventDefault();
            return;
        }
    });
    let eye_view = elId('eye-view'), eye_slash = elId('eye-slash');
    eye_view.onclick = function() {
        psw.setAttribute('type', 'password');
        this.classList.add('hide');
        eye_slash.classList.remove('hide');
    }
    eye_slash.onclick = function() {
        psw.setAttribute('type', 'text');
        this.classList.add('hide');
        eye_view.classList.remove('hide');
    }
    try {
        let fullname = elId('fullname'), email = elId('email'), emailM = elId('emailM');
        let em_match = elId('em-match');
        fullname.addEventListener('keydown', (e) => validateInputs(e));
        email.addEventListener('keydown', (e) => validateInputs(e));
        function emailMatch() {
            if(email.value != emailM.value) {
                em_match.classList.remove('hide');
            }else {
                em_match.classList.add('hide');
            }
        }
        emailM.addEventListener('blur', () => emailMatch());
        emailM.addEventListener('keyup', () => emailMatch());
        
        let unInfo = elId('un-info'), emInfo = elId('em-info');
        let psIn = elId('pw-info'), psInfo = psIn.children;
        function validateInput(elem) {
            if(this.value.length < 3 || !this.checkValidity()) {
                elem.classList.remove('hide');
            }else {
                elem.classList.add('hide');
            }
        }
        un.addEventListener('keyup', function() { validateInput.call(this, unInfo) });
        email.addEventListener('keyup', function() { validateInput.call(this, emInfo) });
        psw.addEventListener('focus', () => psIn.classList.remove('hide'), { once: true });

        let countryCode = elId('countryCode'), code = elId('code').getElementsByTagName('option');
        countryCode.onchange = function() {
            for(let key of code) {
                if(key.value == this.value) {
                    countryCode.value = key.dataset.code;
                        break;
                }
            }
        }
        countryCode.addEventListener('keydown', (e) => {
            if(e.key.length < 2 && !e.key.match(/[\d\+]/)) e.preventDefault();
            if(e.target.value.length > 3 && e.key.length < 2) e.preventDefault();
            if(e.target.value.includes('+') && e.key == "+") e.preventDefault();
        })
        let phoneNo = elId('phoneNum');
        phoneNo.addEventListener('keydown', (e) => {
            if(e.key.length < 2 && !e.key.match(/\d/)) e.preventDefault();
            if(e.key.length < 2 && phoneNo.value.length >= 25) e.preventDefault();
        })
        function formatTrue(elem) {
            elem.style.display = "none";
        }
        function formatFalse(elem) {
            elem.style.display = "block";
        }
        psw.addEventListener('keyup', () => {
            (psw.value.length > 7)? formatTrue(psInfo[0]): formatFalse(psInfo[0]);
            (psw.value.match(/\d/))? formatTrue(psInfo[1]): formatFalse(psInfo[1]);
            (psw.value.match(/[A-Z]/))? formatTrue(psInfo[2]): formatFalse(psInfo[2]);
            (psw.value.match(/[a-z]/))? formatTrue(psInfo[3]): formatFalse(psInfo[3]);
        });
        let dayOB = elId('dayOB'), monthOB = elId('monthOB'), yearOB = elId('yearOB');
        dayOB.addEventListener('keydown', (e) => {
            let targ = e.target.value;
            if(targ.length == 1) {
                if(parseInt(`${targ}${e.key}`) > 31) {
                    e.preventDefault();
                    e.target.value = `0${targ}`;
                    return;
                }else if(parseInt(`${targ}`) == "0" && e.key == "0") {
                    e.preventDefault();
                    return;
                }
            }
            if(targ.length > 1) {
                if(e.key.match(/\d/)) e.preventDefault();
            }
        });
        let monthName = ["January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"];
        monthOB.addEventListener('keydown', (e) => {
            let newkey = e.target.value + e.key;
            let match = monthName.find(name => name.toLowerCase().indexOf(newkey) == 0);
            if(!match) {
                if(e.key.length <= 1) {
                    e.preventDefault();
                }
            }
        });
        yearOB.addEventListener('keydown', (e) => {
            if(e.key.length < 2 && !e.key.match(/\d/)) {
                e.preventDefault();
                return;
            };
            let targ = e.target.value;
            if(targ.length == 3) {
                if(new Date().getFullYear() - parseInt(`${targ}${e.key}`) < 15) {
                    e.preventDefault();
                    return;
                }
            }
            if(targ.length > 3) {
                if(e.key.match(/\d/)) e.preventDefault();
            }
        });

        let male = elId('male'), female = elId('female');
        male.onchange = () => {
            female.checked = false;
            female.value = "";
            male.value = 'male';
        };
        female.onchange = () => {male.checked = false; male.value = ""; female.value = 'female'};
    } catch(err) { console.log(err)}
})