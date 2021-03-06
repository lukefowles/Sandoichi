import {createSlice} from "@reduxjs/toolkit";
import beef from "../img/img/beef.png"
import salmon from "../img/img/salmon.png"
import chicken from "../img/img/chicken.png"
import bacon from "../img/img/bacon.png"
import shrimp from "../img/img/shrimp.png"
import custom from "../img/img/custom.png"
import cajun from "../img/img/cajun.png"
import kale from "../img/img/kale.png"
import coleslaw from "../img/img/coleslaw.png"
import fruit from "../img/img/fruit.png"
import sweet from "../img/img/sweet.png"
import soup from "../img/img/soup.png"
import apple from "../img/img/apple.png"
import ginger from "../img/img/ginger.png"
import coffee from "../img/img/coffee.png"
import cocoa from "../img/img/cocoa.png"
import tea from "../img/img/tea.png"
import pimms from "../img/img/pimms.png"

export const productsSlice = createSlice({
    name: "sandwiches",
    initialState:{ sandwichList :{
           1: {
                id: 1,
                type: "sandwich",
                name: "Roast Beef & Horseradish",
                price: 4.95,
                src: beef
            },
           2: {
                id: 2,
                type: "sandwich",
                name: "Smoked Salmon & Avocado",
                price: 5.15,
                src: salmon
            },
           3: {
                id: 3,
                type: "sandwich",
                name: "Coronation Chicken",
                price: 4.55,
                src: chicken
            },
           4: {
                id: 4,
                type: "sandwich",
                name: "Bacon, Lettuce & Tomato",
                price: 4.25,
                src: bacon
            },
           5: {
                id: 5,
                type: "sandwich",
                name: "Prawn Cocktail",
                price: 4.25,
                src: shrimp
            },
           6: {
                id: 6,
                type: "sandwich",
                name: "Custom Sandwich",
                price: 5.15,
                src: custom
            }
        },
        sideList: {
           1: {
                id: 1,
                type: "side",
                name: "Cajun Wedges",
                price: 3.75,
                src: cajun
            },
           2: {
                id: 2,
                type: "side",
                name: "Kale crisps",
                price: 2.15,
                src: kale
            },
           3: {
                id: 3,
                type: "side",
                name: "Coleslaw",
                price: 3.15,
                src: coleslaw
            },
           4: {
                id: 4,
                type: "side",
                name: "Fruit Salad",
                price: 2.99,
                src: fruit
            },
           5: {
                id: 5,
                type: "side",
                name: "Sweet Potato crisps",
                price: 2.15,
                src: sweet
            },
           6: {
                id: 6,
                type: "side",
                name: "Soup",
                price: 3.45,
                src: soup
            }
        },
        drinkList: {
            1: {
                id: 1,
                type: "drink",
                name: "Freshly pressed apple juice",
                price: 3.75,
                src: apple
            },
            2: {
                id: 2,
                type: "drink",
                name: "Homemade Ginger Beer",
                price: 2.15,
                src: ginger
            },
            3: {
                id: 3,
                type: "drink",
                name: "Fairtrade filter coffee",
                price: 3.15,
                src: coffee
            },
            4: {
                id: 4,
                type: "drink",
                name: "Fairtrade hot chocolate",
                price: 2.99,
                src: cocoa
            },
            5: {
                id: 5,
                type: "drink",
                name: "Organic earl grey",
                price: 2.15,
                src: tea
            },
            6: {
                id: 6,
                type: "drink",
                name: "0% fruit punch",
                price: 3.45,
                src: pimms
            }
        }
    }
})

export default productsSlice.reducer;