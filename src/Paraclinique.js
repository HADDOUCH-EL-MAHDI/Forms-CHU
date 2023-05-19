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

const Root = styled("div")(
  ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[200]
      };
      text-align: left;
      padding: 6px;
    }
  
    th {
      background-color: ${
        theme.palette.mode === "dark" ? grey[900] : grey[100]
      };
    }
    `
);

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

function Paraclinique() {
  const [paraclinique, setParaclinique] = useState({
    AgeOsseux: "",
    AgeChronologique: "",
    GB: "",
    PLT: "",
    Hb: "",
    VGM: "",
    TCMH: "",
    Ca: "",
    Ph: "",
    K: "",
    Na: "",
    Oestradiol: "",
    Testosterone: "",
    LH: "",
    FSH: "",
    ferritinemie: "",
    IgAAntiTransglutaminases: "",
    IgATotaux: "",
    AcAntiEndomysium: "",
    BiopcieJejunale: "",
    FT4: "",
    TSH: "",
    IGF_1: "",
    TestsStimulationHormoneCroissance: "",
    CaryotypeSanguin: "",
    Uree: "",
    Creatininemie: "",
    VS: "",
    CRP: "",
    AutresFamiliaux: "",
    InsulineJJ: "",
    InsulineMM: "",
    InsulineAA: "",

    LDopaJJ: "",
    LDopaMM: "",
    LDopaAA: "",

    InsulineGLYCAP0: "",
    InsulineGLYCAP15: "",
    InsulineGLYCAP30: "",
    InsulineGLYCAP45: "",
    InsulineGLYCAP60: "",
    InsulineGLYCAP90: "",
    InsulineGLYCAP120: "",

    InsulineGLYVEIN0: "",
    InsulineGLYVEIN15: "",
    InsulineGLYVEIN30: "",
    InsulineGLYVEIN45: "",
    InsulineGLYVEIN60: "",
    InsulineGLYVEIN90: "",
    InsulineGLYVEIN120: "",

    InsulineGH0: "",
    InsulineGH15: "",
    InsulineGH30: "",
    InsulineGH45: "",
    InsulineGH60: "",
    InsulineGH90: "",
    InsulineGH120: "",

    InsulineCORTISOL0: "",
    InsulineCORTISOL15: "",
    InsulineCORTISOL30: "",
    InsulineCORTISOL45: "",
    InsulineCORTISOL60: "",
    InsulineCORTISOL90: "",
    InsulineCORTISOL120: "",

    InsulineACTH0: "",
    InsulineACTH15: "",
    InsulineACTH30: "",
    InsulineACTH45: "",
    InsulineACTH60: "",
    InsulineACTH90: "",
    InsulineACTH120: "",
   


    LDopaGLYCAP0: "",
    LDopaGLYCAP15: "",
    LDopaGLYCAP30: "",
    LDopaGLYCAP45: "",
    LDopaGLYCAP60: "",
    LDopaGLYCAP90: "",
    LDopaGLYCAP120: "",

    LDopaGLYVEIN0: "",
    LDopaGLYVEIN15: "",
    LDopaGLYVEIN30: "",
    LDopaGLYVEIN45: "",
    LDopaGLYVEIN60: "",
    LDopaGLYVEIN90: "",
    LDopaGLYVEIN120: "",

    LDopaGH0: "",
    LDopaGH15: "",
    LDopaGH30: "",
    LDopaGH45: "",
    LDopaGH60: "",
    LDopaGH90: "",
    LDopaGH120: "",

    LDopaCORTISOL0: "",
    LDopaCORTISOL15: "",
    LDopaCORTISOL30: "",
    LDopaCORTISOL45: "",
    LDopaCORTISOL60: "",
    LDopaCORTISOL90: "",
    LDopaCORTISOL120: "",

    LDopaACTH0: "",
    LDopaACTH15: "",
    LDopaACTH30: "",
    LDopaACTH45: "",
    LDopaACTH60: "",
    LDopaACTH90: "",
    LDopaACTH120: "",
  });

  const handleResetParaclinique = () => {
    setParaclinique({
      AgeOsseux: "",
      AgeChronologique: "",
      GB: "",
      PLT: "",
      Hb: "",
      VGM: "",
      TCMH: "",
      Ca: "",
      Ph: "",
      K: "",
      Na: "",
      Oestradiol: "",
      Testosterone: "",
      LH: "",
      FSH: "",
      ferritinemie: "",
      IgAAntiTransglutaminases: "",
      IgATotaux: "",
      AcAntiEndomysium: "",
      BiopcieJejunale: "",
      FT4: "",
      TSH: "",
      IGF_1: "",
      TestsStimulationHormoneCroissance: "",
      CaryotypeSanguin: "",
      Uree: "",
      Creatininemie: "",
      VS: "",
      CRP: "",
      AutresFamiliaux: "",
      InsulineJJ: "",
      InsulineMM: "",
      InsulineAA: "",

      InsulineGLYCAP0: "",
      InsulineGLYCAP15: "",
      InsulineGLYCAP30: "",
      InsulineGLYCAP45: "",
      InsulineGLYCAP60: "",
      InsulineGLYCAP90: "",
      InsulineGLYCAP120: "",

      InsulineGLYVEIN0: "",
      InsulineGLYVEIN15: "",
      InsulineGLYVEIN30: "",
      InsulineGLYVEIN45: "",
      InsulineGLYVEIN60: "",
      InsulineGLYVEIN90: "",
      InsulineGLYVEIN120: "",

      InsulineGH0: "",
      InsulineGH15: "",
      InsulineGH30: "",
      InsulineGH45: "",
      InsulineGH60: "",
      InsulineGH90: "",
      InsulineGH120: "",

      InsulineCORTISOL0: "",
      InsulineCORTISOL15: "",
      InsulineCORTISOL30: "",
      InsulineCORTISOL45: "",
      InsulineCORTISOL60: "",
      InsulineCORTISOL90: "",
      InsulineCORTISOL120: "",

      InsulineACTH0: "",
      InsulineACTH15: "",
      InsulineACTH30: "",
      InsulineACTH45: "",
      InsulineACTH60: "",
      InsulineACTH90: "",
      InsulineACTH120: "",


      LDopaGLYCAP0: "",
    LDopaGLYCAP15: "",
    LDopaGLYCAP30: "",
    LDopaGLYCAP45: "",
    LDopaGLYCAP60: "",
    LDopaGLYCAP90: "",
    LDopaGLYCAP120: "",

    LDopaGLYVEIN0: "",
    LDopaGLYVEIN15: "",
    LDopaGLYVEIN30: "",
    LDopaGLYVEIN45: "",
    LDopaGLYVEIN60: "",
    LDopaGLYVEIN90: "",
    LDopaGLYVEIN120: "",

    LDopaGH0: "",
    LDopaGH15: "",
    LDopaGH30: "",
    LDopaGH45: "",
    LDopaGH60: "",
    LDopaGH90: "",
    LDopaGH120: "",

    LDopaCORTISOL0: "",
    LDopaCORTISOL15: "",
    LDopaCORTISOL30: "",
    LDopaCORTISOL45: "",
    LDopaCORTISOL60: "",
    LDopaCORTISOL90: "",
    LDopaCORTISOL120: "",

    LDopaACTH0: "",
    LDopaACTH15: "",
    LDopaACTH30: "",
    LDopaACTH45: "",
    LDopaACTH60: "",
    LDopaACTH90: "",
    LDopaACTH120: "",
    });
  };

  const handleSubmitParaclinique = async (event) => {
    event.preventDefault();
    try {
      await axios.post("url-de-l-api", paraclinique);
      alert("Données envoyées avec succès !");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi des données.");
    }
  };

  const handleChangeParaclinique = (event) => {
    setParaclinique({
      ...paraclinique,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4, mb: 2 }}>
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
              IV - Paraclinique
            </Box>
            <br></br>
            <br></br>
            <FormGroup sx={{ mt: 2 }}>
              <FormControl>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="AgeOsseux"
                        name="AgeOsseux"
                        type="number"
                        label="Age osseux !"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.AgeOsseux}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="AgeChronologique"
                        name="AgeChronologique"
                        type="number"
                        label="Age chronologique "
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.AgeChronologique}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <FormLabel id="NFS">NFS :</FormLabel>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="GB"
                        name="GB"
                        type="number"
                        label="GB"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.GB}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="PLT"
                        name="PLT"
                        type="number"
                        label="PLT"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.PLT}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="Hb"
                        name="Hb"
                        type="number"
                        label="Hb"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Hb}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="VGM"
                        name="VGM"
                        type="number"
                        label="VGM"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.VGM}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="TCMH"
                        name="TCMH"
                        type="number"
                        label="TCMH"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.TCMH}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <FormLabel className="mr-2" id="IonogrammeSanguin">
                        Ionogramme sanguin :
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Box>

                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Ca"
                        name="Ca"
                        type="number"
                        label="Ca"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Ca}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Ph"
                        name="Ph"
                        type="number"
                        label="Ph"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Ph}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="K"
                        name="K"
                        type="number"
                        label="K"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.K}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Na"
                        name="Na"
                        type="number"
                        label="Na"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Na}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <FormLabel id="NFS">Hormones sexuelles :</FormLabel>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Oestradiol"
                        name="Oestradiol"
                        type="number"
                        label="Oestradiol"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Oestradiol}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Testosterone"
                        name="Testosterone"
                        type="number"
                        label="Testostérone"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Testosterone}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="LH"
                        name="LH"
                        type="number"
                        label="LH"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.LH}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="FSH"
                        name="FSH"
                        type="number"
                        label="FSH"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.FSH}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="ferritinemie"
                        name="ferritinemie"
                        type="number"
                        label="Ferritinémie"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.ferritinemie}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="IgAAntiTransglutaminases"
                        name="IgAAntiTransglutaminases"
                        type="number"
                        label="IgA anti-transglutaminases"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.IgAAntiTransglutaminases}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="IgATotaux"
                        name="IgATotaux"
                        type="number"
                        label="IgA totaux"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.IgATotaux}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="AcAntiEndomysium"
                        name="AcAntiEndomysium"
                        type="number"
                        label="Ac anti endomysium "
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.AcAntiEndomysium}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <br></br>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="BiopcieJejunale"
                        name="BiopcieJejunale"
                        type="number"
                        label="Biopcie jéjunale"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.BiopcieJejunale}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="FT4"
                        name="FT4"
                        type="number"
                        label="FT4"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.FT4}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="TSH"
                        name="TSH"
                        type="number"
                        label="TSH"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.TSH}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="IGF_1"
                        name="IGF_1"
                        type="number"
                        label="IGF-1"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.IGF_1}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <br></br>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="TestsStimulationHormoneCroissance"
                        name="TestsStimulationHormoneCroissance"
                        type="number"
                        label="Tests de stimulation de l’hormone de croissance"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.TestsStimulationHormoneCroissance}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="CaryotypeSanguin"
                        name="CaryotypeSanguin"
                        type="text"
                        label="CaryotypeSanguin"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.CaryotypeSanguin}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Uree"
                        name="Uree"
                        type="number"
                        label="Urée"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Uree}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="Creatininemie"
                        name="Creatininemie"
                        type="number"
                        label="Créatininémie"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.Creatininemie}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="VS"
                        name="VS"
                        type="number"
                        label="VS"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.VS}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        name="CRP"
                        id="CRP"
                        type="number"
                        label="CRP"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.CRP}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <br></br>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid sx={{ md: 1 }} item xs={12} md={12}>
                      <label htmlFor="AutresExamenPhysique">Autres :</label>
                      <TextField
                        className="form-control"
                        name="AutresFamiliaux"
                        id="AutresFamiliaux"
                        onChange={handleChangeParaclinique}
                        value={paraclinique.AutresFamiliaux}
                        sx={{ width: "100%" }}
                        size="small"
                        type="text"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={1}>
                      <FormLabel id="NFS">Insuline :</FormLabel>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <TextField
                        id="InsulineJJ"
                        name="InsulineJJ"
                        type="text"
                        label="Jour"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.InsulineJJ}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <TextField
                        id="InsulineMM"
                        name="InsulineMM"
                        type="text"
                        label="Mois"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.InsulineMM}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="InsulineAA"
                        name="InsulineAA"
                        type="text"
                        label="Année"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.InsulineAA}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <Root sx={{ width: "100%", maxWidth: "100%" }}>
                        <table className="table">
                          <thead>
                            <tr>
                              {/* <th className="largeur-texte" scope="col" style={{ width: '80%' }}>Suivi</th>
                              <th scope="col" style={{ width: '20%' }}>Date</th> */}
                              <th> </th>
                              <th sx={{ textAlign: "center" }}>GLY CAP</th>
                              <th>GLY VEIN</th>
                              <th>GH</th>
                              <th>CORTISOL</th>
                              <th>ACTH</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYCAP0"
                                  name="InsulineGLYCAP0"
                                  value={paraclinique.InsulineGLYCAP0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYVEIN0"
                                  name="InsulineGLYVEIN0"
                                  value={paraclinique.InsulineGLYVEIN0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGH0"
                                  name="InsulineGH0"
                                  value={paraclinique.InsulineGH0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineCORTISOL0"
                                  name="InsulineCORTISOL0"
                                  value={paraclinique.InsulineCORTISOL0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineACTH0"
                                  name="InsulineACTH0"
                                  value={paraclinique.InsulineACTH0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYCAP15"
                                  name="InsulineGLYCAP15"
                                  value={paraclinique.InsulineGLYCAP15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYVEIN15"
                                  name="InsulineGLYVEIN15"
                                  value={paraclinique.InsulineGLYVEIN15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGH15"
                                  name="InsulineGH15"
                                  value={paraclinique.InsulineGH15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineCORTISOL15"
                                  name="InsulineCORTISOL15"
                                  value={paraclinique.InsulineCORTISOL15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineACTH15"
                                  name="InsulineACTH15"
                                  value={paraclinique.InsulineACTH15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>30</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYCAP30"
                                  name="InsulineGLYCAP30"
                                  value={paraclinique.InsulineGLYCAP30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYVEIN30"
                                  name="InsulineGLYVEIN30"
                                  value={paraclinique.InsulineGLYVEIN30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGH30"
                                  name="InsulineGH30"
                                  value={paraclinique.InsulineGH30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineCORTISOL30"
                                  name="InsulineCORTISOL30"
                                  value={paraclinique.InsulineCORTISOL30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineACTH30"
                                  name="InsulineACTH30"
                                  value={paraclinique.InsulineACTH30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>45</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYCAP45"
                                  name="InsulineGLYCAP45"
                                  value={paraclinique.InsulineGLYCAP45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYVEIN45"
                                  name="InsulineGLYVEIN45"
                                  value={paraclinique.InsulineGLYVEIN45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGH45"
                                  name="InsulineGH45"
                                  value={paraclinique.InsulineGH45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineCORTISOL45"
                                  name="InsulineCORTISOL45"
                                  value={paraclinique.InsulineCORTISOL45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineACTH45"
                                  name="InsulineACTH45"
                                  value={paraclinique.InsulineACTH45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>60</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYCAP60"
                                  name="InsulineGLYCAP60"
                                  value={paraclinique.InsulineGLYCAP60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYVEIN60"
                                  name="InsulineGLYVEIN60"
                                  value={paraclinique.InsulineGLYVEIN60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGH60"
                                  name="InsulineGH60"
                                  value={paraclinique.InsulineGH60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineCORTISOL60"
                                  name="InsulineCORTISOL60"
                                  value={paraclinique.InsulineCORTISOL60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineACTH60"
                                  name="InsulineACTH60"
                                  value={paraclinique.InsulineACTH60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>90</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYCAP90"
                                  name="InsulineGLYCAP90"
                                  value={paraclinique.InsulineGLYCAP90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYVEIN90"
                                  name="InsulineGLYVEIN90"
                                  value={paraclinique.InsulineGLYVEIN90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGH90"
                                  name="InsulineGH90"
                                  value={paraclinique.InsulineGH90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineCORTISOL90"
                                  name="InsulineCORTISOL90"
                                  value={paraclinique.InsulineCORTISOL90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineACTH90"
                                  name="InsulineACTH90"
                                  value={paraclinique.InsulineACTH90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>120</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYCAP120"
                                  name="InsulineGLYCAP120"
                                  value={paraclinique.InsulineGLYCAP120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGLYVEIN120"
                                  name="InsulineGLYVEIN120"
                                  value={paraclinique.InsulineGLYVEIN120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineGH120"
                                  name="InsulineGH120"
                                  value={paraclinique.InsulineGH120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineCORTISOL120"
                                  name="InsulineCORTISOL120"
                                  value={paraclinique.InsulineCORTISOL120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="InsulineACTH120"
                                  name="InsulineACTH120"
                                  value={paraclinique.InsulineACTH120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Root>
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={1}>
                      <FormLabel id="NFS">L Dopa :</FormLabel>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <TextField
                        id="LDopaJJ"
                        name="LDopaJJ"
                        type="text"
                        label="Jour"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.LDopaJJ}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <TextField
                        id="LDopaMM"
                        name="LDopaMM"
                        type="text"
                        label="Mois"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.LDopaMM}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="LDopaAA"
                        name="LDopaAA"
                        type="text"
                        label="Année"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChangeParaclinique}
                        value={paraclinique.LDopaAA}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <Root sx={{ width: "100%", maxWidth: "100%" }}>
                        <table className="table">
                          <thead>
                            <tr>
                              {/* <th className="largeur-texte" scope="col" style={{ width: '80%' }}>Suivi</th>
                              <th scope="col" style={{ width: '20%' }}>Date</th> */}
                              <th> </th>
                              <th sx={{ textAlign: "center" }}>GLY CAP</th>
                              <th>GLY VEIN</th>
                              <th>GH</th>
                              <th>CORTISOL</th>
                              <th>ACTH</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYCAP0"
                                  name="LDopaGLYCAP0"
                                  value={paraclinique.LDopaGLYCAP0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYVEIN0"
                                  name="LDopaGLYVEIN0"
                                  value={paraclinique.LDopaGLYVEIN0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGH0"
                                  name="LDopaGH0"
                                  value={paraclinique.LDopaGH0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaCORTISOL0"
                                  name="LDopaCORTISOL0"
                                  value={paraclinique.LDopaCORTISOL0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaACTH0"
                                  name="LDopaACTH0"
                                  value={paraclinique.LDopaACTH0}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYCAP15"
                                  name="LDopaGLYCAP15"
                                  value={paraclinique.LDopaGLYCAP15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYVEIN15"
                                  name="LDopaGLYVEIN15"
                                  value={paraclinique.LDopaGLYVEIN15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGH15"
                                  name="LDopaGH15"
                                  value={paraclinique.LDopaGH15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaCORTISOL15"
                                  name="LDopaCORTISOL15"
                                  value={paraclinique.LDopaCORTISOL15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaACTH15"
                                  name="LDopaACTH15"
                                  value={paraclinique.LDopaACTH15}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>30</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYCAP30"
                                  name="LDopaGLYCAP30"
                                  value={paraclinique.LDopaGLYCAP30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYVEIN30"
                                  name="LDopaGLYVEIN30"
                                  value={paraclinique.LDopaGLYVEIN30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGH30"
                                  name="LDopaGH30"
                                  value={paraclinique.LDopaGH30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaCORTISOL30"
                                  name="LDopaCORTISOL30"
                                  value={paraclinique.LDopaCORTISOL30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaACTH30"
                                  name="LDopaACTH30"
                                  value={paraclinique.LDopaACTH30}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>45</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYCAP45"
                                  name="LDopaGLYCAP45"
                                  value={paraclinique.LDopaGLYCAP45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYVEIN45"
                                  name="LDopaGLYVEIN45"
                                  value={paraclinique.LDopaGLYVEIN45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGH45"
                                  name="LDopaGH45"
                                  value={paraclinique.LDopaGH45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaCORTISOL45"
                                  name="LDopaCORTISOL45"
                                  value={paraclinique.LDopaCORTISOL45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaACTH45"
                                  name="LDopaACTH45"
                                  value={paraclinique.LDopaACTH45}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>60</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYCAP60"
                                  name="LDopaGLYCAP60"
                                  value={paraclinique.LDopaGLYCAP60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYVEIN60"
                                  name="LDopaGLYVEIN60"
                                  value={paraclinique.LDopaGLYVEIN60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGH60"
                                  name="LDopaGH60"
                                  value={paraclinique.LDopaGH60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaCORTISOL60"
                                  name="LDopaCORTISOL60"
                                  value={paraclinique.LDopaCORTISOL60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaACTH60"
                                  name="LDopaACTH60"
                                  value={paraclinique.LDopaACTH60}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>90</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYCAP90"
                                  name="LDopaGLYCAP90"
                                  value={paraclinique.LDopaGLYCAP90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYVEIN90"
                                  name="LDopaGLYVEIN90"
                                  value={paraclinique.LDopaGLYVEIN90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGH90"
                                  name="LDopaGH90"
                                  value={paraclinique.LDopaGH90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaCORTISOL90"
                                  name="LDopaCORTISOL90"
                                  value={paraclinique.LDopaCORTISOL90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaACTH90"
                                  name="LDopaACTH90"
                                  value={paraclinique.LDopaACTH90}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>120</td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYCAP120"
                                  name="LDopaGLYCAP120"
                                  value={paraclinique.LDopaGLYCAP120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGLYVEIN120"
                                  name="LDopaGLYVEIN120"
                                  value={paraclinique.LDopaGLYVEIN120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>

                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaGH120"
                                  name="LDopaGH120"
                                  value={paraclinique.LDopaGH120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaCORTISOL120"
                                  name="LDopaCORTISOL120"
                                  value={paraclinique.LDopaCORTISOL120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                              <td>
                                <TextField
                                  sx={{
                                    "& .MuiInputLabel-root": { color: "black" },
                                    border: "1px none black",
                                    borderRadius: 0,
                                  }}
                                  InputProps={{ disableUnderline: true }}
                                  variant="standard"
                                  id="LDopaACTH120"
                                  name="LDopaACTH120"
                                  value={paraclinique.LDopaACTH120}
                                  onChange={handleChangeParaclinique}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Root>
                    </Grid>
                  </Grid>
                </Box>
<br></br>
<br></br>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs={12} md={3}>
                      <Stack spacing={2} direction="row">
                        <ColorButton
                          type="reset"
                          variant="contained"
                          sx={{ width: "100%" }}
                          onClick={handleResetParaclinique}
                        >
                          <label className="bouton">Effacer</label>
                        </ColorButton>
                        <BootstrapButton
                          type="submet"
                          onClick={handleSubmitParaclinique}
                          variant="contained"
                          disableRipple
                          sx={{ width: "100%" }}
                        >
                          <label className="bouton">VALIDER</label>
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
export default Paraclinique;
