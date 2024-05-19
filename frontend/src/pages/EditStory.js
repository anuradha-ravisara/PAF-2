import React, { useState } from "react";
import "./AddStory.css";
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Snackbar } from "@mui/material";

function EditStory(){

const navigate = useNavigate();
const [SID,setStoryID]= useState(100);
const [story,setStories]=useState();
const[name,setName] = useState();
const[caption,setCaption] = useState();
const[imageURL,setImageURL] = useState();

const [notify, setnotify] = useState(false);
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const handleSubmit= (event) =>{
    const story ={
        name:name,
        caption:caption,
        imageurl:imageURL
    }
    const url = `https://localhost:8080/stor/update/${SID}`;
    return axios.put(url, story)
      .then(response => {
        setStories(response.data);
        setnotify(true)
        navigate('/Home/Stories')

        return response.data;

      })
      .catch(error => {
        console.error(error);
      });
  
}

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setnotify(false);
    }; 

return(
    <>
    <Snackbar open={notify} autoHideDuration={2500} onClose={handleClose}>
    <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
        The Story was Successfully Updated !
        </Alert>
     </Snackbar>
    <h1 >Edit your Story</h1>
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
            UserName:
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
            Caption:
                <input 
                    type="text" 
                    name="subject" 
                    value={caption}
                    onChange={(event) => setCaption(event.target.value)}
                />
            </label>
            <br />
            <label>
            ImageURL:
                <input 
                    type="text" 
                    name="subject" 
                    value={imageURL}
                    onChange={(event) => setImageURL(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Create a story" />
        </form>
        </div>
    </>
)

}

export default EditStory;