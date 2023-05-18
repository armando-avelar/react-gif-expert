import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);
    const onAddCategory = (newCategory) => {
        console.log('category', newCategory);
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gift Expert App</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)} />
            {categories.map((category, i) => <GifGrid key={i} category={category} />)}
        </>
    )
}