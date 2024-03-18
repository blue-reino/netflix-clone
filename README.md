# Basic Netflix Clone

A very simple Netflix Clone. It's not exactly a 1:1 clone, but I tried to recreate the frontend as best as I could. 
This project was not made for production, but for me to learn some frontend and basic backend web development.

# How to test

Simply run npm start in the source folder, after installing React 


# Technologies Used

* React
  
* Framer-Motion: For animations

* Bootstrap: For some basic styling

* Remix Icon: For some design icons

* Amazon AWS Cloud Storage: For the billboard images

* Vidsrc API (https://vidsrc.to/): For the movies
  

# Development Process

* I started off with a basic general layout of the top half of the Netflix homepage.
* This included the navbar and the hero section. The hero section is where a featured movie is displayed, as well as a small trailer. At this beggining point, this only consisted of an image, with some text for the movie name and description.
* Next I began working on the movie slider. This is basically where you can choose a movie to watch from each "topics." For example, "New Releases" and "Trending Now." At first these were all placed in the Home.js page, but then I moved these over to a custom component, this made it cleaner and a lot more efficient.
* The movie slider features a carousel effect (built with framer motion) where the user grabs and slides, Netflix features buttons and either side where you can click to view the next set of movies, however, my version is different.
* Each movie is loaded in from an Array, with unique IDs, title, descriptions etc...
* This allows me to map a button over the movies in the carousel, and using a function called "handleMovieSelect", it allows me to determine what movie is being selected. Movies are randomly shuffled using another function (shuffledMovies).
* Specifically for the "Top 10 Movies" section, I also passed in an index into the "shuffledMovies" function that allowed me to map each number image next to each movie similarly to Netflix. Using some basic styling, I was then able to position it correctly.
* For the hero, featured movie player, I created a custom video player that resembles Netflix. The clip of the featured movie will play, it will be muted, with a button that allows you to unmute and mute. After the clip is finished playing it stops, and the mute/unmute button switches to a restart button, where the user can rewatch the clip. 
* I then began working on the "All Movies" section. I created a new Array and imported all the other movie arrays. I then used a similar logic to the carousel to map the movies, except this time I got rid of sliding animation and just displayed everything on the user screen. I used some basic styling such as flexbox to make sure everything fit.
* Here, I learned about React Routing, this made it where the user can go to certain pages without having to refresh their entire screen, as well as have a "active" page.
* I finally tried to implement a search filter to the "All Movies" section, however, I ran into some issues and decided to take a break.
* Also features some basic mobile support, however, a lot of work is needed.
  
# Future Plans

* This project took me around a 100 hours of work to complete in the span of 3 weeks.
* The project is not completely finished, but I have decided to work on something new, since I learned a lot about React from this project.
* In the future I would like to finish the search filter
* Add a log in page with user profiles
* Add a way for users to add movies to a "Watch Later" list
* And finally finish the rest of tabs
* Optimize it fully for mobile support
