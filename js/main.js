// Menú hamburguesa para móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Gráfico de demo con Chart.js
const ctx = document.getElementById('demoChart').getContext('ctx');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Eficiencia Operativa',
            data: [65, 70, 75, 82, 88, 92],
            borderColor: '#2A6DF4',
            backgroundColor: 'rgba(42, 109, 244, 0.1)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#333'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0,0,0,0.1)'
                }
            }
        }
    }
});

// Animación de números en estadísticas
const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
    const value = parseInt(stat.innerText);
    let current = 0;
    const increment = value / 50;
    
    const updateValue = () => {
        if (current < value) {
            current += increment;
            stat.innerText = Math.floor(current) + (stat.innerText.includes('+') ? '+' : '%');
            setTimeout(updateValue, 20);
        } else {
            stat.innerText = value + (stat.innerText.includes('+') ? '+' : '%');
        }
    };
    
    // Iniciar animación cuando el elemento sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateValue();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(stat);
});
