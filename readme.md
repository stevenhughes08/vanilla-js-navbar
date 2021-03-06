This is a markdown file. It is best viewed in the browser using a markdown reader if you are not using markdown. If you are using Google Chrome you can download it

[Here](https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk)

## Created By Steven Hughes

# Vanilla JavaScript/CSS & HTML Navbar

> A basic responsive Navbar built with JavaScript/CSS and HTML. This was built as an instructional project built by Steven Hughes for Code Louisville's FEWD-2020 Cohort.
>To get the starting files create a folder on your computer and use the following commands.

```git

git init

git clone origin https://github.com/stevenhughes08/vanilla-js-navbar

git checkout start

```

- Create a ***navbar*** folder on your computer and save a file call ***index.html***

- Paste this code into ***index.html***

```html
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>HTML, CSS and Vanilla JS NavBar Demo</title>
            </head>
            <body>
                <header>
                </header>
            </body>
            </html>
```

- Add two new folders. The first should be named ***js*** the other should be named ***css***.

- Now in the ***css*** folder create file called ***custom.css*** & add the following css code.

```css
html,
body {
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

header {
    background-color: green;
    border-bottom: 4px black solid;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.logo {
    color: #ffffff;
    letter-spacing: 3px;
}

.burger {
    display: block;
    color: #ccc;
}

.nav {
    margin: 0;
    background: green;
    position: absolute;
    right: -100%;
    top: 70px;
    width: 50%;
    height: calc(100% - 70px);
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    transition: all 400ms;
    color: white;
    font-size: 1.5rem;
    list-style-type: none;
    text-decoration: none;
} 

.navlink {
    text-align: center;
}

.nav-active {
    right: 0;
}

@media screen and (min-width: 678px) {
    .nav {
        display: flex;
        position: relative;
        right: auto;
        top: auto;
        flex-direction: row;
        justify-content: space-around;
        padding: 0;
    }
    .navlink {
        display: block;
        list-style-type: none;
        margin: 0;
    }
    .navlink a {
        color: #ccc;
        text-decoration: none;
        font-size: 1.2em;
    }
    .burger {
        font-size: 1.2em;
        display: none;
    }
}
```

- Now we are going to jump back into our HTML file and import our style sheet and Font Awesome, a symbol font used by Web Developer's to create low resolution icons. We are going paste the following code Just below our meta tags.

```html
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
            <link rel="stylesheet" href="css/custom.css">
```

- We are also going to add the following code into our `<header></header>` tags.

```html
            <h1 class="logo">Logo</h1>
            <ul id="navId" class="nav"></ul>
            <div class="burger">
                <i class="fas fa-bars"></i>
            </div>
```

- Your HTML document should now look like the code below.

```html
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
                <link rel="stylesheet" href="css/custom.css">
                <title>HTML, CSS and Vanilla JS NavBar Demo</title>
            </head>
            <body>
                <header>
                    <h1 class="logo">Logo</h1>
                    <ul id="navId" class="nav"></ul>
                    <div class="burger">
                        <i class="fas fa-bars"></i>
                    </div>
                </header>
            </body>
            </html>
```

## JavaScript: Arrays, .map and Template Literals for output

- First we are going to create our JS Arrays. We will be using an Array of objects as the input for our values to appear in an Array. This step is optional. You can create a Navbar with out JavaScript using HTML and CSS only.
An array of objects can pass many different values. In this Array we will be using JavaScript to pass our Text, URL, Class and Alt text (for accessibiltiy and E-readers). 

```JavaScript

// Defines an array of objects called navs. Navs contains values for Text, Url, Class and Alt.
const navs = [{
        Text: ' Home ',
        Url: 'index.html',
        Class: ' Home ',
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
        Class: ' Click here to visit Link-3 ',
        Alt: ' Click Here to visit Link 3 '
    }
];
```

- We are now going to add a loop using JavaScript (ES6) to loop through our Array of Objects. ***.map*** iterates through a loop of our objects. We will be placing this inside a variable called ***navBarMarkup*** using the ***const*** keyword 

[Lean More: about the .map function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

[Learn More: about template literals](https://flaviocopes.com/javascript-template-literals/#:~:text=A%20guide%20to%20JavaScript%20Template%20Literals%201%20Introduction,simpler.%203%20Interpolation.%20...%204%20Template%20tags.%20)

```JavaScript

// Loop that places list items to create the navBar. 
const navBarMarkup = `
${navs.map(nav => `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join(' ')}</li>
`;

```

- The code above does not output anything. It just places the the Template literal into your ***navBarMarkup***. In order to output it to the page we will need to use an additional line of code. 

```JavaScript
// document.querySelector(' ul ') searches our HTML page for an unordered list
// or <ul> tag. It uses .innerHTML to output our navBarMarkup variable.

document.querySelector(' ul ').innerHTML = navBarMarkup;
```

[Learn More About: querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)

[Learn More About: innerHTML()](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

- The above code creates your Navbar for larger desktop layouts but what about Mobile? If you look at our webpage in the browser it does hide the Navbar and replace it with the Hamburger icon from our Font Awesome import. We are going to add this functionality by adding some code to select our Hamburger icon by ***.burger*** class and our ***.nav*** class.

```JavaScript
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

```

- In order to follow the **D.R.Y** (Dont repete yourself) **principle**. We are going to create a function we can reuse, if needed. This function will show and hide our mobile menu using ***toggle***.

```JavaScript

function toggleNav(){
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

```

- **What does *toggleNav* do?**

*toggleNav()* uses our ***burger*** variable allows us to change or *toggle* the *class* of the hamburger icon from 'fa-bars' to 'fa-times' by targeting the HTML code below. It is this code that targets our hamburger icon and changes it to an X icon.

  ```html

    <div class="burger">
            <i class="fas fa-bars"></i>  //this is the class that we are targeting with JavaScript.
        </div>

  ```

  [Learn more about ***.classList.toggle()***](https://www.w3schools.com/jsref/prop_element_classlist.asp)

* The ***toggleNav()*** function at this point does nothing because we have not called the function on the website. We will do this with the following code.
  
```JavaScript

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});

```

*What does this do?* ***addEventListener()*** function listens for a mouseclick or 'click' event then runs an anonymous function that executes our ***toggleNav()*** function.

>You should now have a basic responsive JavaScript NavBar for your website

[Click Here to View the Completed CodePen](https://codepen.io/stevenhughes08/pen/MWeZyde   )