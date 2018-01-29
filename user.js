
function User() {
    let btn = document.querySelector(".footer__next-user");
    let count = 0;

    function setInformUser(data) {
        let name,surname,lastname,position,job,education;
        name = document.querySelector(".user-profile__name");
        surname = document.querySelector(".user-profile__surname");
        lastname = document.querySelector(".user-profile__lastname");
        position = document.querySelector(".user-profile__position");
        job = document.querySelector(".user-profile__job");
        education = document.querySelector(".user-profile__education");
        
        name.innerText = data.name;
        surname.innerText = data.surname;
        lastname.innerText = data.lastname;
        position.innerText = data.position;
        job.innerText = data.job;
        education.innerText = data.education;
    };

    this.nextUser = () => {
        let getData = new XMLHttpRequest();
        getData.open('GET', './user.json', true);

        getData.send();

        getData.onreadystatechange = function () {
            if (getData.readyState != 4) return;

            if (getData.status != 200) {
                console.log(getData.status + ': ' + getData.statusText);
            } else {
                let data = getData.responseText;
                let dataUser = JSON.parse(data); 

                if (count >= dataUser.length) count = 0;
                else count++;

                setInformUser(dataUser[count]);
            }

        }

    };

    btn.addEventListener("click", this.nextUser);
}

let user = new User();
console.log(user)