import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Landing from "./Landing/Landing";

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
