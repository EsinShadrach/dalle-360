import { useState } from 'react';

function ImageGenerator() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://dalle360-6k6gsdlfoa-el.a.run.app/generate-image', {
      method: 'POST',
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text
      })
    })
      .then(response => response.json())
      .then((data) =>{
            setImageUrl(data.url)
            console.log(data)
        })
      .catch((error) => {
            console.error(error)
        });
      console.log("SUBMITTING")
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Image Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input className='border' type="text" value={text} onChange={handleTextChange} />
        </label>
        <button className='border bg-blue-100 text-blue-900 rounded-md p-1 px-3 m-3' type="submit">Generate Image</button>
      </form>
      {imageUrl && (
        <img src={imageUrl} alt="Generated Image" />
      )}
    </div>
  );
}

export default ImageGenerator;
