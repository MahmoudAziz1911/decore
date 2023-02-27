import Notify from "@/components/Notify"
import MainNavigation from "./main-navigation"
import FooterPage from "../footer-page"
import { Divider } from "@mui/material"

const Layout = ({ children }) => {
    return (
        <>
            <MainNavigation />
            <Notify />
            <main>
                {children}
            </main>
            <FooterPage />
        </>
    )
}

export default Layout