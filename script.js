function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function getCurrentTimeInTimeZone(timezone) {
    return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date());
}

function updateClockDisplays() {
    const timezones = {
        'New York': 'America/New_York',
        'London': 'Europe/London',
        'Tokyo': 'Asia/Tokyo',
        'Sydney': 'Australia/Sydney',
        'Dubai': 'Asia/Dubai',
        'Los Angeles': 'America/Los_Angeles'
    };

    for (const [city, timezone] of Object.entries(timezones)) {
        const currentTime = getCurrentTimeInTimeZone(timezone);
        document.getElementById(city).innerText = `Current time in ${city}: ${currentTime}`;
    }
}

function initializeClocks() {
    updateClockDisplays();
    setInterval(updateClockDisplays, 1000);
}

window.onload = initializeClocks;