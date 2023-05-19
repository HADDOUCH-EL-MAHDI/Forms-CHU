import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { blue, orange, purple, red } from "@mui/material/colors";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import DossierVert from "./Assets/Images/DossierVert.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function Patient() { 
  
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                p: 2,
                m: -1,
              }}
            >
              <label>Patient X</label>
            </Box>
            <br></br>
            <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      
                    <Card  sx={{ maxWidth: 345}}>
                      <CardMedia
                        sx={{ height: 210 }}
                        image={DossierVert}
                        title="Dossier vert"
                      />
                      <CardContent>
                        <Typography  gutterBottom  component="div">
                          DOSSIER D'EXPLOITATION DU RETARD DE CRIOSSANCE
                          STATURO-PONDERAL
                        </Typography>
                      </CardContent>
                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div >
                            <Stack className="stack-btn"  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Imprimer 
                              </Button>
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Voir
                              </Button>
                            </Stack>
                          </div>
                        </div>
                      </CardActions>
                    </Card>
                    </Grid>
                    <Grid item sx={{mt:4}} xs={12} md={6}>
                    <Button className="bg-warning " variant="contained"
                       sx={{width: '100%', backgroundColor: 'orange' }}
                       
                      >
                        <label >Ajouter Dossier de diabete</label>
                      </Button>
                    
                      <Button type="reset" variant="contained" 
                      sx={{ width: '100%', mt: 4, backgroundColor: 'yellow', color:'black'}}>
                        <label >Ajouter Dossier d'endocrinologie</label>
                      </Button>
                    
                   
                      <Button className="bg-danger " variant="contained"
                       sx={{width: '100%',mt:4 , backgroundColor: 'red' }}>
                        <label >Ajouter Dossier de dysthyroidie</label>  
                        
                      </Button>
                    </Grid>                    
                  </Grid>
                </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Patient;
