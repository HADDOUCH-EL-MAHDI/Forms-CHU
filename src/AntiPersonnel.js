import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
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

function AntiPersonnel() {
  const [antiPersonnel, setAntiPersonnel] = useState({
    Consanguinite: "",
    Grossesse: "",
    AccouchementVoie: "",
    Incidents: "",
    Incident: "",
    Terme: "",
    Poids: "",
    Taille: "",
    PC: "",
    Allaitement: "",
    DiversificationAlimentaire: "",
    DeveloppementPsychomoteur: "",
    PathologieNeonatale: "",
    PathologieChronique: "",
    Traitement: "",
    ContextePsychoAffectif: "",
  });

  const handleSubmitAntiPersonnel = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire
    // Utilisez les valeurs de formData pour effectuer les actions nécessaires
    console.log(antiPersonnel);
  };

  const handleResetAntiPersonnel = () => {
    setAntiPersonnel({
      Consanguinite: "",
      Grossesse: "",
      AccouchementVoie: "",
      Incidents: "",
      Incident: "",
      Terme: "",
      Poids: "",
      Taille: "",
      PC: "",
      Allaitement: "",
      DiversificationAlimentaire: "",
      DeveloppementPsychomoteur: "",
      PathologieNeonatale: "",
      PathologieChronique: "",
      Traitement: "",
      ContextePsychoAffectif: "",
    });
  };

  const handleChangeAntiPersonnel = (event) => {
    setAntiPersonnel({
      ...antiPersonnel,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
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
              II- ANTECEDENTS-Personnels
            </Box>
            <br></br>
            <br></br>
            <FormGroup sx={{ mt: 2 }}>
              <FormControl>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <FormControl>
                        <FormLabel id="Consanguinite">
                          Consanguinité :{" "}
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="Consanguinite"
                          name="Consanguinite"
                          value={antiPersonnel.Consanguinite}
                          onChange={handleChangeAntiPersonnel}
                        >
                          <FormControlLabel
                            value="Oui"
                            control={<Radio />}
                            label="Oui"
                          />
                          <FormControlLabel
                            value="Non"
                            control={<Radio />}
                            label="Non"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl>
                        <FormLabel id="Grossesse">Grossesse : </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="Grossesse"
                          name="Grossesse"
                          value={antiPersonnel.Grossesse}
                          onChange={handleChangeAntiPersonnel}
                        >
                          <FormControlLabel
                            value="Suivie"
                            control={<Radio />}
                            label="Suivie"
                          />
                          <FormControlLabel
                            value="Non Suivie"
                            control={<Radio />}
                            label="Non Suivie"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControl>
                        <FormLabel id="AccouchementVoie">
                          Accouchement : Voie :
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="AccouchementVoie"
                          name="AccouchementVoie"
                          value={antiPersonnel.AccouchementVoie}
                          onChange={handleChangeAntiPersonnel}
                        >
                          <FormControlLabel
                            value="Haute"
                            control={<Radio />}
                            label="Haute"
                          />
                          <FormControlLabel
                            value="Basse"
                            control={<Radio />}
                            label="Basse"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="Incidents"
                        type="text"
                        label="Incidents (HTA, tabac, infection…)"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="Incidents"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.Incidents}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="Incident"
                        type="text"
                        label="Incident"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="Incident"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.Incident}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="Terme"
                        type="text"
                        label="Terme"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="Terme"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.Terme}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <FormLabel id="MesurationNaissance">
                        Mesurations à la naissance:
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Poids"
                        type="number"
                        label="Poids"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="Poids"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.Poids}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Taille"
                        type="number"
                        label="Taille"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="Taille"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.Taille}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="PC"
                        type="number"
                        label="PC"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="PC"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.PC}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="Allaitement"
                        type="text"
                        label="Allaitement"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="Allaitement"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.Allaitement}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="DiversificationAlimentaire"
                        type="text"
                        label="Diversification alimentaire"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="DiversificationAlimentaire"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.DiversificationAlimentaire}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="DeveloppementPsychomoteur"
                        type="text"
                        label="Développement psychomoteur :"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="DeveloppementPsychomoteur"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.DeveloppementPsychomoteur}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="PathologieNeonatale"
                        type="text"
                        label="Pathologie néonatale (hypoglycémie, ictère prolongé...) :"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="PathologieNeonatale"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.PathologieNeonatale}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="PathologieChronique"
                        type="text"
                        label="Pathologie chronique :"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="PathologieChronique"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.PathologieChronique}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="Traitement"
                        type="text"
                        label="Traitement (corticoïdes ; radiothérapie…) :"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="Traitement"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.Traitement}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="ContextePsychoAffectif"
                        type="text"
                        label="Contexte psycho affectif :"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="ContextePsychoAffectif"
                        onChange={handleChangeAntiPersonnel}
                        value={antiPersonnel.ContextePsychoAffectif}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs={12} md={4}>
                      <Stack spacing={2} direction="row">
                        <ColorButton
                          type="reset"
                          variant="contained"
                          onClick={handleResetAntiPersonnel}
                          sx={{ width: "100%" }}
                        >
                          <label className="bouton">Effacer</label>
                        </ColorButton>
                        <BootstrapButton
                          type="submet"
                          onClick={handleSubmitAntiPersonnel}
                          variant="contained"
                          disableRipple
                          sx={{ width: "100%" }}
                        >
                          <label className="bouton">Valider</label>
                        </BootstrapButton>
                      </Stack>
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
export default AntiPersonnel;
