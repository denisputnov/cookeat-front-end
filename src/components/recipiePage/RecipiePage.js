import React, { Fragment } from 'react'
import Head from './Head/Head'
import Ingredients from './Ingredients/Ingredients'
import classes from './RecipiePage.module.css'

class RecipiePage extends React.Component {
  state = {
    category: [],
    images: [],
    ingredients: [],
    nutrition: [],
    steps: [],
    summary: [],
    title: '',
    loading: true
  }

  componentDidMount() {
    const { id } = this.props.match.params
    console.log(id);
    const { category, images, ingredients, nutrition, steps, summary, title } = {
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
    }
    this.setState({
      category, images, ingredients, nutrition, steps, summary, title, loading: false
    })

  }

  render() {
    if (this.state.loading) return <div />

    const { category, images, ingredients, nutrition, steps, summary, title } = this.state

    const totalTime = summary.filter(item => item.name === 'total')[0]['quantity']

    return (
      <Fragment>
        <Head image={images[images.length - 1].slug} />
        <div className={classes.RecipieContent }>
          <h2 className={classes.RecipieTitle}>{title}</h2>
          <h5 className={classes.CookTime}>{totalTime} минут</h5>
          <Ingredients ingredients={ingredients}/>
        </div>
      </Fragment>
    )
  }
}

export default RecipiePage