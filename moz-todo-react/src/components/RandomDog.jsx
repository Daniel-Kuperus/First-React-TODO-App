import { useState, useEffect } from "react";

function RandomDog() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setPhoto(data.message);
      });
  }, []);

  return (
    <div className="image-container">
      <img src={photo} className="image"></img>
    </div>
  );
}

export default RandomDog;
