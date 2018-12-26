### Overview
Before I started the project, I spent time looking over and sketching the component breakdown and figuring out the JSON data layout.
![Tux, the Linux mascot](https://raw.githubusercontent.com/ToaIgnika/ng-project-test/master/src/assets/img/sketch.jpg)

The assigned requirement looked pretty simple in the beginning but quickly became a challenge since I have no prior experience with Material or FlexLayout (I was working with Bootrap 4 for all of my projects). Learning to use and style Material components was the biggest challenge for me in the project. 

First, I dumped all the required Material components in one app component just to create a bare-bone structure. Then, I slowly started to style each component one by one to look similar to the required design. I created and connected all the necessary dummy data with http services. Once app looked somewhat OK,I started taking out elements into separate components. Finally, I started styling the app to match as many details in the screenshot as possible (grey fonts, shadows, element alignment, icons). Another challenge was to make the navigation responsive. It took some time to test and come up with the logic, but in the end it worked (sometimes page needs to be refreshed after resizing in developer mode).


### Timeline: 

- 23/12: 3 hours
Created the project, installed all necessary dependancies from Material and Flexbox, created simple routing, built barebone layout using material nad created/populated sample json data
- 24/12: 4 hours
Created services for data, modified the table to display the data, changed the stylesheet, created separate component for the overview tab, created filters
- 25/12: 8-10 hours 
Restructured the navigation and content components, added custom icons, made navigation and search elements responsive, finilized the styling of the layout

Total time = ~18-20h
