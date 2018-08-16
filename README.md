# Beatles Sights in Liverpool

This is a map for everyone who loves the Beatles and would like to visit Liverpool with the Fab Four in mind. Places where they've been, places that inspired them and places where tribute is paid to the city's most famous sons can be found on this map by Google Maps, with added information provided by the Foursquare API.

It was developed using **[React](https://reactjs.org/)** as the final project of the **[Udacity Front-End Web Developer Nanodegree](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001)**.

## Installation

You can install this app in 7 easy steps:
1. Download the files
2. Navigate to the folder where they are
3. Run `npm install` to install its dependencies
4. Run `npm build` to build a production version of the app
5. Run `npm install -g serve` to install the [serve](https://github.com/zeit/serve) package if you don't have it yet
6. Run `serve -s build` to launch the server
7. Open http://localhost:5000 in your browser

## How to use

All sights are listed on the sidebar to the left (if may be closed by default if your screen in small, in that case just click "Show sight list") and marked on the map. You can use the search box to filter them (by name, description or keywords) and click on either a list item or a marker to open an infowindow with further info and a link to Foursquare.

## Acknowledgements

I'd like to thank a lot of people who have no idea they helped me in this project, but I couldn't have done it without them:
* All the developers that kindly provided the libraries I used: [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp), [sort-by](https://github.com/kvnneff/sort-by), and most importantly [react-google-maps](https://github.com/tomchentw/react-google-maps).
* StickPNG for the cool [Yellow Submarine image](http://www.stickpng.com/img/music-stars/the-beatles/yellow-submarine).
* Morganne Gagne for this great [react-google-maps tutorial](https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad).
* David Meents for this very helpful [article](https://www.davidmeents.com/creating-a-collapsible-navigation-menu-in-react-js/) on how to make a collapsible element.
* All the staff at [Udacity](https://www.udacity.com), from instructors to reviewers, as well as my mentor.
* And of course the folks at [Google Maps](https://cloud.google.com/maps-platform/) and [Foursquare](https://developer.foursquare.com/), who provide these awesome APIs.

## Contribute

As stated above, this project is part of a Udacity Nanodegree, and therefore should be my own work. For that reason, I won't accept any pull requests.
