// Datos del menú
const menuData = {
    cafes: [
        {
            nombre: 'Espresso Italiano',
            descripcion: 'Intenso y aromático, preparado con granos arábica',
            precio: '2.50€',
            imagen: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a'
        },
        {
            nombre: 'Cappuccino Especial',
            descripcion: 'Espresso con leche cremosa y espuma de leche',
            precio: '3.50€',
            imagen: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d'
        },
        {
            nombre: 'Latte Macchiato',
            descripcion: 'Leche con un toque de espresso y canela',
            precio: '3.80€',
            imagen: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2'
        },
        {
            nombre: 'Mocha',
            descripcion: 'Café con chocolate belga y crema batida',
            precio: '4.20€',
            imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
        }
    ],
    bebidas: [
        {
            nombre: 'Frappé de Caramelo',
            descripcion: 'Café helado con caramelo y crema',
            precio: '4.50€',
            imagen: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735'
        },
        {
            nombre: 'Smoothie de Frutas',
            descripcion: 'Mezcla de frutas frescas de temporada',
            precio: '4.00€',
            imagen: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625'
        }
    ],
    postres: [
        {
            nombre: 'Tarta de Chocolate',
            descripcion: 'Pastel de chocolate belga con ganache',
            precio: '5.50€',
            imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
        },
        {
            nombre: 'Croissant de Almendra',
            descripcion: 'Croissant artesanal relleno de crema de almendra',
            precio: '3.00€',
            imagen: 'https://images.unsplash.com/photo-1623334044303-241021148842'
        }
    ],
    sandwiches: [
        {
            nombre: 'Club Sándwich',
            descripcion: 'Pollo, bacon, lechuga y tomate',
            precio: '7.50€',
            imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af'
        },
        {
            nombre: 'Vegetariano',
            descripcion: 'Aguacate, hummus y vegetales frescos',
            precio: '6.50€',
            imagen: 'https://images.unsplash.com/photo-1528736236120-687bc9a9c1b3'
        }
    ]
};

// Datos de la galería
const galleryImages = [
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda'
];

// Testimonios
const testimonials = [
    {
        nombre: 'María García',
        texto: '¡El mejor café que he probado! El ambiente es increíble y el personal muy amable.',
        estrellas: 5,
        imagen: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        nombre: 'Carlos Martínez',
        texto: 'Un lugar acogedor para trabajar. El WiFi es excelente y el café espectacular.',
        estrellas: 5,
        imagen: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        nombre: 'Ana López',
        texto: 'Los postres son deliciosos. Recomiendo el croissant de almendra con un latte.',
        estrellas: 4,
        imagen: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
];

// Función para crear items del menú
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="menu-item-content">
                <h3>${item.nombre}</h3>
                <p class="description">${item.descripcion}</p>
                <p class="price">${item.precio}</p>
            </div>
        </div>
    `;
}

// Función para renderizar el menú
function renderMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    const items = menuData[category];
    menuGrid.innerHTML = items.map(item => createMenuItem(item)).join('');
    
    // Animación de entrada
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
    });
}

// Función para cargar la galería
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = galleryImages.map(img => 
            `<img src="${img}" alt="Galería de la cafetería" loading="lazy">`
        ).join('');
    }
}

// Función para cargar testimonios
function loadTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <img src="${testimonial.imagen}" alt="${testimonial.nombre}">
                <h3>${testimonial.nombre}</h3>
                <div class="stars">
                    ${Array(testimonial.estrellas).fill('<i class="fas fa-star"></i>').join('')}
                </div>
                <p>"${testimonial.texto}"</p>
            </div>
        `).join('');
    }
}

// Navegación móvil
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar componentes
    renderMenu('cafes');
    loadGallery();
    loadTestimonials();

    // Hamburguesa menú
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Tabs de menú
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-tab');
            renderMenu(category);
        });
    });

    // Smooth scroll para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto de scroll en el header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        }
    });

    // Navegación activa según la sección
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }

    // Lazy loading para imágenes de galería
    const galleryImgs = document.querySelectorAll('.gallery-grid img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    galleryImgs.forEach(img => imageObserver.observe(img));
}); 