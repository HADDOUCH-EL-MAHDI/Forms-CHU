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





function Patient() { 
  
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Item>
            <Box
              sx={{
                display: "flex",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                m: -1,
              }}
            >
              <label>Dossier d'exploitation du retard de croissance staturo-ponderal</label>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
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
                    <Grid item xs={12} md={7}>
                      
                    <Card sx={{ maxWidth: 345 }}>
                      <h3>IDENTITE</h3>
                      <br></br>

                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div >
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                    <Grid item  xs={12} md={5} >
                    <Card sx={{ maxWidth: 345, justifyContent:'center' }} justifyContent="end">
                      <h3>PARACLINIQUE</h3> <br></br>
                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div className="d-flex justify-content-center">
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                  </Grid>
                </Box>
                <br></br>


                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                      
                    <Card sx={{ maxWidth: 345 }}>
                    <h3>ANTECEDENTS</h3>
                      <h6> 1- Personnels</h6>
                      <br></br>

                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div >
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                    <Grid item  xs={12} md={5}>
                    <Card sx={{ maxWidth: 345, justifyContent:'end' }}>
                    <h3>ANTECEDENTS</h3>
                      <h6> 2- Familiaux</h6>
                       <br></br>
                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div className="d-flex justify-content-end">
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                  </Grid>
                </Box>
                <br></br>


                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                      
                    <Card sx={{ maxWidth: 345 }}>
                    <h3>COURBE DE CROISSANCE</h3>
                      <br></br>

                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div >
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                    <Grid item  xs={12} md={5}>
                    <Card sx={{ maxWidth: 345, justifyContent:'end' }}>
                    <h5>
                        DIAGNOSTIC RETENU ET PEC THERAPEUTIQUE
                      </h5> <br></br>
                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div className="d-flex justify-content-end">
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                  </Grid>
                </Box>
                <br></br>


                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                      
                    <Card sx={{ maxWidth: 345 }}>
                    <h3>EXAMEN PHYSIQUE</h3>
                      <br></br>

                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div >
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                    <Grid item  xs={12} md={5}>
                    <Card sx={{ maxWidth: 345, justifyContent:'end' }}>
                    <h3>SUIVI ...</h3>
                       <br></br>
                      <CardActions sx={{backgroundColor: 'blue'}}>
                        <div >
                          <div className="d-flex justify-content-end">
                            <Stack  spacing={22} direction="row">
                              <Button
                                size="small"
                                variant="contained"
                              >
                                Modifier 
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
                  </Grid>
                </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Patient;
