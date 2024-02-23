/* eslint-disable no-undef */
import { Outlet } from "react-router-dom"
import { Footer } from "../footer/component"
import { Header } from "../header/component"
import styles from './styles.module.scss'
import { UserProvider } from "../../contexts/user"

export const Layout = () => {
    return (
        <div className={styles.root}>
            <UserProvider >
                <Header />
                <Outlet />
                <Footer />
            </UserProvider>
            <div id="modal-container" />
            <div id="popover-container" className={styles.popoverContainer} />
        </div>
    )
}