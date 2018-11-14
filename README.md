# Lucky Professionals Nutshell

The Nutshell website is where individual users can see their profile, tasks, events, articles and messages on a single webpage. Users of the API can GET/POST/PUT/DELETE information to and from the database for selected categories.
-----

## Software Requirements
- [npm](https://www.npmjs.com/)

-----

## Basic Project Setup
- To clone the project down, run  ```git clone [repo link]```
- Run ```npm init``` from the src/lib directory. Keep pressing enter using all of the prompts are gone.
- Next, while in the src/lib directory, run the following command to install all dependencies: ```npm i load-grunt-config grunt-contrib-watch grunt-eslint grunt grunt-http-server grunt-bg-shell -D```
- Once npm has been initialized, run ```grunt``` from the src/lib directory in order to run http-server, browserify and additional dependencies.
- In a seperate terminal window, navigate to the api directory and run ```json-server -w database.json``` which will initiate the connection to the JSON database.
-----

## Entity Relationship Diagram
![LUCKY PROFESSIONALS ERD](api\nutshellERD.png "Lucky Professionals ERD")

-----

## Credits
### Team Lead
- [Sam Webber](https://github.com/buffard)

### Software Developers
- [Noah Woods](https://github.com/noahwoods)
- [John Wood](https://github.com/johnnathanwood)
- [Andy Herring](https://github.com/Andrew-Herring)
- [Richard Lancaster](https://github.com/rjlancaster)

### Many thanks to Jenna Solis!

<p align="center">&copy; 2018 Lucky Professionals</p>