document.addEventListener("DOMContentLoaded", init);

let pages = [];
let url = "https://davidst.edumedia.ca/mad9014/nums.php";
let httpRequest = "POST";

function init() {

    pages = document.querySelectorAll(".page");

    document.querySelector("#btnSend").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });
    document.querySelector("#btnBack").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });
    document.getElementById("btnSend").addEventListener("click", getData);
    document.querySelector("#btnBack").addEventListener("click", reload);
}

function getData() {

    let formdata = new FormData();
    formdata.append("digits", document.getElementById("digits").value);
    formdata.append("max", document.getElementById("max").value);

    let customSettings = {
        method: httpRequest,
        mode: "cors",
        body: formdata
    };

    let request = new Request(url, customSettings);
    fetch(request)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            let ul = document.querySelector(".num_list");

            data.numbers.forEach(function (item) {
                let li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });
        })

        .catch(function (err) {
            alert("Error: " + err.message);
        });
}

let serverData = {
    url: "https://davidst.edumedia.ca/mad9014/nums.php",
    httpRequest: "POST",
    getJSON: function () {

        let formdata = new FormData();
        formdata.append("digits", document.getElementById("digits").value);
        formdata.append("max", document.getElementById("max").value);

        let customSettings = {
            method: serverData.httpRequest,
            mode: "cors",
            body: formdata
        };

        let request = new Request(serverData.url, customSettings);

        fetch(request)
            .then(function (response) {

                console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                alert("Error: " + err.message);
            });
    }
};


function reload() {
  location.reload();
}
