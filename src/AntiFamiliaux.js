import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import {
  FormGroup,
  InputLabel,
  FormControl,
  Input,
  TextField,
  FormControlLabel,
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

function AntiFamiliaux() {
  const [antiFamiliaux, setAntiFamiliaux] = useState({
    TaillePere: "",
    ageDePubertPere: "",
    TailleMere: "",
    ageDePubertMere: "",
    TailleCible: "",
    TailleFreres: "",
    PathologieFamiliale: "",
    signesDigestifs: {
      diarrhee: false,
      vomissements: false,
      distensionAbominale: false,
    },
    syndromeHTIC: {
      cephalees: false,
      troublesVisuels: false,
      vomissements: false,
    },
    autres: {
      constipation: false,
      rectorragies: false,
      douleurAbdominale: false,
      paleur: false,
      asthenie: false,
      anorexie: false,
      boulimie: false,
      syndromePolyuroPolydipsique: false,
    },
    AutresFamiliaux: "",
  });

  const handleChangeAntiFamiliaux = (e) => {
    const { name, value } = e.target;
    setAntiFamiliaux((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (category, name, value) => {
    setAntiFamiliaux((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [name]: value,
      },
    }));
  };

  const handleSubmitAntiFamiliaux = (e) => {
    e.preventDefault();
    // Do something with the form data
    console.log(antiFamiliaux);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={9}>
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
              II- ANTECEDENTS-Familiaux
            </Box>
            <br></br>
            <br></br>
            <FormGroup sx={{ mt: 2 }}>
              <FormControl>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={1}>
                      <FormLabel>Père :</FormLabel>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="TaillePere"
                        type="number"
                        label="Taille"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="TaillePere"
                        value={antiFamiliaux.TaillePere}
                        onChange={handleChangeAntiFamiliaux}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="ageDePubertPere"
                        type="number"
                        label="âge de la puberté"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="ageDePubertPere"
                        value={antiFamiliaux.ageDePubertPere}
                        onChange={handleChangeAntiFamiliaux}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <FormLabel>Mère :</FormLabel>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="TailleMere"
                        type="number"
                        label="Taille"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="TailleMere"
                        value={antiFamiliaux.TailleMere}
                        onChange={handleChangeAntiFamiliaux}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="ageDePubertMere"
                        type="number"
                        label="âge de la puberté"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="ageDePubertMere"
                        value={antiFamiliaux.ageDePubertMere}
                        onChange={handleChangeAntiFamiliaux}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="TailleCible"
                        type="number"
                        label="Taille cible"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="TailleCible"
                        value={antiFamiliaux.TailleCible}
                        onChange={handleChangeAntiFamiliaux}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="TailleFreres"
                        type="number"
                        label="Taille des frères"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="TailleFreres"
                        value={antiFamiliaux.TailleFreres}
                        onChange={handleChangeAntiFamiliaux}
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <TextField
                        id="PathologieFamiliale"
                        type="text"
                        label="Pathologie familiale connue ayant un impact sur la croissance"
                        variant="outlined"
                        size="small"
                        fullWidth
                        name="PathologieFamiliale"
                        value={antiFamiliaux.PathologieFamiliale}
                        onChange={handleChangeAntiFamiliaux}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                      <FormLabel>Signes digestifs : </FormLabel>
                    </Grid>
                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="signesDigestifs"
                            checked={antiFamiliaux.signesDigestifs.diarrhee}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "signesDigestifs",
                                "diarrhee",
                                e.target.checked
                              )
                            }
                            value="diarrhee"
                          />
                        }
                        label="Diarrhée"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="vomissements"
                            checked={antiFamiliaux.signesDigestifs.vomissements}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "signesDigestifs",
                                "vomissements",
                                e.target.checked
                              )
                            }
                            value="Vomissements"
                            color="secondary"
                          />
                        }
                        label="Vomissements"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="distensionAbominale"
                            checked={
                              antiFamiliaux.signesDigestifs.distensionAbominale
                            }
                            onChange={(e) =>
                              handleCheckboxChange(
                                "signesDigestifs",
                                "distensionAbominale",
                                e.target.checked
                              )
                            }
                            value="Distension abominale"
                            color="success"
                          />
                        }
                        label="Distension abominale"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                      <FormLabel></FormLabel>
                    </Grid>
                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="constipation"
                            checked={antiFamiliaux.constipation}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "constipation",
                                "constipation",
                                e.target.checked
                              )
                            }
                            value="Constipation"
                          />
                        }
                        label="Constipation"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="rectorragies"
                            checked={antiFamiliaux.rectorragies}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "rectorragies",
                                "rectorragies",
                                e.target.checked
                              )
                            }
                            value="Rectorragies"
                            color="secondary"
                          />
                        }
                        label="Rectorragies"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="douleurAbdominale"
                            checked={antiFamiliaux.douleurAbdominale}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "douleurAbdominale",
                                "douleurAbdominale",
                                e.target.checked
                              )
                            }
                            value="Douleur abdominale"
                            color="success"
                          />
                        }
                        label="Douleur abdominale"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                      <FormLabel>Syndrome d’HTIC : </FormLabel>
                    </Grid>
                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="syndromeHTIC"
                            checked={antiFamiliaux.syndromeHTIC.cephalees}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "syndromeHTIC",
                                "cephalees",
                                e.target.checked
                              )
                            }
                            value="Céphalées"
                          />
                        }
                        label="Céphalées"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="syndromeHTIC"
                            checked={antiFamiliaux.syndromeHTIC.troublesVisuels}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "syndromeHTIC",
                                "troublesVisuels",
                                e.target.checked
                              )
                            }
                            value="troubles visuels"
                            color="secondary"
                          />
                        }
                        label="troubles visuels"
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="syndromeHTIC"
                            checked={antiFamiliaux.syndromeHTIC.vomissements}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "syndromeHTIC",
                                "vomissements",
                                e.target.checked
                              )
                            }
                            value="Vomissements"
                            color="success"
                          />
                        }
                        label="Vomissements"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="paleur"
                            checked={antiFamiliaux.paleur}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "paleur",
                                "paleur",
                                e.target.checked
                              )
                            }
                            value="Pâleur"
                            color="success"
                          />
                        }
                        label="Pâleur"
                      />
                    </Grid>
                    <Grid sx={{ md: 1 }} item xs={12} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="asthenie"
                            checked={antiFamiliaux.asthenie}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "asthenie",
                                "asthenie",
                                e.target.checked
                              )
                            }
                            value="Asthénie"
                          />
                        }
                        label="Asthénie"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="anorexie"
                            checked={antiFamiliaux.anorexie}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "anorexie",
                                "anorexie",
                                e.target.checked
                              )
                            }
                            value="Anorexie"
                            color="secondary"
                          />
                        }
                        label="Anorexie"
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="boulimie"
                            checked={antiFamiliaux.boulimie}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "boulimie",
                                "boulimie",
                                e.target.checked
                              )
                            }
                            value="Boulimie"
                            color="default"
                          />
                        }
                        label="Boulimie"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="syndromePolyuroPolydipsique"
                            checked={antiFamiliaux.syndromePolyuroPolydipsique}
                            onChange={(e) =>
                              handleCheckboxChange(
                                "syndromePolyuroPolydipsique",
                                "syndromePolyuroPolydipsique",
                                e.target.checked
                              )
                            }
                            value="Syndrome polyuro-polydipsique"
                            color="default"
                          />
                        }
                        label="Syndrome polyuro-polydipsique"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={12}>
                      <label htmlFor="AutresFamiliaux">Autres :</label>
                      <TextField
                       className="form-control"
                       name="AutresFamiliaux"
                       id="AutresFamiliaux"
                       onChange={handleChangeAntiFamiliaux}
                       value={AntiFamiliaux.AutresFamiliaux}
                            sx={{width:'100%'}}
                            size="small"
                            type="text"
                            variant="outlined"
                          />
                      {/* <textarea
                        className="form-control"
                        name="AutresFamiliaux"
                        id="AutresFamiliaux"
                        rows="3"
                        onChange={handleChangeAntiFamiliaux}
                        value={AntiFamiliaux.AutresFamiliaux}
                      ></textarea> */}
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
                          sx={{ width: "100%" }}
                        >
                          <label className="bouton">Effacer</label>
                        </ColorButton>
                        <BootstrapButton
                          type="submet"
                          onClick={handleSubmitAntiFamiliaux}
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
                <br></br>
              </FormControl>
            </FormGroup>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AntiFamiliaux;
