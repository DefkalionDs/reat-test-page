import profile from "./assets/profile.jpg";
import { useState } from "react";
import "./App.css";
import {
  Card,
  CardHeader,
  Switch,
  // CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define theme settings

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  // Make light theme as the default for the page
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // This function will be triggered, when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <CssBaseline />
        <Container>
          <div className="App">
            <Box component="div" p={4}></Box>
            <Card>
              <CardHeader
                action={
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={isDarkTheme} onChange={changeTheme} />
                      }
                      label="Dark Theme"
                    />
                  </FormGroup>
                }
              />
              <Typography variant="h4" component="h4">
                <div className="container">
                  <div className="hpage">👾 Test Page 👾</div>
                  <h5>
                    Hello all, this is my first-ish fiddling attempt with react
                  </h5>
                  <br />
                  <h5>So, bear with me, thanks</h5>
                  <br />
                </div>
              </Typography>
              <img src={profile} alt="profile" className="App-logo" />
              <Typography className="body1" variant="body1">
                Dark mode is {isDarkTheme ? "On" : "Off"}
              </Typography>
            </Card>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
