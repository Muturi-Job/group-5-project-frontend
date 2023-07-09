import './Recipes.css'

// const AddRecipeForm = () => {
//     function handleSubmit(event){
//         event.preventDefault()

//         const title = event.target[0].value
//         const description = event.target[1].value
//         const procedure = event.target[2].value
//         const image_url = event.target[3].value
//         // const user_id = event.target[4].value
        

//         fetch("http://localhost:3000/recipes", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             title: title,
//             description: description,
//             procedure: procedure,
//             image_url: image_url
//             // user_id: user_id
//         })
//      })
//      event.target.reset()
//     }

//   return (
//     <div className='addRecipeForm'>
//     <h2>Add a Recipe to the collection</h2>

//     <form className="add-recipe-form" onSubmit={handleSubmit}>
//         <input className='input' required type='text' placeholder='Title' />
//         <input className='input' required type='text' placeholder='Description' />
//         <input className='input' required type='text' placeholder='Procedure' />
//         {/* <input className='input' required type='text' placeholder='User_id' /> */}
//         <input className='input' required type='text' placeholder='Image' />
//         <button type="submit" className='add'>Add</button>
//     </form>
// </div>
//   )
// }

import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [procedure, setProcedure] = useState('');
  const [image_url, setImage_url] = useState('');
  const [user_id, setUser_id] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipeData = {
      title: title,
      description: description,
      procedure: procedure,
      image_url: image_url,
      user_id: user_id
    };

    fetch('https://group-5-back.onrender.com/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add the recipe');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Recipe added successfully:', data);
        // Optionally, perform any necessary actions after adding the recipe
      })
      .catch((error) => {
        console.error('Error occurred while adding the recipe:', error);
      });

    // Reset form fields
    setTitle('');
    setDescription('');
    setProcedure('');
    setImage_url('');
    setUser_id('');
  };

  return (
    <div className="addRecipeForm">
      <h2>Add a Recipe to the Collection</h2>

      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <input
          className="input"
          required
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="input"
          required
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          className="input"
          required
          type="text"
          placeholder="Procedure"
          value={procedure}
          onChange={(event) => setProcedure(event.target.value)}
        />
        <input
          className="input"
          required
          type="number"
          placeholder="User ID"
          value={user_id}
          onChange={(event) => setUser_id(event.target.value)}
        />
        <input
          className="input"
          required
          type="text"
          placeholder="Image URL"
          value={image_url}
          onChange={(event) => setImage_url(event.target.value)}
        />
        <button type="submit" className="add">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm