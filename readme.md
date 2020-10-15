# Vanilla JavaScript/CSS & HTML Navbar

> A basic responsive Navbar built with JavaScript/CSS and HTML. This was built as an instructional project for Code Louisville's FEWD-2020 Cohort.

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
                overflow: hidden;
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

            .nav {
                display: flex;
                justify-content: space-around;
                width: 30%;
            }

            .navlink {
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
```

- Now we are going to jump back into our HTML file and import our style sheet and Font Awesome, a symbol font used by Web Developer's to create low resolution icons. We are going paste the following code Just below our meta tags.

```html
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
            <link rel="stylesheet" href="css/custom.css">
```

- We are also going to add the following code into our * <header></header> * tags.

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
