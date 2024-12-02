// Contact Form Submit Handling
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission

            const isConfirmed = confirm("Are you sure you want to submit this form?");
            if (isConfirmed) {
                alert("Form submitted successfully!");
                // You can integrate a real backend API call here
                this.reset(); // Clear the form
            }
        });
    }

    // Modal Logic
    const actionButton = document.getElementById("actionButton");
    const modal = document.getElementById("modal");

    if (actionButton && modal) {
        actionButton.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
