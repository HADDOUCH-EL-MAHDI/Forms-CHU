import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  FormGroup,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  TextField,
  Radio,
  RadioGroup,
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

function ExamenPhysique() {
    const [examenPhysiqueData, setExamenPhysiqueData] = useState({
        poids: "",
        taille: "",
        imc: "",
        pc: "",
        bu: "",
        signesDysmorphiques: "",
        stadePubertaireTanner: "",
        fenteLabiale: false,
        fentePalatine: false,
        incisiveCentraleUnique: false,
        flechissement: false,
        stagnation: false,
        hippocratismeDigital: "",
        syndromeCushing: "",
        micropenis: "",
        examenThyroide: "",
        examenCardioVx: "",
        examenPleuroPulmonaire: "",
        examenNeurologique: "",
        autresExamenPhysique: "",
      });
    
      const handleChangeExamenPhysiqueData = (event) => {
        const { name, value, type, checked } = event.target;
        setExamenPhysiqueData((prevValues) => ({
          ...prevValues,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleSubmitExamenPhysiqueData = (event) => {
        event.preventDefault();
        console.log(examenPhysiqueData)
        // Effectuer des actions supplémentaires ici avec les valeurs du formulaire
      };

      const handleResetExamenPhysiqueData = () => {
        setExamenPhysiqueData({
          poids: "",
          taille: "",
          imc: "",
          pc: "",
          bu: "",
          signesDysmorphiques: "",
          stadePubertaireTanner: "",
          fenteLabiale: false,
          fentePalatine: false,
          incisiveCentraleUnique: false,
          flechissement: false,
          stagnation: false,
          hippocratismeDigital: "",
          syndromeCushing: "",
          micropenis: "",
          examenThyroide: "",
          examenCardioVx: "",
          examenPleuroPulmonaire: "",
          examenNeurologique: "",
          autresExamenPhysique: "",
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
              III- Examen physique
            </Box>
            <br></br>
            <br></br>
            <FormGroup sx={{ mt: 2 }}>
              <FormControl>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                    <TextField
                    id="Poids"
                    type="number"
                    label="Poids"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="poids"
                    value={examenPhysiqueData.poids}
                    onChange={handleChangeExamenPhysiqueData}
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
                    name="taille"
                    value={examenPhysiqueData.taille}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <TextField
                    id="IMC"
                    type="number"
                    label="IMC"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="imc"
                    value={examenPhysiqueData.imc}
                    onChange={handleChangeExamenPhysiqueData}
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
                    name="pc"
                    value={examenPhysiqueData.pc}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <TextField
                    id="BU"
                    type="text"
                    label="BU"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="bu"
                    value={examenPhysiqueData.bu}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <TextField
                    id="SignesDysmorphiques"
                    type="text"
                    label="Signes dysmorphiques"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="signesDysmorphiques"
                    value={examenPhysiqueData.signesDysmorphiques}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <TextField
                    id="StadePubertaireTanner"
                    type="text"
                    label="Stade pubertaire de Tanner"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="stadePubertaireTanner"
                    value={examenPhysiqueData.stadePubertaireTanner}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                    <FormLabel id="AnomaliesLigneMediane">
                  Anomalies de la ligne médiane :
                </FormLabel>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="fenteLabiale"
                        checked={examenPhysiqueData.fenteLabiale}
                        onChange={handleChangeExamenPhysiqueData}
                        value="Fente labiale"
                      />
                    }
                    label="Fente labiale"
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="fentePalatine"
                        checked={examenPhysiqueData.fentePalatine}
                        onChange={handleChangeExamenPhysiqueData}
                        value="Fente palatine"
                        color="secondary"
                      />
                    }
                    label="Fente palatine"
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="incisiveCentraleUnique"
                        checked={examenPhysiqueData.incisiveCentraleUnique}
                        onChange={handleChangeExamenPhysiqueData}
                        value="Incisive centrale unique"
                        color="success"
                      />
                    }
                    label="Incisive centrale unique"
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <FormLabel id="CourbeCroissance">
                    Courbe de croissance :
                  </FormLabel>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="flechissement"
                        checked={examenPhysiqueData.flechissement}
                        onChange={handleChangeExamenPhysiqueData}
                        value="Fléchissement"
                        color="secondary"
                      />
                    }
                    label="Fléchissement"
                  />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                    control={
                      <Checkbox
                        name="stagnation"
                        checked={examenPhysiqueData.stagnation}
                        onChange={handleChangeExamenPhysiqueData}
                        value="Stagnation"
                        color="success"
                      />
                    }
                    label="Stagnation"
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                    <FormLabel id="HippocratismeDigital">
                      Hippocratisme digital :
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="HippocratismeDigital"
                      name="hippocratismeDigital"
                      value={examenPhysiqueData.hippocratismeDigital}
                      onChange={handleChangeExamenPhysiqueData}
                    >
                      <FormControlLabel
                        value="Présent"
                        control={<Radio />}
                        label="Présent"
                      />

                      <FormControlLabel
                        value="Absent"
                        control={<Radio />}
                        label="Absent"
                      />
                    </RadioGroup>
                  </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                    <FormLabel id="SyndromeCushing">
                      Syndrome de cushing :
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="SyndromeCushing"
                      name="syndromeCushing"
                      value={examenPhysiqueData.syndromeCushing}
                      onChange={handleChangeExamenPhysiqueData}
                    >
                      <FormControlLabel
                        value="Présent"
                        control={<Radio />}
                        label="Présent"
                      />
                      <FormControlLabel
                        value="Absent"
                        control={<Radio />}
                        label="Absent"
                      />
                    </RadioGroup>
                  </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                    <FormLabel id="Micropenis">Micropénis :</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="Micropenis"
                      name="micropenis"
                      value={examenPhysiqueData.micropenis}
                      onChange={handleChangeExamenPhysiqueData}
                    >
                      <FormControlLabel
                        value="Présent"
                        control={<Radio />}
                        label="Présent"
                      />
                      <FormControlLabel
                        value="Absent"
                        control={<Radio />}
                        label="Absent"
                      />
                    </RadioGroup>
                  </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenThyroide"
                    type="text"
                    label="Examen de la thyroide"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenThyroide"
                    value={examenPhysiqueData.examenThyroide}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenCardioVx"
                    type="text"
                    label="Examen cardio vx"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenCardioVx"
                    value={examenPhysiqueData.examenCardioVx}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenPleuroPulmonaire"
                    type="text"
                    label="Examen pleuro pulmonaire"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenPleuroPulmonaire"
                    value={examenPhysiqueData.examenPleuroPulmonaire}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                    id="ExamenNeurologique"
                    type="text"
                    label="Examen neurologique"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="examenNeurologique"
                    value={examenPhysiqueData.examenNeurologique}
                    onChange={handleChangeExamenPhysiqueData}
                  />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={12}>
                    <label htmlFor="AutresExamenPhysique">Autres :</label>
                      <TextField
                       className="form-control"
                       name="autresExamenPhysique"
                       id="AutresExamenPhysique"
                       onChange={handleChangeExamenPhysiqueData}
                       value={examenPhysiqueData.autresExamenPhysique}
                            sx={{width:'100%'}}
                            size="small"
                            type="text"
                            variant="outlined"
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
                          sx={{width:'100%'}}
                          onClick={handleResetExamenPhysiqueData}
                        >
                          <label className="bouton">Effacer</label>
                        </ColorButton>
                        <BootstrapButton
                          type="submet"
                          onClick={handleSubmitExamenPhysiqueData}
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
export default ExamenPhysique;
