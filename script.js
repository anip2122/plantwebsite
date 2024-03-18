document.addEventListener('DOMContentLoaded', function() {
    const plants = ['Orchids', 'Ferns', 'Snake Plant', 'ZZ Plant', 'Peace Lily', 'Pothos (money plant)', 'Rubber Plant'];
    const plantList = document.getElementById('plant-list');

    plantList.innerHTML = plants.map(plant => `<p>${plant}</p>`).join('');

    // Example of a simple transition effect when switching between sections
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
