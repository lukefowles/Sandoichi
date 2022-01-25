# Sandoichi

Sandoichi is a prototype sandwich ordering app which allows for the purchase and customisation of gourmet sandwiches along with drinks and sides. 

## Mininum Viable Product

- User authentication, authorisation and sign up.
- Users can order sandwiches, sides and drink, with free choice on sandwich bread, filling and salad.
- Once the order is confirmed the order will be added to the basket.
- Users able to confirm their order.
- Add user details and delivery details on checkout, and users will be added to the database along with their orders.

## Extensions to MVP

- Stock. A limit to the number of items on any one day. So that if an item runs out it is removed as a choice.
- Testing (front and back)
- Save custom sandwiches to a user.

## Tech stack

For this project we wanted an opportunity to explore non-relational databases and we will use MongoDB (atlas). We are also going to implement a Node/Express server-side with JOI and JSON webtoken for authentication and authorisation. ORM will be handled by Mongoose for connection between the database and server-side.

On the client-side, we will use the React library alongside react redux for state management. 





