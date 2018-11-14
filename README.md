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

### Install

To initialize the database:



#### Home

Displays the 20 latest products in the Bangazon warehouse!

#### Login / Register

#### Categories

* `http://localhost:8080/categories`: all product types are rendered to DOM in individual cards with only 3 products listed (if product type has 3 or more products)
* `http://localhost:8080/categories/<product_type_id>`:
  * Redirected when user clicks on any product card
  * Renders all products for specified `product_type_id`
  * Anchor tags for each product title redirects page to further product info (`http://localhost:8080/products/<product_id>`)

#### Products

* In the browser, proceeding to `http://localhost:8080/products/:id`, where :id is an integer, will display a products detail page for an individual product.
* `http://localhost:8080/search?keywords=search`: In the search input, submitting text with the `Enter` key will display a results page listing matching products OR display a message 'Sorry no products found...'.

#### Account

* Opens page displaying account info and the ability to edit the users saved information.
  * This page also contains a button that links to previous orders
    * Each order is a link that contains the products associated with and the total price of the order
  * This page also contains controls to add and delete payment types.

#### Inventory `/inventory/`

Leads to the current user's inventory of products they are selling. Can only be accessed by a logged in user.

* Selecting the `delete` button next to a product will remove the product from the user's inventory and the database. The inventory page updates immediately.

#### Sell a Product `/inventory/add`

Presents form for authenticated user to POST a new product to their inventory/`products` table

* Product Form will only be submitted when all fields all filled.
* Page will redirect to `/inventory`, where newly added product will be listed with user inventory

#### Cart

* Opens page displaying cart info and the ability to edit the users active order.
  * Each product title is a link that proceeds to the product's details.
  * This page also contains controls delete products from an active order.

+ `Clear Cart` removes all products from cart (deleting all rows match `order_id` in `order_product` table)
