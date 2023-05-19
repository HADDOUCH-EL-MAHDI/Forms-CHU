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
import { blue, purple, red } from "@mui/material/colors";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
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

function Identite() {
  const [identite, setIdentite] = useState({
    nomPrenom: "",
    dateNaissanceJour: "",
    dateNaissanceMois: "",
    dateNaissanceAnnee: "",
    ville: "",
    ipPatient: "",
    sexePatient: "",
    telephonePatient: "",
    convertureSanitaire: "",
  });

  const handleChangeIdentite = (event) => {
    setIdentite({
      ...identite,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("url-de-l-api", identite);
      alert("Données envoyées avec succès !");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi des données.");
    }
    console.log(identite);
  };

  const handleReset = () => {
    setIdentite({
      nomPrenom: "",
      dateNaissanceJour: "",
      dateNaissanceMois: "",
      dateNaissanceAnnee: "",
      ville: "",
      ipPatient: "",
      sexePatient: "",
      telephonePatient: "",
      convertureSanitaire: "",
    });
  };

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
              I- IDENTITE
            </Box>
            <br></br>
            <br></br>
            <FormGroup sx={{ mt: 2 }}>
              <FormControl>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      
                      <TextField
                        value={identite.nomPrenom}
                        size="small"
                        type="text"
                        id="nomPrenom"
                        name="nomPrenom"
                        label="Nom et Prénom"
                        variant="outlined"
                        onChange={handleChangeIdentite}
                        sx={{width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        value={identite.ipPatient}
                        size="small"
                        type="number"
                        id="ipPatient"
                        name="ipPatient"
                        label="IP"
                        variant="outlined"
                        onChange={handleChangeIdentite}
                        sx={{width: '100%' }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        value={identite.ville}
                        size="small"
                        type="text"
                        id="ville"
                        name="ville"
                        label="Ville"
                        variant="outlined"
                        onChange={handleChangeIdentite}
                        sx={{width: '100%' }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                    <FormLabel id="AnomaliesLigneMediane">
                  Date de naissance :
                </FormLabel>
                    </Grid>
                  </Grid>
                </Box>
                
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid sx={{md:1}} item xs={12} md={4}>
                          <TextField
                            value={identite.dateNaissanceJour}
                            size="small"
                            type="number"
                            name="dateNaissanceJour"
                            label="JJ"
                            id="dateNaissanceJour"
                            variant="outlined"
                            onChange={handleChangeIdentite}
                            sx={{width: '100%' }}
                          />
                          </Grid>
                          <Grid item xs={12} md={4}>
                          <TextField
                            value={identite.dateNaissanceMois}
                            size="small"
                            type="number"
                            label="MM"
                            name="dateNaissanceMois"
                            id="dateNaissanceMois"
                            variant="outlined"
                            onChange={handleChangeIdentite}
                            sx={{width: '100%' }}
                          />
                          </Grid>
                          <Grid item xs={12} md={4}>
                          <TextField
                            value={identite.dateNaissanceAnnee}
                            size="small"
                            type="number"
                            label="AA"
                            name="dateNaissanceAnnee"
                            id="dateNaissanceAnnee"
                            variant="outlined"
                            onChange={handleChangeIdentite}
                            sx={{width: '100%' }}
                          />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControl size="small"  sx={{width: '100%' }}>
                        <InputLabel id="sexePatient">Sexe</InputLabel>
                        <Select
                          type="text"
                          labelId="sexePatient"
                          id="sexePatient"
                          name="sexePatient"
                          value={identite.sexePatient}
                          label="Sexe"
                          onChange={handleChangeIdentite}
                          sx={{width: '100%' }}
                        >
                          <MenuItem value={"Homme"}>Homme</MenuItem>
                          <MenuItem value={"Femme"}>Femme</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <TextField
                        value={identite.telephonePatient}
                        type="number"
                        size="small"
                        id="telephonePatient"
                        name="telephonePatient"
                        label="Téléphone"
                        variant="outlined"
                        onChange={handleChangeIdentite}
                        sx={{width: '100%' }}
                      />
                    </Grid>
                  </Grid>
                </Box><br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container >
                    <Grid item xs={12} md={12}>
                    <TextField
                        value={identite.convertureSanitaire}
                        type="text"
                        size="small"
                        id="convertureSanitaire"
                        name="convertureSanitaire"
                        label="Converture sanitaire"
                        variant="outlined"
                        onChange={handleChangeIdentite}
                        sx={{width: '100%' }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs={12} md={4}>
                    <Stack spacing={2} direction="row" >
                        <ColorButton
                          type="reset"
                          variant="contained"
                          onClick={handleReset}
                          sx={{width:'100%'}}
                        >
                          <label className="bouton">Effacer</label>
                        </ColorButton>
                        <BootstrapButton
                          type="submet"
                          onClick={handleSubmit}
                          variant="contained"
                          disableRipple
                          sx={{width:'100%'}}
                          
                        >
                          <label className="bouton">Valider</label>
                        </BootstrapButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
              </FormControl>
            </FormGroup>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Identite;
