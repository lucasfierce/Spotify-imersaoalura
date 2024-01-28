const greeting = document.getElementById('greeting')
const currentHour = new Date().getHours()

if (currentHour >= 5 && currentHour < 12) {
    greeting.textContent = "Bom dia";
} else if (currentHour >=12 && currentHour < 18) {
    greeting.textContent = "Boa tarde";
} else {
    greeting.textContent = "Boa noite";
}