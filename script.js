const bars = [
    { 
        name: "The Beer Garden", 
        location: "north", 
        startTime: "17:00", 
        endTime: "19:00", 
        drinks: ["Beer", "Cocktails"],
        priceRange: "low",
        address: "123 North Street, Springfield" 
    },
    { 
        name: "Wine & Dine", 
        location: "central", 
        startTime: "18:00", 
        endTime: "20:00", 
        drinks: ["Wine"],
        priceRange: "high",
        address: "456 Central Avenue, Springfield" 
    },
    { 
        name: "Cocktail Haven", 
        location: "east", 
        startTime: "16:00", 
        endTime: "18:00", 
        drinks: ["Cocktails"],
        priceRange: "medium",
        address: "789 East Road, Springfield" 
    },
    { 
        name: "Happy Tap", 
        location: "south", 
        startTime: "19:00", 
        endTime: "21:00", 
        drinks: ["Beer"],
        priceRange: "low",
        address: "321 South Lane, Springfield" 
    },
    { 
        name: "Sunset Lounge", 
        location: "west", 
        startTime: "20:00", 
        endTime: "22:00", 
        drinks: ["Wine", "Cocktails"],
        priceRange: "high",
        address: "654 West Boulevard, Springfield" 
    }
];

function filterBars() {
    const locationFilter = document.getElementById("location").value;
    const startTimeFilter = document.getElementById("startTime").value;
    const endTimeFilter = document.getElementById("endTime").value;
    const drinkFilter = document.getElementById("drink").value;
    const priceRangeFilter = document.getElementById("priceRange").value;

    const filteredBars = bars.filter(bar => {
        const matchesLocation = locationFilter === "" || bar.location === locationFilter;

        const matchesStartTime =
            startTimeFilter === "" || 
            bar.startTime >= startTimeFilter;

        const matchesEndTime =
            endTimeFilter === "" || 
            bar.endTime <= endTimeFilter;

        const matchesDrink = drinkFilter === "" || bar.drinks.includes(drinkFilter);

        const matchesPriceRange = priceRangeFilter === "" || bar.priceRange === priceRangeFilter;

        return matchesLocation && matchesStartTime && matchesEndTime && matchesDrink && matchesPriceRange;
    });

    displayBars(filteredBars);
}

function displayBars(barList) {
    const barListElement = document.getElementById("bars");
    barListElement.innerHTML = "";

    if (barList.length === 0) {
        barListElement.innerHTML = "<li>No bars found.</li>";
        return;
    }

    barList.forEach(bar => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${bar.name}</strong><br>
            Location: ${bar.location.charAt(0).toUpperCase() + bar.location.slice(1)}<br>
            Address: ${bar.address}<br>
            Happy Hour: ${bar.startTime} - ${bar.endTime}<br>
            Drinks: ${bar.drinks.join(", ")}<br>
            Price Range: ${bar.priceRange.charAt(0).toUpperCase() + bar.priceRange.slice(1)}
        `;
        barListElement.appendChild(li);
    });
}

// Event listener for filtering
document.getElementById("filterButton").addEventListener("click", filterBars);

// Populate the bar list on initial page load
displayBars(bars);
