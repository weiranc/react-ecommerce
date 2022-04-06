# E-Commerce Application

E-Commerce application that allows users to purchase a list of products. Features implemented for this release focus on the client experience which enables customers to search, add to cart, and checkout. User authentication and product details with reviews, wishlist, and Q&A sections are potential features for future releases. 

This application:
* Use a modern JS library/framework: React
* Include user interactions such as viewing product list and product details, searching products, adding or removing a product to/from a shopping cart, and initiating the checkout process  
* Utilize MVC architectural pattern
* Integrate with a node server with CRUD operations
* Integrate with Firebase API and Stripe API
* Utilize MUI components, e.g., Grid, Drawer, AppBar, Box, Toolbar, Typography, InputBase, Badge, Card, Button, Rating, Modal, and List
* Create reusable product component and cart component 

## Table of Contents

1. [Installation](#installation)
2. [Technologies](#technologies)
3. [Component Details](#component-details)
4. [UI Design](#ui-design)
5. [Realtime Database](#realtime-database)
6. [Online Payment](#online-payment)

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/your_username/react-ecommerce.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Update `.env` file based on `.env.example`
4. Run webpack

   ```sh
   npm start
   ```
5. Connect to server

   ```sh
   npm run server

## Technologies

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org)
* [Node](https://nodejs.dev/)
* [ExpressJS](https://expressjs.com/)
* [Webpack](https://webpack.js.org/)
* [MUI](https://mui.com/)
* [Firebase](https://firebase.google.com/)
* [Stripe](https://stripe.com)
* [Figma](https://www.figma.com)

## Component Details

### Filter products by category

This component will guide the customer through selecting a specific category. 

![filter](https://user-images.githubusercontent.com/91348196/158701389-261c0f6f-95d6-4303-b450-5e9a99fd5c91.gif)

### View product details

General information about the product will be displayed at the top of the product list, including star rating, product category, product title, price, and product description. 

![product info](https://user-images.githubusercontent.com/91348196/158701321-a7c26b1a-23aa-49b1-bc4a-7625a8f3a834.gif)

### Search product

Users are able to filter the products for any that contain text matching the search term. The filter continues to update as the user adds or removes characters.

![search](https://user-images.githubusercontent.com/91348196/158701426-bcf3b354-84b3-454c-a8b0-2007e4663293.gif)

### Add product to cart

Users are able to add products to their carts.

![add](https://user-images.githubusercontent.com/91348196/158701565-3d525d15-ecd7-4302-92cc-30f2a12c733e.gif)

### Modify shopping cart

Users are able to modify the quantity of the products selected into the user's cart.

![modify](https://user-images.githubusercontent.com/91348196/158701371-95b61dae-0220-4bd8-b74a-4d4a7200a20b.gif)

### Checkout

Users are able to checkout by providing billing info. 

![checkout](https://user-images.githubusercontent.com/91348196/158728338-b99eff01-5386-4f45-b115-67ae1368d916.gif)

## UI Design

The web-based interface was designed using Figma. 

![UI](https://user-images.githubusercontent.com/91348196/159056986-29984f5c-3b94-47e5-870f-4b8fe3eb6392.png)

## Realtime Database

All the product and cart data are stored in realtime with the Firebase Realtime Database. Data is stored as JSON and synchronized to every connected client. All clients share one Realtime Database instance and automatically receive updates with the newest data.

## Online Payment

This application integrates payment gateways to accept payment online. The payment connects to the Stripe payment API. After users enter detailed info into the checkout form, the application will send the detailed info to the Stripe API. 
