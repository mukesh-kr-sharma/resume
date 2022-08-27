var acc = document.getElementsByClassName("accordion-btn");

function activate(e) {
    e.classList.add("active");
    var panel = e.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";

    for (var i = 0; i < acc.length; i++) {
        if (e !== acc[i]) {
            acc[i].classList.remove("active");
            var panel = acc[i].nextElementSibling;
            panel.style.maxHeight = null;
        }
    }
}

activate(acc[0])

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        activate(this);
    });
}