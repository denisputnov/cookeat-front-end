import React, { useState, useRef, useEffect } from 'react'
import classes from './Search.module.css'
import Ingredient from './Ingredient/Ingredient'

const Search = props => {
  const cls = [classes.Search]
  
  const [input, setInput] = useState('')
  const [choosenIngredients, setChoosenIngredients] = useState([])

  const ingredients = [
    "Молоко",
    "Сыр",
    "Филе курицы",
    "Сливочное масло",
    "Помидоры",
    "Огурцы",
    "Репчатый лук",
    "Капуста",
    "Говядина",
    "Свинина",
    "Колбаса",
    "Сосиски",
    "Соль",
    "Сода",
    "Сахар",
    "Макароны",
    "Рис",
    "Греченвая крупа",
    "Кукуруза",
    "Горох",
    "Консервированные грибы",
  ]

  const inputRef = useRef(null)

  useEffect(key => {
    function onKeyDown(e) {
      if (e.key === "Escape") props.closeSearch()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (props.opened) {
    cls.push(classes["Search-active"])
    
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  const clearExcretion = () => {
    setChoosenIngredients([])
    inputRef.current.focus()
  } 


  const onIngredientChoose = (ingredientName) => {
    if (choosenIngredients.includes(ingredientName)) {
      return setChoosenIngredients(choosenIngredients.filter(ingredient => ingredient !== ingredientName))
    }
    setChoosenIngredients([...choosenIngredients, ingredientName])
  }
  
  // console.log(choosenIngredients);

  return (
    <div className={cls.join(' ')}>
      <button className={classes.Exit} onClick={props.closeSearch}/>
      <div className={classes.SearchWrapper}> 
        <div className={classes.InputWrapper}>
          <input 
            id="searchInput"
            ref={inputRef}
            type="text" 
            className={classes.Input}
            value={input} 
            onChange={ e => setInput(e.target.value) } 
            placeholder="Поиск по рецептам..."
          />
          <span className={classes.SearchItem} />
        </div>
        <div className={classes.Ingredients}>
          { ingredients.map((ingredient, index) => (
            <Ingredient 
              key={`${index}-${ingredient}`} 
              ingredient={ingredient} 
              onChoose={onIngredientChoose} 
              choosen={choosenIngredients.includes(ingredient)}
            />
            )) }
        </div>
        <button className={classes.RemoveExcretionButton} onClick={clearExcretion}>Cнять выделение с ингридиентов</button>
      </div>
    </div>
  )
}

export default Search