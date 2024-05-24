
    document.addEventListener("DOMContentLoaded", function() {
        var currentPath = window.location.pathname.split("/").pop();
        var navLinks = document.querySelectorAll("#nav ul.links li a");
        
        navLinks.forEach(function(link) {
            var linkPath = link.getAttribute("href");
            if (linkPath === currentPath) {
                link.parentElement.classList.add("active");
            } else {
                link.parentElement.classList.remove("active");
            }
        });
    });
