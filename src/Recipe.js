import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        
        <div className={style.recipe}>
            <h2>{title}</h2>
            <ol>
                <h4>Ingredients</h4>
                {ingredients.map(ingredients =>(
                    <li>
                        {ingredients.text}
                    </li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.img} src={image} alt=""/>
            <br/>
            <br/>
        </div>

        );
}

export default Recipe;