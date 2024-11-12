// Sample bar data
const barsData = [
    {
        name: "Lazy Lizard Sixth Avenue",
        location: "West",
        address: "2 Sixth Ave, Singapore 276470",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["Beers"],
        priceRange: "Low",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    {
        name: "Sample Bar 2",
        location: "East",
        address: "456 Sample Rd.",
        happyHourStart: "18:00",
        happyHourEnd: "20:00",
        drinks: ["Cocktails", "Wines"],
        priceRange: "Medium",
        days: ["Friday", "Saturday"]
    },
    // More bars can be added here
];

// Function to display bars
function displayBars(bars) {
    const barList = document.getElementById("bars");
    barList.innerHTML = ""; // Clear previous list

    bars.forEach(bar => {
        const barElement = document.createElement("li");
        barElement.setAttribute("data-days", bar.days.join(","));

        barElement.innerHTML = `
            <strong>${bar.name}</strong><br>
            Location: ${bar.location}<br>
            Address: ${bar.address}<br>
            Happy Hour: ${bar.happyHourStart} - ${bar.happyHourEnd}<br>
            Drinks: ${bar.drinks.join(", ")}<br>
            Price Range: ${bar.priceRange}<br>
            Days: ${bar.days.join(", ")}
        `;

        barList.appendChild(barElement);
    });
}

// Filter and display the bars based on selected filters
document.getElementById("filterButton").addEventListener("click", function() {
    let locationFilter = document.getElementById("location").value;
    let startTimeFilter = document.getElementById("startTime").value;
    let endTimeFilter = document.getElementById("endTime").value;
    let drinkFilter = document.getElementById("drink").value;
    let priceRangeFilter = document.getElementById("priceRange").value;
    
    // Get all selected days
    let daysFilter = Array.from(document.querySelectorAll(".day:checked")).map(input => input.value);

    // Filter bars based on selected filters
    let filteredBars = barsData.filter(bar => {
        let showBar = true;

        // Filter by location
        if (locationFilter && bar.location !== locationFilter) {
            showBar = false;
        }

        // Filter by start time
        if (startTimeFilter && bar.happyHourStart !== startTimeFilter) {
            showBar = false;
        }

        // Filter by end time
        if (endTimeFilter && bar.happyHourEnd !== endTimeFilter) {
            showBar = false;
        }

        // Filter by drink type
        if (drinkFilter && !bar.drinks.includes(drinkFilter)) {
            showBar = false;
        }

        // Filter by price range
        if (priceRangeFilter && bar.priceRange !== priceRangeFilter) {
            showBar = false;
        }

        // Filter by days
        if (daysFilter.length > 0) {
            let daysMatch = daysFilter.some(day => bar.days.includes(day));
            if (!daysMatch) {
                showBar = false;
            }
        }

        return showBar;
    });

    // Display the filtered bars
    displayBars(filteredBars);
});

// Initial display of all bars when page loads
window.onload = function() {
    displayBars(barsData);
};
