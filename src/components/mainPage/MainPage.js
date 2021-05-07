import React, { useEffect, useState } from 'react'
import MainPageLayout from '../../hoc/MainPageLayout/MainPageLayout'
import CardsGrid from './CardsGrid/CardsGrid'
import MobileAppBanner from './MobileAppBanner/MobileAppBanner'

import { motion } from 'framer-motion'
import { slideAnimationConfig } from '../../animation/animationConfig'
import CookieLoading from '../CookieLoading/CookieLoading'

function MainPage() {
  const [recipies, setRecipies] = useState([])
  const [loading, setLoading] = useState(!recipies.length)
  const [showLoading, setShowLoading] = useState(!recipies.length)


  useEffect(() => {
    document.body.style.overflowY = "hidden"
    
    const recipiesJSON = [ {
      "category": [
        {
          "id": 4.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 5.0,
          "name": "Eggs"
        }
      ],
      "date": "2021-01-24T01:52:54.410379",
      "id": 2.0,
      "images": [
        {
          "id": 2.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7270895.jpg"
        },
        {
          "id": 3.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8341136.jpg"
        },
        {
          "id": 4.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8347183.jpg"
        },
        {
          "id": 5.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7964558.jpg"
        },
        {
          "id": 6.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8487107.jpg"
        },
        {
          "id": 7.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8568748.jpg"
        },
        {
          "id": 8.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7598141.jpg"
        },
        {
          "id": 9.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7933928.jpg"
        },
        {
          "id": 10.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7270900.jpg"
        },
        {
          "id": 11.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7534221.jpg"
        },
        {
          "id": 12.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7604614.jpg"
        },
        {
          "id": 13.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7909403.jpg"
        },
        {
          "id": 14.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7909070.jpg"
        },
        {
          "id": 15.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8140920.jpg"
        },
        {
          "id": 16.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7326232.jpg"
        },
        {
          "id": 17.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7401175.jpg"
        },
        {
          "id": 18.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7301396.jpg"
        },
        {
          "id": 19.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7518048.jpg"
        },
        {
          "id": 20.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7684635.jpg"
        },
        {
          "id": 21.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7598133.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 6.0,
          "name": "cup Greek yogurt, at room temperature",
          "quantity": 1
        },
        {
          "id": 7.0,
          "name": "clove garlic",
          "quantity": 1
        },
        {
          "id": 8.0,
          "name": "¼ teaspoon salt, or to taste  (Optional)",
          "quantity": null
        },
        {
          "id": 9.0,
          "name": "½ teaspoon freshly ground black pepper",
          "quantity": null
        },
        {
          "id": 10.0,
          "name": "pinch cayenne pepper",
          "quantity": 1
        },
        {
          "id": 11.0,
          "name": "½ tablespoons finely chopped fresh dill, or to taste",
          "quantity": 2
        },
        {
          "id": 12.0,
          "name": "½ stick unsalted butter",
          "quantity": null
        },
        {
          "id": 13.0,
          "name": "¼ teaspoon ground cumin",
          "quantity": null
        },
        {
          "id": 14.0,
          "name": "½ teaspoon smoked paprika",
          "quantity": null
        },
        {
          "id": 15.0,
          "name": "tablespoon Aleppo chili flakes",
          "quantity": 1
        },
        {
          "id": 16.0,
          "name": "tablespoon chopped fresh parsley",
          "quantity": 1
        },
        {
          "id": 17.0,
          "name": "tablespoon diced jalapeno pepper",
          "quantity": 1
        },
        {
          "id": 18.0,
          "name": "pinch salt  (Optional)",
          "quantity": 1
        },
        {
          "id": 19.0,
          "name": "tablespoons olive oil  (Optional)",
          "quantity": 2
        },
        {
          "id": 20.0,
          "name": "tablespoon white vinegar, or as needed",
          "quantity": 1
        },
        {
          "id": 21.0,
          "name": "large eggs",
          "quantity": 4
        },
        {
          "id": 22.0,
          "name": "pinch sea salt",
          "quantity": 1
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 19.0,
          "measure": "g",
          "name": "protein",
          "quantity": 19.9
        },
        {
          "daily_value": "",
          "id": 20.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 8.6
        },
        {
          "daily_value": "",
          "id": 21.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 2.0
        },
        {
          "daily_value": "",
          "id": 22.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 5.3
        },
        {
          "daily_value": "",
          "id": 23.0,
          "measure": "g",
          "name": "fat",
          "quantity": 57.1
        },
        {
          "daily_value": "",
          "id": 24.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 24.6
        },
        {
          "daily_value": "",
          "id": 25.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 455.5
        },
        {
          "daily_value": "",
          "id": 26.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 3884.6
        },
        {
          "daily_value": "",
          "id": 27.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 3.7
        },
        {
          "daily_value": "",
          "id": 28.0,
          "measure": "mg",
          "name": "vitamin b6",
          "quantity": 0.4
        },
        {
          "daily_value": "",
          "id": 29.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 11.2
        },
        {
          "daily_value": "",
          "id": 30.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 63.4
        },
        {
          "daily_value": "",
          "id": 31.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 87.4
        },
        {
          "daily_value": "",
          "id": 32.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 5.6
        },
        {
          "daily_value": "",
          "id": 33.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 29.0
        },
        {
          "daily_value": "",
          "id": 34.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 305.8
        },
        {
          "daily_value": "",
          "id": 35.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 742.8
        },
        {
          "daily_value": "",
          "id": 36.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 37.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 514.2
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/277194/turkish-eggs-cilbir/",
      "steps": [
        {
          "id": 4.0,
          "name": "step 1",
          "text": " Spoon yogurt into a medium bowl. Grate in garlic and mix to combine. Season with salt, pepper, and cayenne. Add dill and mix thoroughly. Set aside at room temperature. "
        },
        {
          "id": 5.0,
          "name": "step 2",
          "text": " Melt butter in a saucepan over medium heat; heat until bubbles begin to burst. Add cumin, paprika, and chili flakes. Stir until color is uniform, then turn off heat and let spices infuse. "
        },
        {
          "id": 6.0,
          "name": "step 3",
          "text": " Grind parsley and jalapeno together in a mortar. Season with salt, drizzle in olive oil, and stir to combine. "
        },
        {
          "id": 7.0,
          "name": "step 4",
          "text": " Fill a large saucepan with 2 to 3 inches of water and bring to a boil. Reduce heat to medium low, pour in vinegar, and keep the water at a gentle simmer. Crack an egg into a small bowl then gently slip egg into the simmering water, holding the bowl just above the surface of water. Repeat with the remaining eggs. Cook eggs until the whites are firm and the yolks have thickened but are not hard, 2 1 2 to 3 minutes. Remove the eggs from the water with a slotted spoon, dab on a kitchen towel to remove excess water, and place onto a warm plate. "
        },
        {
          "id": 8.0,
          "name": "step 5",
          "text": " Dollop yogurt mixture onto serving plates. Use the back of a spoon to spread yogurt out into a bed for the eggs, carving ridges into the top to catch the oil. Drizzle on some jalapeno oil. Top with eggs and a spoonful or two of the Aleppo butter. Sprinkle sea salt on top. "
        },
        {
          "id": 9.0,
          "name": "step 6",
          "text": " You can use any other chili flakes in place of the Aleppo variety and, of course, use Turkish yogurt if available. "
        }
      ],
      "summary": [
        {
          "id": 6.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 25
        },
        {
          "id": 7.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 10
        },
        {
          "id": 8.0,
          "measure": "mins",
          "name": "total",
          "quantity": 35
        },
        {
          "id": 9.0,
          "measure": "",
          "name": "Servings",
          "quantity": 2
        },
        {
          "id": 10.0,
          "measure": "eggs",
          "name": "Yield",
          "quantity": 4
        }
      ],
      "title": "Turkish Eggs (Cilbir)"
    },
    {
      "category": [
        {
          "id": 6.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 7.0,
          "name": "Pancake Recipes"
        },
        {
          "id": 8.0,
          "name": "Banana Pancake Recipes"
        }
      ],
      "date": "2021-01-24T01:52:58.573893",
      "id": 3.0,
      "images": [
        {
          "id": 22.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4574310.jpg"
        },
        {
          "id": 23.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4856261.jpg"
        },
        {
          "id": 24.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4525422.jpg"
        },
        {
          "id": 25.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5607479.jpg"
        },
        {
          "id": 26.0,
          "slug": "https://images.media-allrecipes.com/userphotos/625704.jpg"
        },
        {
          "id": 27.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5495040.jpg"
        },
        {
          "id": 28.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5502097.jpg"
        },
        {
          "id": 29.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5555898.jpg"
        },
        {
          "id": 30.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3042197.jpg"
        },
        {
          "id": 31.0,
          "slug": "https://images.media-allrecipes.com/userphotos/461565.jpg"
        },
        {
          "id": 32.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4478561.jpg"
        },
        {
          "id": 33.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4494799.jpg"
        },
        {
          "id": 34.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2867331.jpg"
        },
        {
          "id": 35.0,
          "slug": "https://images.media-allrecipes.com/userphotos/370932.jpg"
        },
        {
          "id": 36.0,
          "slug": "https://images.media-allrecipes.com/userphotos/400772.jpg"
        },
        {
          "id": 37.0,
          "slug": "https://images.media-allrecipes.com/userphotos/391031.jpg"
        },
        {
          "id": 38.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3684985.jpg"
        },
        {
          "id": 39.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3236813.jpg"
        },
        {
          "id": 40.0,
          "slug": "https://images.media-allrecipes.com/userphotos/285204.jpg"
        },
        {
          "id": 41.0,
          "slug": "https://images.media-allrecipes.com/userphotos/333102.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 23.0,
          "name": "cup all-purpose flour",
          "quantity": 1
        },
        {
          "id": 24.0,
          "name": "tablespoon white sugar",
          "quantity": 1
        },
        {
          "id": 25.0,
          "name": "teaspoons baking powder",
          "quantity": 2
        },
        {
          "id": 26.0,
          "name": "¼ teaspoon salt",
          "quantity": null
        },
        {
          "id": 27.0,
          "name": "egg, beaten",
          "quantity": 1
        },
        {
          "id": 28.0,
          "name": "cup milk",
          "quantity": 1
        },
        {
          "id": 29.0,
          "name": "tablespoons vegetable oil",
          "quantity": 2
        },
        {
          "id": 30.0,
          "name": "ripe bananas, mashed",
          "quantity": 2
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 38.0,
          "measure": "g",
          "name": "protein",
          "quantity": 5.0
        },
        {
          "daily_value": "",
          "id": 39.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 29.2
        },
        {
          "daily_value": "",
          "id": 40.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 1.6
        },
        {
          "daily_value": "",
          "id": 41.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 8.9
        },
        {
          "daily_value": "",
          "id": 42.0,
          "measure": "g",
          "name": "fat",
          "quantity": 6.6
        },
        {
          "daily_value": "",
          "id": 43.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 1.2
        },
        {
          "daily_value": "",
          "id": 44.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 34.3
        },
        {
          "daily_value": "",
          "id": 45.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 142.6
        },
        {
          "daily_value": "",
          "id": 46.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 2.5
        },
        {
          "daily_value": "",
          "id": 47.0,
          "measure": "mg",
          "name": "vitamin b6",
          "quantity": 0.2
        },
        {
          "daily_value": "",
          "id": 48.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 3.5
        },
        {
          "daily_value": "",
          "id": 49.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 51.9
        },
        {
          "daily_value": "",
          "id": 50.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 123.6
        },
        {
          "daily_value": "",
          "id": 51.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 1.4
        },
        {
          "daily_value": "",
          "id": 52.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 21.0
        },
        {
          "daily_value": "",
          "id": 53.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 235.6
        },
        {
          "daily_value": "",
          "id": 54.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 245.9
        },
        {
          "daily_value": "",
          "id": 55.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.2
        },
        {
          "daily_value": "",
          "id": 56.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 59.7
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/20334/banana-pancakes-i/",
      "steps": [
        {
          "id": 10.0,
          "name": "step 1",
          "text": " Combine flour, white sugar, baking powder and salt. In a separate bowl, mix together egg, milk, vegetable oil and bananas. "
        },
        {
          "id": 11.0,
          "name": "step 2",
          "text": " Stir flour mixture into banana mixture; batter will be slightly lumpy. "
        },
        {
          "id": 12.0,
          "name": "step 3",
          "text": " Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1 4 cup for each pancake. Cook until pancakes are golden brown on both sides; serve hot. "
        }
      ],
      "summary": [
        {
          "id": 11.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 5
        },
        {
          "id": 12.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 10
        },
        {
          "id": 13.0,
          "measure": "mins",
          "name": "total",
          "quantity": 15
        },
        {
          "id": 14.0,
          "measure": "",
          "name": "Servings",
          "quantity": 6
        },
        {
          "id": 15.0,
          "measure": "pancakes",
          "name": "Yield",
          "quantity": 12
        }
      ],
      "title": "Banana Pancakes I"
    },
    {
      "category": [
        {
          "id": 9.0,
          "name": "Bread"
        },
        {
          "id": 10.0,
          "name": "Quick Bread Recipes"
        },
        {
          "id": 11.0,
          "name": "Biscuits"
        }
      ],
      "date": "2021-01-24T01:53:02.530405",
      "id": 4.0,
      "images": [
        {
          "id": 42.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5597310.jpg"
        },
        {
          "id": 43.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4553668.jpg"
        },
        {
          "id": 44.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3950886.jpg"
        },
        {
          "id": 45.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1675408.jpg"
        },
        {
          "id": 46.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2594495.jpg"
        },
        {
          "id": 47.0,
          "slug": "https://images.media-allrecipes.com/userphotos/23731.jpg"
        },
        {
          "id": 48.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4476002.jpg"
        },
        {
          "id": 49.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4499319.jpg"
        },
        {
          "id": 50.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4467669.jpg"
        },
        {
          "id": 51.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2279668.jpg"
        },
        {
          "id": 52.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4546782.jpg"
        },
        {
          "id": 53.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1675417.jpg"
        },
        {
          "id": 54.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5438657.jpg"
        },
        {
          "id": 55.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3540935.jpg"
        },
        {
          "id": 56.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4293930.jpg"
        },
        {
          "id": 57.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4316558.jpg"
        },
        {
          "id": 58.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2078884.jpg"
        },
        {
          "id": 59.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1915053.jpg"
        },
        {
          "id": 60.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5364909.jpg"
        },
        {
          "id": 61.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5353759.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 31.0,
          "name": "cups all-purpose flour",
          "quantity": 2
        },
        {
          "id": 32.0,
          "name": "tablespoon baking powder",
          "quantity": 1
        },
        {
          "id": 33.0,
          "name": "½ teaspoon salt",
          "quantity": null
        },
        {
          "id": 34.0,
          "name": "½ cup shortening",
          "quantity": null
        },
        {
          "id": 35.0,
          "name": "¾ cup milk",
          "quantity": null
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 57.0,
          "measure": "g",
          "name": "protein",
          "quantity": 3.2
        },
        {
          "daily_value": "",
          "id": 58.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 20.2
        },
        {
          "daily_value": "",
          "id": 59.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 0.7
        },
        {
          "daily_value": "",
          "id": 60.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 0.9
        },
        {
          "daily_value": "",
          "id": 61.0,
          "measure": "g",
          "name": "fat",
          "quantity": 10.9
        },
        {
          "daily_value": "",
          "id": 62.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 2.8
        },
        {
          "daily_value": "",
          "id": 63.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 1.5
        },
        {
          "daily_value": "",
          "id": 64.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 34.6
        },
        {
          "daily_value": "",
          "id": 65.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 2.1
        },
        {
          "daily_value": "",
          "id": 66.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 46.7
        },
        {
          "daily_value": "",
          "id": 67.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 81.1
        },
        {
          "daily_value": "",
          "id": 68.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 1.3
        },
        {
          "daily_value": "",
          "id": 69.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 7.8
        },
        {
          "daily_value": "",
          "id": 70.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 54.4
        },
        {
          "daily_value": "",
          "id": 71.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 225.0
        },
        {
          "daily_value": "",
          "id": 72.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.2
        },
        {
          "daily_value": "",
          "id": 73.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 97.7
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/20075/basic-biscuits/",
      "steps": [
        {
          "id": 13.0,
          "name": "step 1",
          "text": " Preheat oven to 450 degrees F (230 degrees C). "
        },
        {
          "id": 14.0,
          "name": "step 2",
          "text": " In a large mixing bowl sift together flour, baking powder and salt. Cut in shortening with fork or pastry blender until mixture resembles coarse crumbs. "
        },
        {
          "id": 15.0,
          "name": "step 3",
          "text": " Pour milk into flour mixture while stirring with a fork. Mix in milk until dough is soft, moist and pulls away from the side of the bowl. "
        },
        {
          "id": 16.0,
          "name": "step 4",
          "text": " Turn dough out onto a lightly floured surface and toss with flour until no longer sticky. Roll dough out into a 1 2 inch thick sheet and cut with a floured biscuit or cookie cutter. Press together unused dough and repeat rolling and cutting procedure. "
        },
        {
          "id": 17.0,
          "name": "step 5",
          "text": " Place biscuits on ungreased baking sheets and bake in preheated oven until golden brown, about 10 minutes. "
        }
      ],
      "summary": [
        {
          "id": 16.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 15
        },
        {
          "id": 17.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 10
        },
        {
          "id": 18.0,
          "measure": "mins",
          "name": "total",
          "quantity": 25
        },
        {
          "id": 19.0,
          "measure": "",
          "name": "Servings",
          "quantity": 10
        },
        {
          "id": 20.0,
          "measure": "to",
          "name": "Yield",
          "quantity": 8
        }
      ],
      "title": "Basic Biscuits"
    },
    {
      "category": [
        {
          "id": 12.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 13.0,
          "name": "Crepes"
        },
        {
          "id": 14.0,
          "name": "Sweet"
        }
      ],
      "date": "2021-01-24T01:53:06.612114",
      "id": 5.0,
      "images": [
        {
          "id": 62.0,
          "slug": "https://images.media-allrecipes.com/userphotos/327189.jpg"
        },
        {
          "id": 63.0,
          "slug": "https://images.media-allrecipes.com/userphotos/406823.jpg"
        },
        {
          "id": 64.0,
          "slug": "https://images.media-allrecipes.com/userphotos/400093.jpg"
        },
        {
          "id": 65.0,
          "slug": "https://images.media-allrecipes.com/userphotos/338197.jpg"
        },
        {
          "id": 66.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1074433.jpg"
        },
        {
          "id": 67.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3508481.jpg"
        },
        {
          "id": 68.0,
          "slug": "https://images.media-allrecipes.com/userphotos/114323.jpg"
        },
        {
          "id": 69.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3175613.jpg"
        },
        {
          "id": 70.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2061293.jpg"
        },
        {
          "id": 71.0,
          "slug": "https://images.media-allrecipes.com/userphotos/34828.jpg"
        },
        {
          "id": 72.0,
          "slug": "https://images.media-allrecipes.com/userphotos/757203.jpg"
        },
        {
          "id": 73.0,
          "slug": "https://images.media-allrecipes.com/userphotos/54218.jpg"
        },
        {
          "id": 74.0,
          "slug": "https://images.media-allrecipes.com/userphotos/57037.jpg"
        },
        {
          "id": 75.0,
          "slug": "https://images.media-allrecipes.com/userphotos/75684.jpg"
        },
        {
          "id": 76.0,
          "slug": "https://images.media-allrecipes.com/userphotos/58764.jpg"
        },
        {
          "id": 77.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4790201.jpg"
        },
        {
          "id": 78.0,
          "slug": "https://images.media-allrecipes.com/userphotos/98517.jpg"
        },
        {
          "id": 79.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2143087.jpg"
        },
        {
          "id": 80.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7765574.jpg"
        },
        {
          "id": 81.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7551507.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 36.0,
          "name": "½ cups milk",
          "quantity": 1
        },
        {
          "id": 37.0,
          "name": "egg yolks",
          "quantity": 3
        },
        {
          "id": 38.0,
          "name": "tablespoons vanilla extract",
          "quantity": 2
        },
        {
          "id": 39.0,
          "name": "½ cups all-purpose flour",
          "quantity": 1
        },
        {
          "id": 40.0,
          "name": "tablespoons sugar",
          "quantity": 2
        },
        {
          "id": 41.0,
          "name": "½ teaspoon salt",
          "quantity": null
        },
        {
          "id": 42.0,
          "name": "tablespoons melted butter",
          "quantity": 5
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 74.0,
          "measure": "g",
          "name": "protein",
          "quantity": 3.3
        },
        {
          "daily_value": "",
          "id": 75.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 15.9
        },
        {
          "daily_value": "",
          "id": 76.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 0.4
        },
        {
          "daily_value": "",
          "id": 77.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 3.9
        },
        {
          "daily_value": "",
          "id": 78.0,
          "measure": "g",
          "name": "fat",
          "quantity": 6.7
        },
        {
          "daily_value": "",
          "id": 79.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 3.8
        },
        {
          "daily_value": "",
          "id": 80.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 66.4
        },
        {
          "daily_value": "",
          "id": 81.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 265.3
        },
        {
          "daily_value": "",
          "id": 82.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 1.6
        },
        {
          "daily_value": "",
          "id": 83.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 84.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 36.4
        },
        {
          "daily_value": "",
          "id": 85.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 45.1
        },
        {
          "daily_value": "",
          "id": 86.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 0.9
        },
        {
          "daily_value": "",
          "id": 87.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 7.4
        },
        {
          "daily_value": "",
          "id": 88.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 71.7
        },
        {
          "daily_value": "",
          "id": 89.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 146.0
        },
        {
          "daily_value": "",
          "id": 90.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 91.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 59.9
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/95817/vanilla-crepes/",
      "steps": [
        {
          "id": 18.0,
          "name": "step 1",
          "text": " In a large bowl, mix together the milk, egg yolks and vanilla. Stir in the flour, sugar, salt and melted butter until well blended. "
        },
        {
          "id": 19.0,
          "name": "step 2",
          "text": " Heat a crepe pan over medium heat until hot. Coat with vegetable oil or cooking spray. Pour about 1 4 cup of batter into the pan and tip to spread the batter to the edges. When bubbles form on the top and the edges are dry, flip over and cook until lightly browned on the other side and edges are golden. Repeat with remaining batter. "
        },
        {
          "id": 20.0,
          "name": "step 3",
          "text": " Fill crepes with your favorite fruit, cream, caramel or even ice cream or cheese to serve. "
        }
      ],
      "summary": [
        {
          "id": 21.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 10
        },
        {
          "id": 22.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 20
        },
        {
          "id": 23.0,
          "measure": "mins",
          "name": "total",
          "quantity": 30
        },
        {
          "id": 24.0,
          "measure": "",
          "name": "Servings",
          "quantity": 12
        },
        {
          "id": 25.0,
          "measure": "crepes",
          "name": "Yield",
          "quantity": 12
        }
      ],
      "title": "Vanilla Crepes"
    },
    {
      "category": [
        {
          "id": 15.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 16.0,
          "name": "Eggs"
        }
      ],
      "date": "2021-01-24T01:53:10.795387",
      "id": 6.0,
      "images": [
        {
          "id": 82.0,
          "slug": "https://images.media-allrecipes.com/userphotos/879892.jpg"
        },
        {
          "id": 83.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1854997.jpg"
        },
        {
          "id": 84.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1080759.jpg"
        },
        {
          "id": 85.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3176421.jpg"
        },
        {
          "id": 86.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2218220.jpg"
        },
        {
          "id": 87.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1992786.jpg"
        },
        {
          "id": 88.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6187129.jpg"
        },
        {
          "id": 89.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6170762.jpg"
        },
        {
          "id": 90.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8258053.jpg"
        },
        {
          "id": 91.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3729966.jpg"
        },
        {
          "id": 92.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4503920.jpg"
        },
        {
          "id": 93.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4506340.jpg"
        },
        {
          "id": 94.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4458796.jpg"
        },
        {
          "id": 95.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4537092.jpg"
        },
        {
          "id": 96.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3026559.jpg"
        },
        {
          "id": 97.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1100213.jpg"
        },
        {
          "id": 98.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1245564.jpg"
        },
        {
          "id": 99.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1895546.jpg"
        },
        {
          "id": 100.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6573040.jpg"
        },
        {
          "id": 101.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7550482.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 43.0,
          "name": "cooking spray",
          "quantity": null
        },
        {
          "id": 44.0,
          "name": "large eggs",
          "quantity": 8
        },
        {
          "id": 45.0,
          "name": "cups milk",
          "quantity": 2
        },
        {
          "id": 46.0,
          "name": "green onions, chopped",
          "quantity": 3
        },
        {
          "id": 47.0,
          "name": "teaspoon onion powder",
          "quantity": 1
        },
        {
          "id": 48.0,
          "name": "teaspoon salt",
          "quantity": 1
        },
        {
          "id": 49.0,
          "name": "/2-inch dice",
          "quantity": 1
        },
        {
          "id": 50.0,
          "name": "English muffins, cut into 1/2-inch dice",
          "quantity": 6
        },
        {
          "id": 51.0,
          "name": "½ teaspoon paprika",
          "quantity": null
        },
        {
          "id": 52.0,
          "name": "(.9 ounce) package hollandaise sauce mix",
          "quantity": 1
        },
        {
          "id": 53.0,
          "name": "cup milk",
          "quantity": 1
        },
        {
          "id": 54.0,
          "name": "¼ cup margarine",
          "quantity": null
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 92.0,
          "measure": "g",
          "name": "protein",
          "quantity": 17.5
        },
        {
          "daily_value": "",
          "id": 93.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 21.2
        },
        {
          "daily_value": "",
          "id": 94.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 0.2
        },
        {
          "daily_value": "",
          "id": 95.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 4.0
        },
        {
          "daily_value": "",
          "id": 96.0,
          "measure": "g",
          "name": "fat",
          "quantity": 14.1
        },
        {
          "daily_value": "",
          "id": 97.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 4.5
        },
        {
          "daily_value": "",
          "id": 98.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 174.4
        },
        {
          "daily_value": "",
          "id": 99.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 680.1
        },
        {
          "daily_value": "",
          "id": 100.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 5.0
        },
        {
          "daily_value": "",
          "id": 101.0,
          "measure": "mg",
          "name": "vitamin b6",
          "quantity": 0.3
        },
        {
          "daily_value": "",
          "id": 102.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 1.2
        },
        {
          "daily_value": "",
          "id": 103.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 41.9
        },
        {
          "daily_value": "",
          "id": 104.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 183.3
        },
        {
          "daily_value": "",
          "id": 105.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 1.6
        },
        {
          "daily_value": "",
          "id": 106.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 20.6
        },
        {
          "daily_value": "",
          "id": 107.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 305.8
        },
        {
          "daily_value": "",
          "id": 108.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 1053.3
        },
        {
          "daily_value": "",
          "id": 109.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.3
        },
        {
          "daily_value": "",
          "id": 110.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 126.6
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/221988/eggs-benedict-casserole/",
      "steps": [
        {
          "id": 21.0,
          "name": "step 1",
          "text": " Spray 9x13 inch baking dish with cooking spray. "
        },
        {
          "id": 22.0,
          "name": "step 2",
          "text": " Whisk eggs, 2 cups milk, green onions, onion powder, and salt together in a large bowl until well mixed. "
        },
        {
          "id": 23.0,
          "name": "step 3",
          "text": " Layer half the Canadian bacon in the prepared baking dish. Spread English muffins over meat and top with remaining Canadian bacon. Pour egg mixture over casserole. Cover baking dish with plastic wrap and refrigerate overnight. "
        },
        {
          "id": 24.0,
          "name": "step 4",
          "text": " Preheat the oven to 375 degrees F (190 degrees C). "
        },
        {
          "id": 25.0,
          "name": "step 5",
          "text": " Sprinkle casserole with paprika; cover with aluminum foil. "
        },
        {
          "id": 26.0,
          "name": "step 6",
          "text": " Bake in preheated oven until eggs are nearly set, about 30 minutes; remove foil. Continue baking until eggs are completely set, about 15 more minutes. "
        },
        {
          "id": 27.0,
          "name": "step 7",
          "text": " Whisk hollandaise sauce mix with 1 cup milk in a saucepan. Add margarine and bring to a boil, stirring frequently. Reduce heat to medium low, simmer, and stir until thickened, about 1 minute. Drizzle sauce over casserole to serve. "
        }
      ],
      "summary": [
        {
          "id": 26.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 20
        },
        {
          "id": 27.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 50
        },
        {
          "id": 28.0,
          "measure": "hrs",
          "name": "additional",
          "quantity": 8
        },
        {
          "id": 29.0,
          "measure": "hrs",
          "name": "total",
          "quantity": 9
        },
        {
          "id": 30.0,
          "measure": "",
          "name": "Servings",
          "quantity": 10
        },
        {
          "id": 31.0,
          "measure": "9x13",
          "name": "Yield",
          "quantity": 1
        }
      ],
      "title": "Eggs Benedict Casserole"
    },
    {
      "category": [
        {
          "id": 17.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 18.0,
          "name": "Cereals"
        }
      ],
      "date": "2021-01-24T01:53:14.769634",
      "id": 7.0,
      "images": [
        {
          "id": 102.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3284076.jpg"
        },
        {
          "id": 103.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5117670.jpg"
        },
        {
          "id": 104.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5594853.jpg"
        },
        {
          "id": 105.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3110177.jpg"
        },
        {
          "id": 106.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7881048.jpg"
        },
        {
          "id": 107.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3385199.jpg"
        },
        {
          "id": 108.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4520522.jpg"
        },
        {
          "id": 109.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1993130.jpg"
        },
        {
          "id": 110.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1028502.jpg"
        },
        {
          "id": 111.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7151484.jpg"
        },
        {
          "id": 112.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6916987.jpg"
        },
        {
          "id": 113.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6358218.jpg"
        },
        {
          "id": 114.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6222931.jpg"
        },
        {
          "id": 115.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8056209.jpg"
        },
        {
          "id": 116.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5495104.jpg"
        },
        {
          "id": 117.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3244366.jpg"
        },
        {
          "id": 118.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1959472.jpg"
        },
        {
          "id": 119.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6222927.jpg"
        },
        {
          "id": 120.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1961087.jpg"
        },
        {
          "id": 121.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7285513.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 55.0,
          "name": "cup quinoa",
          "quantity": 1
        },
        {
          "id": 56.0,
          "name": "cups nonfat milk",
          "quantity": 2
        },
        {
          "id": 57.0,
          "name": "pinch salt",
          "quantity": 1
        },
        {
          "id": 58.0,
          "name": "tablespoons maple syrup",
          "quantity": 3
        },
        {
          "id": 59.0,
          "name": "½  lemon, zested",
          "quantity": null
        },
        {
          "id": 60.0,
          "name": "cup blueberries",
          "quantity": 1
        },
        {
          "id": 61.0,
          "name": "teaspoons flax seed",
          "quantity": 2
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 111.0,
          "measure": "g",
          "name": "protein",
          "quantity": 21.5
        },
        {
          "daily_value": "",
          "id": 112.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 98.7
        },
        {
          "daily_value": "",
          "id": 113.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 8.9
        },
        {
          "daily_value": "",
          "id": 114.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 37.4
        },
        {
          "daily_value": "",
          "id": 115.0,
          "measure": "g",
          "name": "fat",
          "quantity": 7.3
        },
        {
          "daily_value": "",
          "id": 116.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 0.9
        },
        {
          "daily_value": "",
          "id": 117.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 4.9
        },
        {
          "daily_value": "",
          "id": 118.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 551.6
        },
        {
          "daily_value": "",
          "id": 119.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 5.9
        },
        {
          "daily_value": "",
          "id": 120.0,
          "measure": "mg",
          "name": "vitamin b6",
          "quantity": 0.6
        },
        {
          "daily_value": "",
          "id": 121.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 9.0
        },
        {
          "daily_value": "",
          "id": 122.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 176.7
        },
        {
          "daily_value": "",
          "id": 123.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 382.9
        },
        {
          "daily_value": "",
          "id": 124.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 4.8
        },
        {
          "daily_value": "",
          "id": 125.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 218.9
        },
        {
          "daily_value": "",
          "id": 126.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 1012.7
        },
        {
          "daily_value": "",
          "id": 127.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 111.9
        },
        {
          "daily_value": "",
          "id": 128.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.3
        },
        {
          "daily_value": "",
          "id": 129.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 66.1
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/230830/blueberry-lemon-breakfast-quinoa/",
      "steps": [
        {
          "id": 28.0,
          "name": "step 1",
          "text": " Rinse quinoa in a fine strainer with cold water to remove bitterness until water runs clear and is no longer frothy. "
        },
        {
          "id": 29.0,
          "name": "step 2",
          "text": " Heat milk in a saucepan over medium heat until warm, 2 to 3 minutes. Stir quinoa and salt into the milk; simmer over medium low heat until much of the liquid has been absorbed, about 20 minutes. Remove saucepan from heat. Stir maple syrup and lemon zest into the quinoa mixture. Gently fold blueberries into the mixture. "
        },
        {
          "id": 30.0,
          "name": "step 3",
          "text": " Divide quinoa mixture between 2 bowls; top each with 1 teaspoon flax seed to serve. "
        }
      ],
      "summary": [
        {
          "id": 32.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 5
        },
        {
          "id": 33.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 25
        },
        {
          "id": 34.0,
          "measure": "mins",
          "name": "total",
          "quantity": 30
        },
        {
          "id": 35.0,
          "measure": "",
          "name": "Servings",
          "quantity": 2
        },
        {
          "id": 36.0,
          "measure": "servings",
          "name": "Yield",
          "quantity": 2
        }
      ],
      "title": "Blueberry Lemon Breakfast Quinoa"
    },
    {
      "category": [
        {
          "id": 19.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 20.0,
          "name": "Meat and Seafood"
        },
        {
          "id": 21.0,
          "name": "Bacon"
        }
      ],
      "date": "2021-01-24T01:53:18.506624",
      "id": 8.0,
      "images": [
        {
          "id": 122.0,
          "slug": "https://images.media-allrecipes.com/userphotos/386969.jpg"
        },
        {
          "id": 123.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2111639.jpg"
        },
        {
          "id": 124.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1115789.jpg"
        },
        {
          "id": 125.0,
          "slug": "https://images.media-allrecipes.com/userphotos/62277.jpg"
        },
        {
          "id": 126.0,
          "slug": "https://images.media-allrecipes.com/userphotos/112498.jpg"
        },
        {
          "id": 127.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5166303.jpg"
        },
        {
          "id": 128.0,
          "slug": "https://images.media-allrecipes.com/userphotos/765723.jpg"
        },
        {
          "id": 129.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1124612.jpg"
        },
        {
          "id": 130.0,
          "slug": "https://images.media-allrecipes.com/userphotos/873114.jpg"
        },
        {
          "id": 131.0,
          "slug": "https://images.media-allrecipes.com/userphotos/80261.jpg"
        },
        {
          "id": 132.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4500684.jpg"
        },
        {
          "id": 133.0,
          "slug": "https://images.media-allrecipes.com/userphotos/700683.jpg"
        },
        {
          "id": 134.0,
          "slug": "https://images.media-allrecipes.com/userphotos/676446.jpg"
        },
        {
          "id": 135.0,
          "slug": "https://images.media-allrecipes.com/userphotos/112497.jpg"
        },
        {
          "id": 136.0,
          "slug": "https://images.media-allrecipes.com/userphotos/100202.jpg"
        },
        {
          "id": 137.0,
          "slug": "https://images.media-allrecipes.com/userphotos/163988.jpg"
        },
        {
          "id": 138.0,
          "slug": "https://images.media-allrecipes.com/userphotos/60065.jpg"
        },
        {
          "id": 139.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4245525.jpg"
        },
        {
          "id": 140.0,
          "slug": "https://images.media-allrecipes.com/userphotos/185128.jpg"
        },
        {
          "id": 141.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4517651.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 62.0,
          "name": "pound thick sliced bacon",
          "quantity": 1
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 130.0,
          "measure": "g",
          "name": "protein",
          "quantity": 13.9
        },
        {
          "daily_value": "",
          "id": 131.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 0.5
        },
        {
          "daily_value": "",
          "id": 132.0,
          "measure": "g",
          "name": "fat",
          "quantity": 15.6
        },
        {
          "daily_value": "",
          "id": 133.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 5.1
        },
        {
          "daily_value": "",
          "id": 134.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 41.2
        },
        {
          "daily_value": "",
          "id": 135.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 13.9
        },
        {
          "daily_value": "",
          "id": 136.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 6.1
        },
        {
          "daily_value": "",
          "id": 137.0,
          "measure": "mg",
          "name": "vitamin b6",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 138.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 0.7
        },
        {
          "daily_value": "",
          "id": 139.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 4.1
        },
        {
          "daily_value": "",
          "id": 140.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 0.5
        },
        {
          "daily_value": "",
          "id": 141.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 12.4
        },
        {
          "daily_value": "",
          "id": 142.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 211.6
        },
        {
          "daily_value": "",
          "id": 143.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 865.2
        },
        {
          "daily_value": "",
          "id": 144.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.3
        },
        {
          "daily_value": "",
          "id": 145.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 140.8
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/158727/bacon-for-the-family-or-a-crowd/",
      "steps": [
        {
          "id": 31.0,
          "name": "step 1",
          "text": " Preheat oven to 350 degrees F (175 degrees C). Line a baking sheet with aluminum foil. Arrange bacon on baking sheet in a single layer with the edges touching or slightly overlapping. "
        },
        {
          "id": 32.0,
          "name": "step 2",
          "text": " Bake in preheated oven to desired degree of doneness, 10 to 15 minutes. Remove bacon from the baking sheet with tongs or a fork, and drain on a paper towel lined plate. "
        }
      ],
      "summary": [
        {
          "id": 37.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 5
        },
        {
          "id": 38.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 15
        },
        {
          "id": 39.0,
          "measure": "mins",
          "name": "total",
          "quantity": 20
        },
        {
          "id": 40.0,
          "measure": "",
          "name": "Servings",
          "quantity": 4
        },
        {
          "id": 41.0,
          "measure": "strips",
          "name": "Yield",
          "quantity": 12
        }
      ],
      "title": "Bacon for the Family or a Crowd"
    },
    {
      "category": [
        {
          "id": 22.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 23.0,
          "name": "Waffle Recipes"
        }
      ],
      "date": "2021-01-24T01:53:22.697455",
      "id": 9.0,
      "images": [
        {
          "id": 142.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5868508.jpg"
        },
        {
          "id": 143.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3717657.jpg"
        },
        {
          "id": 144.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3701430.jpg"
        },
        {
          "id": 145.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3195498.jpg"
        },
        {
          "id": 146.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2176216.jpg"
        },
        {
          "id": 147.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2166802.jpg"
        },
        {
          "id": 148.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1115826.jpg"
        },
        {
          "id": 149.0,
          "slug": "https://images.media-allrecipes.com/userphotos/191394.jpg"
        },
        {
          "id": 150.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4469124.jpg"
        },
        {
          "id": 151.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2527229.jpg"
        },
        {
          "id": 152.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1304080.jpg"
        },
        {
          "id": 153.0,
          "slug": "https://images.media-allrecipes.com/userphotos/568800.jpg"
        },
        {
          "id": 154.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5756882.jpg"
        },
        {
          "id": 155.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4571587.jpg"
        },
        {
          "id": 156.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4576158.jpg"
        },
        {
          "id": 157.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2219820.jpg"
        },
        {
          "id": 158.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2130801.jpg"
        },
        {
          "id": 159.0,
          "slug": "https://images.media-allrecipes.com/userphotos/151278.jpg"
        },
        {
          "id": 160.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5427650.jpg"
        },
        {
          "id": 161.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4540457.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 63.0,
          "name": "cups all-purpose flour",
          "quantity": 2
        },
        {
          "id": 64.0,
          "name": "teaspoon salt",
          "quantity": 1
        },
        {
          "id": 65.0,
          "name": "teaspoons baking powder",
          "quantity": 4
        },
        {
          "id": 66.0,
          "name": "tablespoons white sugar",
          "quantity": 2
        },
        {
          "id": 67.0,
          "name": "eggs",
          "quantity": 2
        },
        {
          "id": 68.0,
          "name": "½ cups warm milk",
          "quantity": 1
        },
        {
          "id": 69.0,
          "name": "⅓ cup butter, melted",
          "quantity": null
        },
        {
          "id": 70.0,
          "name": "teaspoon vanilla extract",
          "quantity": 1
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 146.0,
          "measure": "g",
          "name": "protein",
          "quantity": 10.2
        },
        {
          "daily_value": "",
          "id": 147.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 47.6
        },
        {
          "daily_value": "",
          "id": 148.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 1.4
        },
        {
          "daily_value": "",
          "id": 149.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 8.8
        },
        {
          "daily_value": "",
          "id": 150.0,
          "measure": "g",
          "name": "fat",
          "quantity": 16.2
        },
        {
          "daily_value": "",
          "id": 151.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 9.4
        },
        {
          "daily_value": "",
          "id": 152.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 112.8
        },
        {
          "daily_value": "",
          "id": 153.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 613.9
        },
        {
          "daily_value": "",
          "id": 154.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 5.1
        },
        {
          "daily_value": "",
          "id": 155.0,
          "measure": "mg",
          "name": "vitamin b6",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 156.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 157.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 105.0
        },
        {
          "daily_value": "",
          "id": 158.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 267.3
        },
        {
          "daily_value": "",
          "id": 159.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 3.0
        },
        {
          "daily_value": "",
          "id": 160.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 22.6
        },
        {
          "daily_value": "",
          "id": 161.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 195.8
        },
        {
          "daily_value": "",
          "id": 162.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 899.1
        },
        {
          "daily_value": "",
          "id": 163.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.4
        },
        {
          "daily_value": "",
          "id": 164.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 145.8
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/20513/classic-waffles/",
      "steps": [
        {
          "id": 33.0,
          "name": "step 1",
          "text": " In a large bowl, mix together flour, salt, baking powder and sugar; set aside. Preheat waffle iron to desired temperature. "
        },
        {
          "id": 34.0,
          "name": "step 2",
          "text": " In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla. Pour the milk mixture into the flour mixture; beat until blended. "
        },
        {
          "id": 35.0,
          "name": "step 3",
          "text": " Ladle the batter into a preheated waffle iron. Cook the waffles until golden and crisp. Serve immediately. "
        }
      ],
      "summary": [
        {
          "id": 42.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 10
        },
        {
          "id": 43.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 15
        },
        {
          "id": 44.0,
          "measure": "mins",
          "name": "total",
          "quantity": 25
        },
        {
          "id": 45.0,
          "measure": "",
          "name": "Servings",
          "quantity": 5
        },
        {
          "id": 46.0,
          "measure": "to",
          "name": "Yield",
          "quantity": 10
        }
      ],
      "title": "Classic Waffles"
    },
    {
      "category": [
        {
          "id": 24.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 25.0,
          "name": "Eggs"
        }
      ],
      "date": "2021-01-24T01:53:26.337974",
      "id": 10.0,
      "images": [
        {
          "id": 162.0,
          "slug": "https://images.media-allrecipes.com/userphotos/97747.jpg"
        },
        {
          "id": 163.0,
          "slug": "https://images.media-allrecipes.com/userphotos/946940.jpg"
        },
        {
          "id": 164.0,
          "slug": "https://images.media-allrecipes.com/userphotos/737786.jpg"
        },
        {
          "id": 165.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1024537.jpg"
        },
        {
          "id": 166.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1115844.jpg"
        },
        {
          "id": 167.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3244358.jpg"
        },
        {
          "id": 168.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1090211.jpg"
        },
        {
          "id": 169.0,
          "slug": "https://images.media-allrecipes.com/userphotos/428611.jpg"
        },
        {
          "id": 170.0,
          "slug": "https://images.media-allrecipes.com/userphotos/138280.jpg"
        },
        {
          "id": 171.0,
          "slug": "https://images.media-allrecipes.com/userphotos/402095.jpg"
        },
        {
          "id": 172.0,
          "slug": "https://images.media-allrecipes.com/userphotos/158601.jpg"
        },
        {
          "id": 173.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4521251.jpg"
        },
        {
          "id": 174.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3243198.jpg"
        },
        {
          "id": 175.0,
          "slug": "https://images.media-allrecipes.com/userphotos/3172788.jpg"
        },
        {
          "id": 176.0,
          "slug": "https://images.media-allrecipes.com/userphotos/156826.jpg"
        },
        {
          "id": 177.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6173018.jpg"
        },
        {
          "id": 178.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4554876.jpg"
        },
        {
          "id": 179.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1115846.jpg"
        },
        {
          "id": 180.0,
          "slug": "https://images.media-allrecipes.com/userphotos/5011989.jpg"
        },
        {
          "id": 181.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4521252.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 71.0,
          "name": "slices bacon, chopped",
          "quantity": 6
        },
        {
          "id": 72.0,
          "name": "onion, chopped",
          "quantity": 1
        },
        {
          "id": 73.0,
          "name": "eggs",
          "quantity": 3
        },
        {
          "id": 74.0,
          "name": "¾ cup buttermilk baking mix",
          "quantity": null
        },
        {
          "id": 75.0,
          "name": "½ tablespoons chopped fresh parsley",
          "quantity": 1
        },
        {
          "id": 76.0,
          "name": "cups shredded American cheese",
          "quantity": 2
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 165.0,
          "measure": "g",
          "name": "protein",
          "quantity": 3.9
        },
        {
          "daily_value": "",
          "id": 166.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 3.0
        },
        {
          "daily_value": "",
          "id": 167.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 0.2
        },
        {
          "daily_value": "",
          "id": 168.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 0.3
        },
        {
          "daily_value": "",
          "id": 169.0,
          "measure": "g",
          "name": "fat",
          "quantity": 7.3
        },
        {
          "daily_value": "",
          "id": 170.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 3.4
        },
        {
          "daily_value": "",
          "id": 171.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 38.0
        },
        {
          "daily_value": "",
          "id": 172.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 52.9
        },
        {
          "daily_value": "",
          "id": 173.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 0.7
        },
        {
          "daily_value": "",
          "id": 174.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 0.7
        },
        {
          "daily_value": "",
          "id": 175.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 4.3
        },
        {
          "daily_value": "",
          "id": 176.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 60.8
        },
        {
          "daily_value": "",
          "id": 177.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 0.3
        },
        {
          "daily_value": "",
          "id": 178.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 2.2
        },
        {
          "daily_value": "",
          "id": 179.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 40.7
        },
        {
          "daily_value": "",
          "id": 180.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 261.3
        },
        {
          "daily_value": "",
          "id": 181.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 66.1
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/40023/easy-mini-quiches/",
      "steps": [
        {
          "id": 36.0,
          "name": "step 1",
          "text": " Preheat the oven to 350 degrees F (175 degrees C). Grease 2 mini muffin pans. In a large skillet over medium heat, fry bacon and onion together for about 5 minutes, or until bacon is crisp. Drain and set aside. "
        },
        {
          "id": 37.0,
          "name": "step 2",
          "text": " In a medium bowl, beat the eggs. Stir in the baking mix, parsley, shredded cheese, bacon and onion. Spoon into greased muffin cups. "
        },
        {
          "id": 38.0,
          "name": "step 3",
          "text": " Bake for 10 to 15 minutes in the preheated oven, or until the tops are lightly browned. Allow mini quiches to cool in the pan before carefully removing with a small knife or spatula. "
        }
      ],
      "summary": [
        {
          "id": 47.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 15
        },
        {
          "id": 48.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 15
        },
        {
          "id": 49.0,
          "measure": "mins",
          "name": "total",
          "quantity": 30
        },
        {
          "id": 50.0,
          "measure": "",
          "name": "Servings",
          "quantity": 24
        },
        {
          "id": 51.0,
          "measure": "mini",
          "name": "Yield",
          "quantity": 24
        }
      ],
      "title": "Easy Mini Quiches"
    },
    {
      "category": [
        {
          "id": 26.0,
          "name": "Breakfast and Brunch Recipes"
        },
        {
          "id": 27.0,
          "name": "Eggs"
        },
        {
          "id": 28.0,
          "name": "Omelet Recipes"
        }
      ],
      "date": "2021-01-24T01:53:30.032484",
      "id": 11.0,
      "images": [
        {
          "id": 182.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7003906.jpg"
        },
        {
          "id": 183.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8276635.jpg"
        },
        {
          "id": 184.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8288949.jpg"
        },
        {
          "id": 185.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8709678.jpg"
        },
        {
          "id": 186.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4603101.jpg"
        },
        {
          "id": 187.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4673823.jpg"
        },
        {
          "id": 188.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4425240.jpg"
        },
        {
          "id": 189.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6283303.jpg"
        },
        {
          "id": 190.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6285869.jpg"
        },
        {
          "id": 191.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7995693.jpg"
        },
        {
          "id": 192.0,
          "slug": "https://images.media-allrecipes.com/userphotos/7885491.jpg"
        },
        {
          "id": 193.0,
          "slug": "https://images.media-allrecipes.com/userphotos/8951576.jpg"
        },
        {
          "id": 194.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2197531.jpg"
        },
        {
          "id": 195.0,
          "slug": "https://images.media-allrecipes.com/userphotos/1040641.jpg"
        },
        {
          "id": 196.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4387832.jpg"
        },
        {
          "id": 197.0,
          "slug": "https://images.media-allrecipes.com/userphotos/2326284.jpg"
        },
        {
          "id": 198.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4944225.jpg"
        },
        {
          "id": 199.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4883800.jpg"
        },
        {
          "id": 200.0,
          "slug": "https://images.media-allrecipes.com/userphotos/4589252.jpg"
        },
        {
          "id": 201.0,
          "slug": "https://images.media-allrecipes.com/userphotos/6337737.jpg"
        }
      ],
      "ingredients": [
        {
          "id": 77.0,
          "name": "teaspoon butter",
          "quantity": 1
        },
        {
          "id": 78.0,
          "name": "large eggs",
          "quantity": 9
        },
        {
          "id": 79.0,
          "name": "½ cup sour cream",
          "quantity": null
        },
        {
          "id": 80.0,
          "name": "½ cup milk",
          "quantity": null
        },
        {
          "id": 81.0,
          "name": "teaspoon salt",
          "quantity": 1
        },
        {
          "id": 82.0,
          "name": "green onions, chopped",
          "quantity": 2
        },
        {
          "id": 83.0,
          "name": "¼ cup shredded Cheddar cheese",
          "quantity": null
        }
      ],
      "nutrition": [
        {
          "daily_value": "",
          "id": 182.0,
          "measure": "g",
          "name": "protein",
          "quantity": 12.0
        },
        {
          "daily_value": "",
          "id": 183.0,
          "measure": "g",
          "name": "carbohydrates",
          "quantity": 2.8
        },
        {
          "daily_value": "",
          "id": 184.0,
          "measure": "g",
          "name": "dietary fiber",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 185.0,
          "measure": "g",
          "name": "sugars",
          "quantity": 1.7
        },
        {
          "daily_value": "",
          "id": 186.0,
          "measure": "g",
          "name": "fat",
          "quantity": 14.1
        },
        {
          "daily_value": "",
          "id": 187.0,
          "measure": "g",
          "name": "saturated fat",
          "quantity": 6.5
        },
        {
          "daily_value": "",
          "id": 188.0,
          "measure": "mg",
          "name": "cholesterol",
          "quantity": 295.8
        },
        {
          "daily_value": "",
          "id": 189.0,
          "measure": "IU",
          "name": "vitamin a iu",
          "quantity": 645.7
        },
        {
          "daily_value": "",
          "id": 190.0,
          "measure": "mg",
          "name": "niacin equivalents",
          "quantity": 2.7
        },
        {
          "daily_value": "",
          "id": 191.0,
          "measure": "mg",
          "name": "vitamin b6",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 192.0,
          "measure": "mg",
          "name": "vitamin c",
          "quantity": 1.2
        },
        {
          "daily_value": "",
          "id": 193.0,
          "measure": "mcg",
          "name": "folate",
          "quantity": 42.4
        },
        {
          "daily_value": "",
          "id": 194.0,
          "measure": "mg",
          "name": "calcium",
          "quantity": 123.8
        },
        {
          "daily_value": "",
          "id": 195.0,
          "measure": "mg",
          "name": "iron",
          "quantity": 1.5
        },
        {
          "daily_value": "",
          "id": 196.0,
          "measure": "mg",
          "name": "magnesium",
          "quantity": 15.7
        },
        {
          "daily_value": "",
          "id": 197.0,
          "measure": "mg",
          "name": "potassium",
          "quantity": 177.3
        },
        {
          "daily_value": "",
          "id": 198.0,
          "measure": "mg",
          "name": "sodium",
          "quantity": 545.9
        },
        {
          "daily_value": "",
          "id": 199.0,
          "measure": "mg",
          "name": "thiamin",
          "quantity": 0.1
        },
        {
          "daily_value": "",
          "id": 200.0,
          "measure": "",
          "name": "calories from fat",
          "quantity": 127.1
        }
      ],
      "slug": "https://www.allrecipes.com/recipe/233287/oven-baked-omelet/",
      "steps": [
        {
          "id": 39.0,
          "name": "step 1",
          "text": " Preheat oven to 350 degrees F (175 degrees C). Grease an 8x8 inch baking dish with butter. "
        },
        {
          "id": 40.0,
          "name": "step 2",
          "text": " Beat eggs, sour cream, milk, and salt in a bowl until blended. Stir in green onions. Pour mixture in the prepared baking dish. "
        },
        {
          "id": 41.0,
          "name": "step 3",
          "text": " Bake in the preheated oven until set, 25 to 30 minutes. Sprinkle Cheddar cheese over eggs and continue baking until cheese is melted, 2 to 3 minutes more. "
        }
      ],
      "summary": [
        {
          "id": 52.0,
          "measure": "mins",
          "name": "prep",
          "quantity": 10
        },
        {
          "id": 53.0,
          "measure": "mins",
          "name": "cook",
          "quantity": 30
        },
        {
          "id": 54.0,
          "measure": "mins",
          "name": "total",
          "quantity": 40
        },
        {
          "id": 55.0,
          "measure": "",
          "name": "Servings",
          "quantity": 6
        },
        {
          "id": 56.0,
          "measure": "servings",
          "name": "Yield",
          "quantity": 6
        }
      ],
      "title": "Oven Baked Omelet"
    }]

    setTimeout(() => {
      setRecipies(recipiesJSON)
      setLoading(false)

      setTimeout(() => {
        setShowLoading(false)
      }, 500)

      document.body.removeAttribute('style')
    }, 100)
  }, [])

  return (
    <>
      { showLoading && <CookieLoading show={loading} /> }
      <motion.div {...slideAnimationConfig}>
        <MainPageLayout>
          <CardsGrid recipies={recipies}/>
          <MobileAppBanner />
        </MainPageLayout>
      </motion.div>
    </>
  )
}

export default MainPage