import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function MyPosts(){
    const navigate = useNavigate();
    const[posts,setPosts]=useState();
    const[username,setUsername]=useState();
    const[sportname,setSportname]=useState();
    const[description,setDescription]=useState();
    const[imageurl,setImageurl]=useState();

useEffect(()=>{
    fetch('http://localhost:8080/post/getAll')
    .then(response => response.json())
    .then(data => {
        setPosts(data)
        console.log("posts",data)
    })
    .catch(error => {
      console.log(error)
    });
},[])

    const handleSubmit= (event) =>{
        event.preventDefault();
        const post = ({
            username:username,
            sportname:sportname,
            imageurl:imageurl,
            description:description
        })
        
        setPosts([...posts,post])
    
          fetch("http://localhost:8080/post/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(post)
    
        }).then(()=>{
          console.log("New post created")
        })
    }

    const handleUpdate =() =>{

        navigate('/Home/EditStory')
    }

    const handleDelete =() =>{

        const sid = 12
        axios
        .delete(`http://localhost:8080/post/delete/${sid}`)
        .then((response) => {
          console.log(response.data);
          window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });
       
      
    }


    return(
        <>
        <h1>Your posts</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
            UserName:
                <input 
                    type="text" 
                    name="name" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
            Sport Name:
                <input 
                    type="text" 
                    name="food" 
                    value={sportname}
                    onChange={(event) => setSportname(event.target.value)}
                />
            </label>
            <br />
            <label>
            Description:
                <input 
                    type="text" 
                    name="description" 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <br />
            <label>
            ImageURL:
                <input 
                    type="text" 
                    name="image" 
                    value={imageurl}
                    onChange={(event) => setImageurl(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Create a Post" />
        </form>
        </div>
        <br />
        <br />
        { posts?.map((item,index)=>(
            <div key={index}>
                <Post postDetails={item} />
                <Button variant="contained" sx={{marginBottom:10, backgroundColor:"red", marginRight:5}} onClick={handleDelete}>Delete post</Button>
                <Button variant="contained" sx={{marginBottom:10, backgroundColor:"orange"}} onClick={handleUpdate}>Update post</Button>
            </div>))}
        
        </>
    )
}

export default MyPosts;