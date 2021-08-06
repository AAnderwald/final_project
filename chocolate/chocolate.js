'use strict';
let countW = 0;
let countM = 0;
let countD = 0;


// white chocolate button
  let buttonOne = document.getElementById('wcOutput');
  let messageOne = [
    "White chocolate is made of cocoa butter and dairy milk. The cocoa butter comes from the cocoa bean, as does all chocolates. It has a pale ivory color and has a buttery, milky sweet taste.", 
    "To determine if it can be called white chocolate it must contain at least 20% cocoa fat, at least 3.5% milk fat, and at least 14% total milk solids. It cannot contain more than 55% nutritive carbohydrate sweetener.", 
    "Even though the word chocolate is in white chocolate it is not in fact actual chocolate. To be considered chocolate it must contain cocoa solids, but as seen before white chocolate does not contain any. Going through a lengthy process the bean finally grounded into a paste called liquor.This liquor is divided into cocoa solids and cocoa butter.", 
    ""];
  function goOne(g){  
    buttonOne.innerHTML = messageOne[countW];
    if (countW == messageOne.length -1){
      countW = 0 
    } 
    else{
        countW++;
      } 
  } document.getElementById('wcBtn').addEventListener('click', goOne);


// milk chocolate button
  let buttonTwo = document.getElementById('mcOutput');
  let messageTwo = [
    "Milk chocolate is made by way of combining cocoa solids in cocoa butter.  It is blended with milk for a mild, creamy flavor.", 
    "Usually milk chocolate has 10% chocolate liquor with an additional percentage of pure cocoa solids; though in Europe milk chocolate must contain at least 25% cocoa solids.  It has around 12% milk solids and 3.7% is composed of milkfat. Sugar and vanilla are added to make the chocolate creamy and enhances the flavor. Sometimes condensed milk or powdered milk is used.", 
    "Making milk chocolate is made in three main stages: First, the milk ingredients and sugar and blended and gently mixed with chocolate liquor and cocoa powder. Second, the mixture is dried until it a milk chocolate crumbly powder. Third, it stage is called ‘conching’: this means carefully mixing all the ingredients together. The temperature starts low as it starts mixing, very slowly the temperature is raised to help it dry and develop it's delicate flavors.", 
    ""];
  function goTwo(g){  
    buttonTwo.innerHTML = messageTwo[countM];
    if (countM == messageTwo.length -1){
      countM = 0 
    } 
    else{
        countM++;
      } 
  } document.getElementById('mcBtn').addEventListener('click', goTwo);


// dark chocolate button
  let buttonThree = document.getElementById('dcOutput');
  let messageThree = [
    "Dark chocolate is chocolate that does not have any added milk solids. The higher percentage of cocoa is what creates a darker chocolate with a richer and more intense flavor.", 
    "For dark chocolate the basic ingredients are cacao beans, sugar, an emulsifier to preserve texture, and a flavorings (vanilla). The more cocoa in the dark chocolate and the less sugar the more bitter it will taste. This gives it a more pronounced real chocolate taste compared to white and milk chocolate. Without the milk additives the dark chocolate is likely to dry and become a chalky texture with a bitter aftertaste.", 
    "There are different types of dark chocolate depending on the percentage of cocoa solids it has. Three types are bittersweet, semi-sweet, and sweet dark chocolate. The cocoa content can range from 30 percent (sweet dark chocolate) to 80 percent (extremely dark, bitter chocolate.) The higher the percentage indicates a more bitter taste.", 
    ""];
  function goThree(g){  
    buttonThree.innerHTML = messageThree[countD];
    if (countD == messageThree.length -1){
      countD = 0 
    } 
    else{
        countD++;
      } 
  } document.getElementById('dcBtn').addEventListener('click', goThree);






// recipe section 

  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const overlay = document.getElementById('overlay')

  let countdd = 0;
  let stories = [
      "RASPBERRY WHITE CHOCOLATE MOUSSE First: Put 10oz thawed raspberries in a blender, strain into a small bowl, and discard seeds. Add 2 tbsp sugar equal amount orange liqueur, and stir until sugar dissolves. Second: In heavy saucepan, low heat, warm 1/4 c heavy cream and 6 oz white chocolate, stir constantly until chocolate melts. Let cool until lukewarm. Stir in 1 tbsp of raspberry sauce, and 1 drop food coloring. Transfer to a large bowl. Third: In medium bowl, whip remaining 1 1/2 c heavy cream to soft peaks. Fold into melted chocolate mixture, one-third at a time, until no streaks remain.Fourth: Layer into parfait dishes, and serve with the sauce.", 
      "WHITE CHOCOLATE FUDGE WITH CRANBERRIES AND CANDIED CITRUS  Lightly brush a standard 9-by-5-inch loaf pan with butter, then line in both directions with parchment. In medium saucepan over medium heat, cook 12oz white chocolate, 14 oz sweetened condensed milk, and ¼ tsp salt. Stir until chocolate melts and mixture is smooth. Remove from heat; add 3/4 c cranberries, ½ c finely chopped candied citrus peel, and ¼ tsp ground cardamom. Pour mixture into the loaf pan. Refrigerate until firm, about 5 hours. ", 
      "WHITE CHOCOLATE HAZELNUT TARTS Preheat oven to 450°. Roll pie dough into a 14-inch circle. Cut 4 5-inch circles from dough; press each circle into a 4-inch tart pan with removable bottom. Pierce bottom and sides of dough; bake at 450° for 12 minutes or until golden. While crusts is baking, combine 1 1-oz package white chocolate instant pudding mix and 1 ½ cup milk, whisk for 2 minutes. Spread 1 tablespoon chocolate-hazelnut spread over bottom of each warm crust. Spoon pudding mixture evenly over hazelnut spread. Chill in refrigerator for at least 30 minutes. Sprinkle tarts with hazelnuts and chocolate shavings, if desired. ", 
      "MILK CHOCOLATE CARAMEL BROWNIES Place 14 oz caramel in a microwave-safe bowl. Stir in 1/2 cup evaporated milk. Heat and stir until caramel is melted. Preheat oven to 350 degrees F and grease a 9x13 inch pan. In large mixing bowl, mix together German chocolate cake mix, 1/3 c evaporated milk, ¾ c melted butter, and 1/4 c chopped pecans. Place 1/2 of the batter in prepared baking pan.  Bake for 8 minutes.  Place remaining batter into the fridge. Remove brownies from oven and sprinkle 2 c chocolate chips on top, drizzle caramel sauce over chocolate chips. Remove brownie mix from refrigerator. Make small balls with batter and smash flat. Carefully, place on top of the caramel sauce until the top is completely covered. Bake for an additional 20 minutes. Remove and let cool.",
      "WARM MILK CHOCOLATE CROISSANT BREAD PUDDING  Preheat the oven to 350°. In medium saucepan, combine 3 c whole milk and ½ of a vanilla bean and seeds, and ¼ tsp salt and bring to a simmer. Cover and let milk stand off the heat for 15 minutes. Discard the vanilla bean. Add 6 oz milk chocolate, chopped, to the warm milk and whisk until smooth. Let the cool for 15 minutes. Whisk in the 6 large eggs. In a 9-by-13-inch baking dish, toss 6 large croissants, cut into 1-inch pieces, and 6 oz chopped milk chocolate. Pour chocolate custard over the croissant pieces, press lightly to submerge croissant into the custard. Bake 30 minutes, until the bread pudding is risen and set. Cool slightly, then cut it into squares and serve warm, with ice cream",    
      "MILK CHOCOLATE TOFFEE TURTLE SQUARES Preheat oven to 350°. Line a 13x9-in. baking pan with parchment, letting ends extend up sides. Beat 2 C flour, 1 cup brown sugar and 1/2 cup butter until well blended (will be dry and crumbly). Firmly press into prepared pan. Sprinkle 1 ½ C pecans over flour mixture. In small saucepan, combine ½ C brown sugar and ½ c plus 3 tbsp of butter. Bring to boil over medium heat, until sugar is dissolved, stir constantly, about 1 minute. Carefully pour mixture over pecans. Bake until bubbly and edges start to brown, 15-20 minutes. Remove from oven. Immediately sprinkle with 1 ½ c milk chocolate chips. Let stand until chocolate begins to melt; spread evenly. Cool completely.  Lifting with parchment, remove from pan. Cut into squares. ", 
      "SALTED DARK CHOCOLATE POPCORN  In medium pot, heat 1 tbsp grapeseed oil and 3 popcorn kernels of popcorn, covered, over medium heat until all 3 kernels pop. Pour 1/3 c popcorn kernels, cover pot shake to distribute.  Shake pan occasionally as the popcorn pops, immediately remove from heat once the popping slows to 2-3 seconds between pops. Pour into large bowl, remove un-popped kernels you see. Line a rimmed baking sheet with parchment paper.  Place 4 oz dark chocolate and 1/2 teaspoon salt in a microwave-safe bowl. Heat in 30-second increments until chocolate is very soft and becomes completely liquid when stirred gently. Immediately pour over popcorn and stir to coat as thoroughly. Spread evenly on baking sheet and sprinkle with 1/4 teaspoon salt. Let sit at room temperature until chocolate has hardened, about 1 hour. Keeps for up to 3 days in an airtight container.", 
      "DARK CHOCOLATE SOUFFLE Put oven rack to lower middle position. Preheat oven to 400°F. Coat eight 1- cup ramekins with butter, then coat with granulated sugar, tap out excess.  Medium microwave safe bowl, melt 10 oz dark chocolate and 6 tbsp butter, heat in 30 second increments stirring between until completely melted. Whisk in 6 egg yolks, 1/8 tsp salt, and ¼ tsp vanilla extract. Separate bowl with mixer, beat 6 egg whites with ½ tsp cream of tarter on high speed until soft peaks form. Slowly add 6 tbsp granulated sugar one tablespoon at a time. Beat until egg whites hold stiff peaks and appear glossy. Whisk a quarter of the egg whites into the chocolate mixer to lighten batter. Fold in remaining egg whites in 2 additions. Divide batter amongst ramekins, filling each almost to rim. Wipe excess batter from rim. Bake until soufflés are puffed and center moves only slightly when dish is shaken gently, about 11-13 minutes. Dust top with powdered sugar and serve immediately.", 
      "DARK CHOCOLATE FONDUE In large saucepan over medium-low heat, warm 2 c heavy cream until hot, but not simmering. Add 24 oz dark chocolate (chopped) and stir just until melted and smooth. Remove from heat and stir in 1 tbsp vanilla. Pour the chocolate fondue into the fondue pot and set it up over the heat. (If you don’t have a fondue pot, you can put the pot on the table, warn everyone that the pot is hot. Rewarm it over very low heat as needed.) Serve with your choice of the selected dippers. i.e. apples, strawberries, marshmallows, graham crackers, pretzels, rice krispie treats, bacon, potato chips, and cake balls", 
  ]; 


  openModalButtons.forEach(button => {
    button.addEventListener('click', (go) => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
      document.querySelector (".modal-body").textContent = stories[countdd]
      if (countdd == stories.length-1){
        countdd = 0
      }
        else{
          countdd++;
        }
      if (modal == null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    
  }

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }




