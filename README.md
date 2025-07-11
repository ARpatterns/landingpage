# Community Page for AR Patterns

## Run Locally

Steps:

1. Clone the repository: `git clone git@github.com:ARpatterns.git`
2. Install the dependencies: `npm install`
3. Run `npm run dev` to reload the page automatically when a file changes, or run `npm run build`, then `nmp run serve` to output the files to the dist folder, then npm run serve to serve the content from that folder.

## Contribution Guidelines

CSS: 

We are working with Sass, Scss. Have a look at the documentaion: 

on macOS you can install the necessary tooling via Homebrew:

```
brew install sass/sass/sass

```

Run the build script to generate the new (main.css) file

```
sass public/assets/sass/main.scss public/assets/css/main.css
```
Be careful with the colors: sass may create colors with decimal places, e.g.  `background-color: rgb(56.1, 0, 168.3)`. Before commiting the changes, check the color alues, and replace them with the previous hex value, e.g. `background-color: #3800a8`