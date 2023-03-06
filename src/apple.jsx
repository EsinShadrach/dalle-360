import { useState, useEffect } from 'react';

function BeerList() {
  const [imageUrl, setImageUrl] = useState("");

const generateImage = () => {
    console.log("Working...")
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: "A Equirectangular view of luxury house surrounded by LED lights, seats, coffee table, carpet, Dinner table, wide windows, stylish paintings, Trinket",
        }),
        
    };

    fetch(
        "https://dalle360-6k6gsdlfoa-el.a.run.app/generate-image",
        requestOptions
    )
        .then((response) => {
            console.log(`This is response: ${response}`)
            response.json()
        })
        .then((data) =>{
                console.log(`This is data: ${data}`)
                setImageUrl(data.url)
            })
        .catch((error) => console.error(`Rafe Here's an error: ${error}`));
    console.log(`This is Img url ${imageUrl}`)
};

return (
    <div>
        <button onClick={generateImage}>Generate Image</button>
        {imageUrl && <img src={imageUrl} alt="Generated Image" />}
    </div>
);
}
/*
{
  "id": 2745,
  "uid": "7f240454-71cf-455a-a227-a7bee72a76d5",
  "brand": "Lowenbrau",
  "name": "Nugget Nectar",
  "style": "Dark Lager",
  "hop": "Ultra",
  "yeast": "3787 - Trappist High Gravity",
  "malts": "Caramel",
  "ibu": "48 IBU",
  "alcohol": "6.1%",
  "blg": "19.7°Blg"
}
*/ 

export default BeerList;

// const [imageUrl, setImageUrl] = useState("");

// const generateImage = () => {
//     const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             text: "A Equirectangular view of luxury house surrounded by LED lights, seats, coffee table, carpet, Dinner table, wide windows, stylish paintings, Trinket",
//         }),
//     };

//     fetch(
//         "https://dalle360-6k6gsdlfoa-el.a.run.app/generate-image",
//         requestOptions
//     )
//         .then((response) => response.json())
//         .then((data) => setImageUrl(data.imageUrl))
//         .catch((error) => console.log(error));
// };

// return (
//     <div>
//         <button onClick={generateImage}>Generate Image</button>
//         {imageUrl && <img src={imageUrl} alt="Generated Image" />}
//     </div>
// );