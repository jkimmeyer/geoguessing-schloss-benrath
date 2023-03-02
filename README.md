# **Geoguessing Schloss Benrath**

---

# Introduction
The 360° Search Tour through Benrath Palace is a student project that was developed in the context of the subject "360° Videos" in cooperation with the University of Applied Sciences Düsseldorf and Benrath Palace.


## Result of the project
The project result is a basic executable version of *Geoguessing Schloss Benrath*. To improve the usability, the stability and the scope of the game further iterations are planned.


## Structure of the project
The project consists of a web application built in [3DVista](https://www.3dvista.com/) and a front-end application built using [Next.js](https://nextjs.org/).
For external data storage, we use the CDN service provided by [Cloudinary](https://cloudinary.com/).


## Goal of the game
Inspired by the browser-based online game [GeoGuessr](https://www.geoguessr.com/), *Geoguessing Schloss Benrath* is about searching for various historical objects in the castle in a race against time. The objects can be discovered by navigating through the rooms and uncovering them by clicking on them. To help the player, preview images of the objects to be found can be displayed. If an object is found successfully, the stopwatch is paused and the player has the possibility to view an information text and further detailed pictures of the object.

---

# Technical information
In the following section you will find information that is of interest for development work.


## Start test environment
To view the latest development status it is necessary to perform the following steps:
1. clone project via Git
2. run `npm install
3. to start the development instance `npm run dev` must be executed


## Creating a Production Build
To create a production build follow the instructions below:
1. clone project via Git
2. run `npm install
3. `npm run build` to create the production build
4. `npm run start` to start the previously created production build


## How it works: 3DVista and Next.js
3DVista was used to:
- enable navigation between 360° shots
- the clickable minimap function

Next.js was used to:
- create the index page
- create the player name input
- create the timer and point logic
- render individual parts of the HUD


## Communication: 3DVista and Next.js
The 3DVista application was embedded in a Next.js application so that there are better specialization options when designing the front end. The design options in 3DVista are very limited and little to no responsive.
The actual communication between the two sub-applications works via events that are triggered in 3DVista and to which the Next.js application then reacts.


## Documentation of 3DVista Events
The events thrown in 3DVista are documented in the [Github Wiki](https://github.com/jkimmeyer/geoguessing-schloss-benrath/wiki) of this repository

---

# Changelog
**Version 1.0.0** *(Planned for 14.03.2023)*
First official release of Geoguessing Schloss Benrath

---

# Get in Contact
- [jkimmeyer](https://github.com/jkimmeyer)
- [toec3182](https://github.com/toec3182)