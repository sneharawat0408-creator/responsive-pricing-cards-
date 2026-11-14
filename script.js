
// Get Monthly and Yearly buttons

var monthly = document.getElementById("monthly");
var yearly = document.getElementById("yearly");

// Get all prices and units

var prices = document.querySelectorAll(".price");
var units = document.querySelectorAll(".unit");

// Function to change billing period

function setPeriod(period) {

    prices.forEach(function (price) {

        price.textContent = price.dataset[period];

    });

    units.forEach(function (unit) {

        if (period === "monthly") {
            unit.textContent = "per month";
        } else {
            unit.textContent = "per year";
        }

    });

    // Change active button

    monthly.classList.toggle("active", period === "monthly");
    yearly.classList.toggle("active", period === "yearly");

    monthly.setAttribute("aria-pressed", period === "monthly");
    yearly.setAttribute("aria-pressed", period === "yearly");

}

// Button click events

monthly.addEventListener("click", function () {
    setPeriod("monthly");
});

yearly.addEventListener("click", function () {
    setPeriod("yearly");
});

// Default billing period

setPeriod("monthly");


/* Responsive Design */

@media(max - width: 800px) {

    .cards {
        grid - template - columns: 1fr;
    }

    .card {
        width: 100 %;
    }

    .popular {
        order: -1;
        transform: none;
    }

}

/* Mobile Screen */

@media(max - width: 480px) {

    .pricing {
        padding: 20px 10px;
    }

    .pricing h1 {
        font - size: 28px;
    }

    .card {
        padding: 20px;
    }

    .toggle button {
        padding: 10px 18px;
        font - size: 14px;
    }

}

/* Keyboard Accessibility */

button: focus - visible {
    outline: 3px solid black;
    outline - offset: 3px;
}
