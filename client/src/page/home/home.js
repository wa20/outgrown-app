import React from 'react';
import SearchAppBar from '../../components/navbar/navbar'
import Grid from '@mui/material/Grid';






const Home = () => {
    return (
      <>
        <Grid container spacing={0}>
         
          <Grid item xs={12}>
            <SearchAppBar/>
          </Grid>

        </Grid>
          

      </>
    );
  };
  
  export default Home;
  