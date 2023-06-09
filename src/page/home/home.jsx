import React,{useState} from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Grid from "@mui/material/Grid";


const Home =()=>{

    const [search, setSearch] = useState('');
    const [ShowCalendar, setShowCalendar] = useState(false)
    const [open, setOpen] = useState(false);

    return(
        <Grid>
            <Header setSearch={setSearch} setOpen={setOpen} setShowCalendar={setShowCalendar}/>
            <Main search={search} open={open} setOpen={setOpen}  ShowCalendar={ShowCalendar}/>
        </Grid> 
    )
}

export default Home;