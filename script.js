// Sample bar data
// Low (Less than $15 per drink), Medium ($15-$20 per drink), High (More than $20 per drink)
const barsData = [
    {
        name: "Lazy Lizard",
        location: "West",
        address: "2 Sixth Ave, Singapore 276470",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["beers"],
        priceRange: "low",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    {
        name: "Chico Loco",
        location: "Central",
        address: "102 Amoy St, Singapore 069922",
        happyHourStart: "12:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails", "wines"],
        priceRange: "low",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"]
    },
    {
        name: "Offtrack",
        location: "Central",
        address: "34 N Canal Rd, Singapore 059290",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails", "wines", "beers"],
        priceRange: "medium",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    {
        name: "Southbridge",
        location: "Central",
        address: "80 Boat Quay, Level 5, Singapore 049868",
        happyHourStart: "17:00",
        happyHourEnd: "20:00",
        drinks: ["wines", "beers", "spirits"],
        priceRange: "medium",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"]
    },
    {
        name: "Bones 'n Barrels",
        location: "West",
        address: "438 B Alexandra Road, 01-01 Alexandra Technopark, Block B, 119968",
        happyHourStart: "11:30",
        happyHourEnd: "20:00",
        drinks: ["wines", "beers", "spirits"],
        priceRange: "low",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    {
        name: "Malthouse",
        location: "East",
        address: "685 E Coast Rd, Singapore 459054",
        happyHourStart: "12:00",
        happyHourEnd: "20:00",
        drinks: ["beers"],
        priceRange: "low",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    {
        name: "Almost Famous",
        location: "Central",
        address: "30 Victoria St, #01-06, Singapore 187996",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["beers"],
        priceRange: "low",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },

];

// Function to display bars
function displayBars(bars) {
    const barList = document.getElementById("bars");
    barList.innerHTML = ""; // Clear previous list

    bars.forEach(bar => {
        const barElement = document.createElement("li");
        barElement.setAttribute("data-days", bar.days.join(","));

        function capitalizeEachWord(str) {
            return str
                .split(" ") // Split the string into words
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
                .join(" "); // Rejoin the words into a single string
        }
        

        barElement.innerHTML = `
            <h4>${bar.name}</h4><br>
            <p><strong>Address</strong>:  ${(bar.address)} </p><br>
            <p><strong>Location</strong>:  ${capitalizeEachWord(bar.location)} </p><br>
            <p><strong>Happy Hour</strong>: ${bar.happyHourStart} - ${bar.happyHourEnd} </p><br>
            <p><strong>Days</strong>: ${bar.days.join(", ")} </p><br>
            <p><strong>Drinks</strong>: ${capitalizeEachWord(bar.drinks.join(", "))} </p><br>
            <p><strong>Price Range</strong>: ${capitalizeEachWord(bar.priceRange)} </p><br>
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


// **NEW CODE**: Reset filters and display all bars
document.getElementById("resetButton").addEventListener("click", function () {
    // Clear all dropdowns
    document.getElementById("location").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
    document.getElementById("drink").value = "";
    document.getElementById("priceRange").value = "";

    // Uncheck all days
    document.querySelectorAll(".day").forEach(dayCheckbox => {
        dayCheckbox.checked = false;
    });

    // Display all bars
    displayBars(barsData);
});
