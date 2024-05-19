import React, { Component, useEffect, useState } from 'react';
import Post from "./Post";


function PostsContainer(){
    const [postArray,setPosts] = useState([]);
   

    const getPost = () => { 

        let data=[
            {
                "postId":"123456",
                "username":"anindya",
                "imageurl":"https://www.mundiario.com/asset/thumbnail,1280,720,center,center/media/mundiario/images/2017/10/04/2017100420075856357.jpg",
                "timeStamp":"12345",
                "likes":"1634"
            },
            {
                "postId":"123457",
                "username":"john",
                "imageurl":"https://english.theleader.lk/images/2023/Aug/darts_240103.jpg",
                "timeStamp":"12345",
                "likes":"3134"
            },
            {
                "postId":"123458",
                "username":"jane",
                "imageurl":"https://idebate.net/Debatabase/Categories/image-thumb__417__blogSingleMainImage/Sport.png",
                "timeStamp":"12345",
                "likes":"2084"
            },
            {
                "postId":"123459",
                "username":"peter",
                "imageurl":"https://0.s3.envato.com/files/134974580/DSC_3607.jpg",
                "timeStamp":"1256",
                "likes":"1232"
            },
            {
                "postId":"123460",
                "username":"senir",
                "imageurl":"https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/m0swxy84colcu3on6uyp",
                "timeStamp":"1258",
                "likes":"1432"
            },
        ];
        setPosts(data);
    }

    useEffect(() =>{
        getPost();
    },[])

    return ( 
        <div >
            { postArray && postArray.map((item,index)=>( <Post postDetails={item} /> ))}
        </div>
    );
}

export default PostsContainer;
