import React, { Fragment, useState } from "react";
import { CategoryAdd } from "./CategoryAdd";
import { GifGrid } from "./GifGrid";

export const GiftExpertApp = () => {
    // const categories = ['yu yu hakusho', 'enen no shoubatai', 'shaman king'];
    const [categories, setCategories] = useState(['digimon']);

    // const handleAdd = () => {
    //     const elemento = `Elemento ${categories.length + 1}`;
    //     setCategories([...categories, elemento]);
    // }

    return <Fragment>
        <h2>GiftExpertApp</h2>
        <CategoryAdd setCategories={setCategories} />
        <hr />
        {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {categories.map((category, idx) => (
                // <li key={ idx }>{ category }</li>
                <GifGrid key={idx} category={category} />
            ))}
        </ol>
    </Fragment>
}
