import 'alpinejs';
import Glide, { Breakpoints, Controls, Autoplay , Swipe } from '@glidejs/glide/dist/glide.modular.esm';

var deviensIm = new Glide('.deviensIm_glide',{
    autoplay: 9000,
    hoverpause:true
});

var boussole = new Glide('.boussole_glide',{
    gap: 0,
    breakpoints:{
        1023: {
            perView: 1
        },
        5000: {
            perView: 3
        }
    }
});

/* function selectPic(pic) {
    console.log("holaaa");
    glide.update({
        startAt: pic
      })
} */
var etudiants = new Glide('.etudiants_glide',{
    gap: 0,
    startAt: 0,
    breakpoints:{
        1023: {
            perView: 1
        },
        5000: {
            perView: 5
        }
    }
});

boussole.mount({ Breakpoints, Controls, Swipe });
deviensIm.mount({ Controls, Autoplay, Swipe });
etudiants.mount({ Breakpoints, Controls, Swipe });

/* Form from Formspree */

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("newquestion");
    var button = document.getElementById("newquestion-button");
    var status = document.getElementById("newquestion-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Merci pour ta question!";
    }

    function error() {
        status.innerHTML = "Oups! Il y a eu un problème, réessaye plus tard.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
