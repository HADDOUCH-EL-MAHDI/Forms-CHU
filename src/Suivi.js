import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { blue, purple, red } from "@mui/material/colors";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/base/TextareaAutosize";

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

function Suivi() {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );
  const [suivi, setSuivi] = useState({
  
 
    Suivi: "",
      
     
    Date: new Date().toISOString().slice(0, 10),
    });

  

  const handleSubmit = async (event) => {
    event.preventDefault(); //pour éviter le rechargement de la page.
    try {
      // await axios.post("url-de-l-api", suivi);
      alert("Suivi envoyée avec succès !");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi de Suivi.");
    }
    console.log(suivi);
  };

  const handleDataChange = (event) => {
    setSuivi({
      ...suivi,
      [event.target.name]: event.target.value,
    });
  };

  // Mettre à jour l'état "suivi" avec la date d'aujourd'hui
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  useEffect(() => {
    setSuivi({
      ...suivi,
      Date: formattedDate,
    });
  }, []);

  const Root = styled('div')(
    ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      text-align: left;
      padding: 6px;
    }
  
    th {
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
    }
    `,
  );

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
              Suivi
            </Box>
            <br></br>
            <br></br>
            <FormGroup sx={{ mt: 2 }}>
              <FormControl>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container>
                    <Grid item xs={11} md={11}>
                      <StyledTextarea
                        aria-label="Suivi"
                        placeholder="Suivi"
                        onChange={handleDataChange}
                        className="form-control"
                        name="Suivi"
                        id="Suivi"
                        sx={{ width: "100%" }}
                        value={suivi.Suivi}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs={12} md={2}>
                      <Stack>
                        <BootstrapButton
                          type="submet"
                          variant="contained"
                          disableRipple
                          sx={{ width: "100%" }}
                          onClick={handleSubmit}
                        >
                          <label className="bouton">Enregistrer</label>
                        </BootstrapButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} >
                    <Grid item xs={12} md={12}>
                      <Root sx={{ width:'100%', maxWidth: "100%" }}>
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="largeur-texte" scope="col" style={{ width: '80%' }}>Suivi</th>
                              <th scope="col" style={{ width: '20%' }}>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr >
                              <td>{suivi.Suivi}</td>
                              <td>{suivi.Date}</td>
                            </tr>
                          </tbody>
                        </table>
                      </Root>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            </FormGroup>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Suivi;
