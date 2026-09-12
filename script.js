/*CV DOWNLOAD*/

function downloadCV() {

    const cvFile = "CV.pdf";

    const link = document.createElement("a");

    link.href = cvFile;
    link.download = "Soumyadip_Dey_CV.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}


/*SMOOTH SECTION REVEAL*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);


/* Observe all sections except Home */

sections.forEach(function (section) {

    if (section.id !== "home") {

        observer.observe(section);

    }

});


/*SMOOTH NAVIGATION*/

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/*HOME SECTION*/

window.addEventListener("load", function () {

    const homeSection =
        document.querySelector("#home");

    if (homeSection) {

        homeSection.classList.add("show");

    }

});