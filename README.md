# &Open Tech Test
React app built for &Open interview process.

Displays a chart analysing cost of providing all users in userData.json with a €5 coupon in their birthday month.
List of users is also displayed in a table.
List of users can be filtered based on Spend, Region or Gender, with the chart & table updating accordingly.


Built using Create React App. 
Chart uses chart.js & react-chartjs-2 (react wrapper for chart.js)
Table uses antd component library
In the interest of time, the filters also use components from antd (Slider, Select & Radios)
Since it is a small app with minimal state, I decided to use [https://reactjs.org/docs/context.html](React Context) instead of Redux.
Testing is done using Jest snapshot testing

# Get Started
clone the app
`git clone https://github.com/colin5530/andopen-tech-test.git`

install dependencies
`yarn install`

run the app
`yarn start`

This should run the app and open it in the browser at [http://localhost:3000](http://localhost:3000)


# Testing
Run tests with
`yarn test`

