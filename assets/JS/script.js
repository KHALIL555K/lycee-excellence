
let sectionStatistiques = document.querySelectorAll(".section-statistiques");
let count = 0;



let smoothCounter = (element, start, end, duration) => {
    const range = end - start;
    const increment = range / (duration / 10);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }

        element.textContent = `${Math.round(current)}+`;
    }, 10);
}


window.onscroll = () => {
    if (window.scrollY >= 400 && window.scrollY <= 420) {
        smoothCounter(sectionStatistiques[0], 0, 100, 2000);
        smoothCounter(sectionStatistiques[1], 0, 20, 2000);
        smoothCounter(sectionStatistiques[2], 0, 20, 2000);
        smoothCounter(sectionStatistiques[3], 0, 30, 2000);
    }
};


// Burger Menu
toggleMenu = () => {
    var navMenu = document.getElementById('navMenu');
    var burger = document.querySelector('.burger-menu');
    navMenu.classList.toggle('active');
    burger.classList.toggle('active');
}
closeMenu = () => {
    var navMenu = document.getElementById('navMenu');
    var burger = document.querySelector('.burger-menu');
    navMenu.classList.remove('active');
    burger.classList.remove('active');
}


// pour page activite : 
let activite = [
    {
        image: "../assets/image/activite-scolaire.jpg",
        title: "Arts",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam.",
        link: "VOIR PLUS"
    },

    {
        image: "../assets/image/activite-scolaire.jpg",
        title: "Arts",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/activite-scolaire.jpg",
        title: "Arts",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/activite-scolaire.jpg",
        title: "Arts",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam.",
        link: "VOIR PLUS"
    },
];




let activiteCards = document.getElementById("activite-cards");
console.log(activiteCards);


activite.map((activite) => {
    activiteCards.innerHTML += `
     <div class="activite-card" id="activite-card">        
        <div class="img">
                <img src="${activite.image}" alt="">
            </div>        
            <div class="activite-card-info">
                <h3>${activite.title} </h3>
                <p>${activite.description}</p>
                <a href="#">${activite.link}</a>
            </div>  
            
            </div>
            `;

})
