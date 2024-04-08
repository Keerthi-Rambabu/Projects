document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("nav-link");
    const mainContent = document.querySelector(".column2");
    const sideContent = document.querySelector(".column1");

    content.addEventListener("click", function(event) {
        event.preventDefault();
        mainContent.innerHTML = "<h2>Welcome to Computer Networks</h2><p>This is the content related to Computer Networks.</p>";
        sideContent.innerHTML = "<p>Side headings of computer Netwoks</p>";

    });
    
});