import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Products from "./pages/Products"

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize primary color Green - #00ff00 Blue - #1976d2
    },
    secondary: {
      main: '#f50057', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize font family
  },
  status: {
    danger: '#ff3d00', // Customize danger color
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}
export default App;