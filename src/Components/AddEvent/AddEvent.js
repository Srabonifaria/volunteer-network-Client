import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddEvent = () => {

    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null)


      const onSubmit = data => {
          const eventData = {
              name: data.name,
              imageURL: imageURL
          };
          const url = `https://morning-shelf-37979.herokuapp.com/addEvent`
         fetch(url,{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(eventData)
         })
         .then(res => console.log('server side response', res))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '64dc9f0fb998de0a45bd77ce67abdcdc')
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <h1>Add your awesome event here</h1>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="name" defaultValue="new exciting event" ref={register} />
      <br/>
       <input name="exampleRequired" type="file" onChange={handleImageUpload} />
     <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddEvent;