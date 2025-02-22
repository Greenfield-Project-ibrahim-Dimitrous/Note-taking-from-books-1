import * as React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from "react";
// import  axios from "axios"


const theme = createTheme();

export default function SignUp() {
    const [bookNote,setBookNote] = useState(
        {
          bookName:"",
          author:"",
          notes:""
        }
    )
  const handleSubmit = (event) => {
    event.preventDefault();
    // axios.post("http://localhost:3002/api/record", sleepRoutine).then((res)=>{
    //     console.log(res)
    // }).catch((err)=>
    // { console.log(err)})

  };
  function handleChange(e){
    const {name, value} = e.target;
    setBookNote({
        ...bookNote,
        [name]:value,
    })
    
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            BOOK
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="BookName"
                  required
                  fullWidth
                  id="BookName"
                  label="BookName"
                  value={bookNote.bookName}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Author"
                  label="Author"
                  name="Author"
                  value={bookNote.author}
                  autoComplete="Author"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Notes"
                  label="Notes"
                  type="Notes"
                  id="Notes"
                  value={bookNote.notes}
                  autoComplete="Notes"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Record
            </Button>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
    
      </Container>
    </ThemeProvider>
  );
}