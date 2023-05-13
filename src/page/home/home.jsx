import React,{useState} from "react";
import Header from "../../component/Header/Header";
import Main from "../../component/Main/Main";
import Grid from "@mui/material/Grid";


const Home =()=>{
    return(
        <Grid>
            <Header setSearch={setSearch} setOpen={setOpen} setShowCalendar={setShowCalendar}/>
            <Main search={search} open={open} setOpen={setOpen}  ShowCalendar={ShowCalendar}/>
        </Grid> 
    )
}

export default Home;