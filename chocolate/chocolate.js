'use strict';
let count = 1;
let countM= 1;
let countD= 1;

// white chocolate button

let out = document.getElementById('wcOutput');
let message;

function go(e){
    e.preventDefault();
        if(count > 0) {message = `White chocolate is made of cocoa butter and dairy milk. 
        The cocoa butter comes from the cocoa bean, as does all chocolates. 
        It has a pale ivory color and has a buttery, milky sweet taste.`;}
        if(count > 1) {message = `To determine if it can be called white chocolate it must contain 
        at least 20% cocoa fat, at least 3.5% milk fat, and at least 14% total milk solids.  
        It cannot contain more than 55% nutritive carbohydrate sweetener.`; }
        if(count > 2) {message = `Even though the word "chocolate" is in white chocolate it is not in fact actual chocolate.
        To be considered chocolate it must contain cocoa solids, but as seen before white chocolate does not contain any.
        Going through a lengthy process the bean finally grounded into a paste called liquor.
        This liquor is divided into cocoa solids and cocoa butter.`;}
        out.innerHTML = message;
        console.log(count)
        count ++;
} document.getElementById('wcBtn').addEventListener('click', go);

// milk chocolate button


let outTwo = document.getElementById('mcOutput');
let messageTwo;

function goTwo(f){
    f.preventDefault();
        if(countM > 0) {messageTwo = ` Milk chocolate is made by way of combining cocoa solids in cocoa butter.  It is blended with milk for a mild, creamy flavor`;}
        if(countM > 1) {messageTwo = ` Usually milk chocolate has 10% chocolate liquor with an additional percentage of pure cocoa solids; though in Europe milk chocolate must contain at least 25% cocoa solids. 
        It has around 12% milk solids and 3.7% is composed of milkfat. Sugar and vanilla are added to make the chocolate creamy and enhances the flavor. 
        Sometimes condensed milk or powdered milk is used.`; }
        if(countM > 2) {messageTwo = ` Making milk chocolate is made in three main stages:
        First, the milk ingredients and sugar and blended and gently mixed with chocolate liquor and cocoa powder. 
        Second, the mixture is dried until it a milk chocolate crumbly powder.
        Third, it stage is called ‘conching’: this means carefully mixing all the ingredients together.
        The temperature starts low as it starts mixing, very slowly the temperature is raised to help it dry and develop it's delicate flavors.`;}
        outTwo.innerHTML = messageTwo;
        countM ++;
} document.getElementById('mcBtn').addEventListener('click', goTwo);


// dark chocolate button

let outThree = document.getElementById('dcOutput');
let messageThree;

function goThree(g){
    g.preventDefault();
        if(countD > 0) {messageThree = ` Dark chocolate is chocolate that does not have any added milk solids. 
        The higher percentage of cocoa is what creates a darker chocolate with a richer and more intense flavor. `;}
        if(countD > 1) {messageThree = ` For dark chocolate the basic ingredients are cacao beans, sugar, an emulsifier to preserve texture, and a flavorings (vanilla). 
        The more cocoa in the dark chocolate and the less sugar the more bitter it will taste. This gives it a more pronounced real chocolate taste 
        compared to white and milk chocolate.
        Without the milk additives the dark chocolate is likely to dry and become a chalky texture with a bitter aftertaste.`; }
        if(countD > 2) {messageThree = ` There are different types of dark chocolate depending on the percentage of cocoa solids it has. 
        Three types are bittersweet, semi-sweet, and sweet dark chocolate. 
        The cocoa content can range from 30 percent (sweet dark chocolate) to 80 percent (extremely dark, bitter chocolate.) 
        The higher the percentage indicates a more bitter taste. `;}
        outThree.innerHTML = messageThree;
        countD ++;
} document.getElementById('dcBtn').addEventListener('click', goThree);