// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
// import Sidebar from "./components/Sidebar";
// import Demo from "./components/Demo";
import AppLayout from "./layout/AppLayout";
import Geography from "./pages/Geography";
import Faq from "./pages/Faq";
import Calendar from "./pages/Calendar";
import Pie from "./pages/Pie";
import Line from "./pages/Line";
import Bar from "./pages/Bar";
import FormPage from "./pages/FormPage";
import Team from "./pages/Team";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";

function App() {
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <Topbar setIsSidebar={setIsSidebar} /> */}
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="geography" element={<Geography />} />
            <Route path="faq" element={<Faq />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="pie" element={<Pie />} />
            <Route path="line" element={<Line />} />
            <Route path="bar" element={<Bar />} />
            <Route path="form" element={<FormPage />} />
            <Route path="team" element={<Team />} />
          </Route>
          {/* <Route path="/" element={<Dashboard />} />
            


  */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
