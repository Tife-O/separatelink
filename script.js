// Get references for back to the top button
let backtotopButton = document.getElementById('back-to-top');

// This function determines whether the back-to-top button should be shown or hidden based on the user's scroll position.
function scrollPosition(){
    // This gets the total height of the document (webpage), including any content that extends beyond the viewport.
    let websiteHeight = document.documentElement.scrollHeight;
    // This calculates the current scroll position plus the height of the viewport. Essentially, this gives the distance from the top of the page to the bottom of the viewport.
    let currentwheelPos = window.innerHeight + window.pageYOffset;
    // If the user has scrolled to the bottom of the page (currentwheelPos is greater than or equal to websiteHeight - 1), the button is shown. Otherwise, it is hidden.
    if( currentwheelPos >= websiteHeight - 1) {
        backtotopButton.style.display = "block";
    }
    else {
        backtotopButton.style.display = "none";
    }
}

// This function scrolls the page back to the top when the back-to-top button is clicked.
function scrollToTop() {
    // Sets the scroll position of the document body to 0.
    document.body.scrollTop = 0;
    // This line of code sets the scroll position of the entire webpage to the top.
    document.documentElement.scrollTop = 0; 
}

// Attach scrollPosition to the window scroll event
window.addEventListener("scroll", scrollPosition);

// Attach scrollToTop to the button click event
backtotopButton.addEventListener("click", scrollToTop);

// Gallery Animation Section
document.addEventListener("DOMContentLoaded", function() {
    let spinner = document.querySelector(".gallery-spinner");
    let position = 0;

    function animate() {
        position -= 1; // Adjust the speed by changing the decrement value
        spinner.style.transform = `translateX(${position}px)`;

        // Reset position to 0 once the last image has fully scrolled out
        if (Math.abs(position) >= spinner.scrollWidth - window.innerWidth) {
            position = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
});
// End of Gallery Animation Section

/////
/////






