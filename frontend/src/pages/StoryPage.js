import React, { useEffect, useState } from 'react';
import "./StoryPage.css";
import statusimg from "../images/pp1.png";
import { Avatar, Button, Grid, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


 function StoryBar()  {
    const[stories,setStories] =useState();
    const[yourStories,setYourStories] =useState();
    const navigate = useNavigate();

    const getData=()=>{
        let data=[
            {
                "username":"anindya_bunny",
                "imageURL":"https://media.istockphoto.com/id/1367872098/photo/full-length-shot-of-a-handsome-young-male-athlete-running-on-an-outdoor-track.jpg?s=612x612&w=0&k=20&c=imRu7XY3ObDjdy33ksq9MWYrzY1mj_-kfk4f5GknAsU="
             },
             {
                "username":"abcs",
                "imageURL":"https://media.istockphoto.com/id/1142900322/photo/happy-female-runner-jogging-in-the-morning-in-nature.webp?s=2048x2048&w=is&k=20&c=t_K9IxMgp9VAPtEVKOHYLTFrcgWPevzJfYPJ3RH3pOY="
             },
             {
                "username":"qwe",
                "imageURL":"https://static1.squarespace.com/static/5511893ce4b057ed57a22033/t/5f494de9c2b85f33c72245e7/1598639606909/s4a-doart-drips28-20200515_v28+-+DO+ART+OVER+FEATHERED+EDGED+DRIPS.png?format=1500w"
             },
             {
                "username":"jyjj",
                "imageURL":"https://pixlr.com/images/index/remove-bg.webp"
             },
             {
                "username":"jyjj",
                "imageURL":"https://www.w3schools.com/w3css/img_avatar3.png"
             },
             {
                "username":"jyjj",
                "imageURL":"https://www.thegoodmorningpics.com/wp-content/uploads/2022/11/Good-Morning-Images-2911-1.jpg"
             },
             {
                "username":"jyjj",
                "imageURL":"https://pixlr.com/images/index/remove-bg.webp"
             },
             {
                "username":"jyjj",
                "imageURL":"https://thumbs.dreamstime.com/b/young-pretty-teenager-girl-showing-mini-heart-sign-fingers-made-love-romance-happiness-concept-gesture-element-modern-teens-252998489.jpg"
             }
        ]
        console.log("data1",data)
        setStories(data)

    }   


    const getYourStories = async () => {
        fetch('http://localhost:8080/story/getAll')
        .then(response => response.json())
        .then(data => {
            setYourStories(data)
        })
        .catch(error => {
          console.log(error)
        });
  
      };


    useEffect(() =>{
        getData();
        getYourStories();
      
    },[])


    const handleSubmit = async () => {
        navigate('/Home/AddStory')
  
      };
      const handleUpdate = async () => {
        navigate('/Home/EditStory')
  
      };

    const handleDelete = async () => {
        const sid = 2
        axios
        .delete(`http://localhost:8080/story/delete/${sid}`)
        .then((response) => {
          console.log(response.data);
          window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });
       
      };


        return ( 
        <div style={{display:"flex" }}>
            <Grid item xs={5} sm={5} md={5}  sx={{marginLeft:5,marginRight:20}}>
            <div style={{overflowY: "auto" ,maxHeight:600 ,marginTop:15}}>
            <Typography sx={{textAlign:"start",fontSize:20}}>Your Stories</Typography>

            <Button variant="contained" sx={{marginLeft:3 ,backgroundColor:"green"}} startIcon={<AddCircleOutlineIcon />} onClick={handleSubmit}>
                Add a Story
            </Button>
            <div>
                {
                    yourStories?.map((item,index)=>(
                        <div className='all_status' key={index} >
                            <div className="status">
                                <Avatar className="statusbar__status" src={item.imgurl} />
                                <div className="statusbar__text">{item.username}</div>
                            </div>
                            <div className='description'>
                                <Typography sx={{fontSize:13}}>{item.caption}</Typography>
                                <Button variant="contained" sx={{backgroundColor:"red",marginRight:3}} onClick={handleDelete}>Delete</Button>
                                <Button variant="contained" sx={{backgroundColor:"orange"}} onClick={handleUpdate}>Edit</Button>
                            </div>
                            
                        </div>
                    ))
                } 
                </div>
               
            <Typography sx={{textAlign:"start",fontSize:20}}>All Stories</Typography>
            <div >
                {
                    stories&&stories.map((item,index)=>(
                        <div className='all_status'>
                            <div className="status">
                                <Avatar className="statusbar__status" src={item.imageURL} />
                                <div className="statusbar__text">{item.username}</div>
                            </div>
                            <div className='description'>
                                <Typography sx={{fontSize:13}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
            </Grid>
            <Grid item xs={7} sm={7} md={7} sx={{marginTop:40 }}>
                <div>
                <Typography sx={{fontSize:30}}>Select a story to preview</Typography>
                </div>
            </Grid>
        </div>
         ); 
    }
 
export default StoryBar;