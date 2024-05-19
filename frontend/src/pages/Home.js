import { Grid } from "@mui/material";
import React from "react";
import PostsContainer from "../components/PostsContainer";


function Home(){

return(
    <div>
    <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6} className="maincontent__container">
            <div>
            <div>
                <PostsContainer/>
            </div>
            </div>
        </Grid>
    </Grid>
</div>
)
}

export default Home;