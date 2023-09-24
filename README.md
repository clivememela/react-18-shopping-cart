# Simple Shopping Cart

## Lessons

1. create react application
   1. npx create-react-app
   2. remove exxtra files
2. create website layout
   1. add Header, Main and Basket component
   2. Style component
3. create Main component
   1. create data.js
   2. render product items
4. create product component
   1. create product divs
   2. pass props to product component
5. Implement cart
   1. add and remove items from the cart
6. create basket componet
   1. list items in cartItems
   2. calculate sub total
   3. show checkout button
7. save cart items in local storage
   1. save items in local storage on add and remove
   2. use useEffect to get items in local storage
8. use useTransition and useDeferedValue hooks(react18 features)
   1. read items in local storage using useTransition
   2. change cartItems.length to transition effect
9. Deploy website on gitHub pages
   1. log into gitjHub
   2. push code to gitHub
   3. npm install gitHub pages (gh-pages) save (--save-dev)
   4. package.json "homepage": "https://github_name.github.io/webapp_name",
   5. add deployment script : "predeploy": "npm run build", "deploy": gh-pages -d build,
   6. npm run deploy

