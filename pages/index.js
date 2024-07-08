// Get references to DOM elements
const monthYearElement = document.getElementById('month-year');
const daysElement = document.getElementById('days');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const eventForm = document.getElementById('event-form');

// Initialize current date
let currentDate = new Date();

// Event listener for previous month button
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

// Event listener for next month button
nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Function to render the calendar
function renderCalendar() {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Update month-year header
    monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

    // Clear previous days
    daysElement.innerHTML = '';

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Calculate number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Render empty boxes for the days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day', 'empty');
        daysElement.appendChild(emptyDay);
    }

    // Render days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        daysElement.appendChild(dayElement);
    }
}

// Helper function to get month name from index
function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}

// Initial render of the calendar
renderCalendar();

// Event listener for form submission
eventForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventDate = document.getElementById('event-date').value;
    const eventName = document.getElementById('event-name').value;

    // Basic validation for event form
    if (!eventDate || !eventName) {
        alert('Please fill out all fields');
        return;
    }

    // Process the event data (you can save it, display it, etc.)
    alert(`Event added: ${eventName} on ${eventDate}`);

    // Clear the form fields after submission
    eventForm.reset();
});