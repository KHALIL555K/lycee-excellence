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
        title: "Atelier d’Arts Plastiques",
        description: "Les élèves explorent la peinture, le dessin et la sculpture pour exprimer leur créativité et découvrir différents styles artistiques.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/competitionFootball.png",
        title: "Tournoi de Football",
        description: "Un grand tournoi interclasses qui permet aux élèves de renforcer l’esprit d’équipe et la discipline à travers le sport.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/basket-scolaire.png",
        title: "Compétition de Basketball",
        description: "Nos équipes mixtes s’affrontent dans une ambiance conviviale, alliant performance sportive et fair-play.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/club-theatre.jpg",
        title: "Club de Théâtre",
        description: "Les élèves apprennent à jouer la comédie, développer leur confiance en soi et présenter des pièces en fin d’année.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/young conductor.jpg",
        title: "Atelier de Musique",
        description: "Découverte des instruments, apprentissage du rythme et formation d’un orchestre scolaire pour les passionnés de musique.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/les sciences de scentifica.jpg",
        title: "Foire Scientifique",
        description: "Les jeunes scientifiques présentent leurs expériences et projets innovants lors de notre exposition annuelle.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/club de lecture.jpg",
        title: "Club de Lecture",
        description: "Un espace d’échange où les élèves partagent leurs coups de cœur littéraires et participent à des concours de lecture.",
        link: "VOIR PLUS"
    },
    {
        image: "../assets/image/technologie.jpg",
        title: "Technologie",
        description: "Une activité dédiée à la protection de l’environnement : plantation d’arbres, nettoyage du quartier et ateliers éco-citoyens.",
        link: "VOIR PLUS"
    }
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
