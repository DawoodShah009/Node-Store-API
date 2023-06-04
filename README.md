# Store-API (/api/v1/products)

Welcome to my Node.js project! This project is built using Node.js, Express, Mongoose, and utilizes npm for package management. In this project, I have created an API where I have handled multiple queries necessary for a store like:

1. Searching by name(and for name I have used $regex feature of MongoDB which checks if name provided matches any substring in the name).
2. Search by company name.
3. Filtering whether certain products are featured or not.
4. Sorting the values on the provided fields.
5. Selecting certain fields.
6. Limiting the products displayed.
7. Accessing a certain page.

# QUERY Fields

'featured, company, name, sort, fields, numericFilters'                     
/api/v1/products?name=<productName> i.e. /api/v1/products?name=armchair                    
/api/v1/products?company=<companyName> i.e. /api/v1/products?company=marcos                      
/api/v1/products?sort=<filedName(s)> i.e. /api/v1/products?sort=name,price                      
/api/v1/products?fields=<fieldName(s)> i.e. /api/v1/products?fields=name,price,company                 
/api/v1/products?NumericFilters=<fieldName(s)(>|<|=|>=|<=)value> i.e /api/v1/products?NumericFilters=price<1000,rating>4          

You can combine multiple filters to your desire.

Below you'll find some useful information and links to documentation for commonly used npm commands.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository:
   git clone https://github.com/DawoodShah009/Node-Store-API.git

2. Install project dependencies:
   npm install

## Available Scripts

In the project directory, you can run the following npm scripts:

### `npm install`

Installs all the project dependencies specified in the `package.json` file. This command should be run before running the project for the first time or when there are changes to the dependencies.

[Learn more about `npm install`](https://docs.npmjs.com/cli/v7/commands/npm-install)

### `npm start`

Starts the Node.js application. This command typically runs the `app.js` file or the entry point specified in the `package.json` file.

[Learn more about `npm start`](https://docs.npmjs.com/cli/v7/commands/npm-start)

### `npm start`

Starts the development server with hot reloading. I have used nodemon which keeps an eye over the changes made in the file and restart the server automatically.
An alternate for this command is 'npm run dev'
[Learn more about `npm run dev`](https://docs.npmjs.com/cli/v7/commands/npm-run-script)

## Additional Resources

For more information about npm and its commands, you can refer to the official npm documentation:

- [npm Documentation](https://docs.npmjs.com/)
