import next, { NextPage } from "next";
import NavBar from "../components/playground/Navbar";
import { ThemeProvider } from "@mui/material";
import playgroundTheme from "../theme/PlaygroundTheme";
const Playground: NextPage = () => {
    return (
        <ThemeProvider theme={playgroundTheme}>
            <div>
                <NavBar />
            </div>
        </ThemeProvider>

    )
}
export default Playground;