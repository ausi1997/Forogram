import React, { useState } from "react";

const Upload = ()=>{

    const [photos,setPhotos] = useState(null);
    const [error, setError]  = useState(null);
    const types = ["image/png", "image/jpeg"];
   const  uploadPhoto = (e)=>{
       let photo = e.target.file[0];
if(photo && types.includes(photo.type)){
    setPhotos(photo);
    setError(null);
}
else{
    setPhotos(null);
    setError('Select either png or jpeg');

}

   }

    return(
        <form>
        <label>
        <input type="file" onChange={uploadPhoto}></input>
        </label>
        <div className="output">
        {error&& <div className="error">{error}</div>}
        {photos && <div>{photos.name}</div>}
        </div>
        </form>

    )
}
export default Upload;