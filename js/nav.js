const navs = [{
        Text: ' Characters ',
        Url: 'characters.html',
        Class: ' characters ',
        Alt: ' Click here to view the home link '
    },
    {
        Text: ' Link-1 ',
        Url: ' link-1.html ',
        Class: ' link-1',
        Alt: ' Click Here to visit Link-1 '
    },
    {
        Text: ' Link-2 ',
        Url: ' link-2.html',
        Class: ' link-2 ',
        Alt: ' Click here to visit Link-2 '
    },
    {
        Text: ' Link-3 ',
        Url: ' link-3.html ',
        Class: ' Link-3 ',
        Alt: ' Click Here to visit Link 3 '
    }
    // ,
    // {
    //     Text: '<div class = "social-media-pane"> <a href = "https://www.facebook.com/kalashnikovClowns" class = "fab fa-facebook" aria - label = "FaceBook" target = "_blank" > < /a><a href="https:/ / www.instagram.com / kalashnikov_clowns " class=" fab fa - instagram " aria-label=" Instagram " target="_blank "></a><a href=" https: //www.youtube.com/channel/UCQh9KOEg3CZis0be1eUrdRA" class="fab fa-youtube" aria-label="YouTube" target="_blank"></a></div>'
    // }
];

// Loop that places list items to create the navBar. 
const navBarMarkup = `
${navs.map(nav => `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join(' ')}</li>
`;

document.querySelector(' #NavBar ').innerHTML = navBarMarkup;

// Creates hamburger icon for mobile navigation

// Select HTML objects

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function

function toggleNav(){
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// detect if user is tabbing and decide if focus ring should be hidden

function handleFirstTab(e){
    if(e.keyCode === 9){
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});

// Append clown head after the list slide in menu

var item = document.createElement('li');
item.innerHTML = '<img class="no-large dorak-nav-pic" src= "images/clown_head_line_art2.png">';
document.getElementsByClassName(' nav ')[0].append(item);