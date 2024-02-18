import { Outlet } from "react-router-dom"
import { Footer } from "../footer/component"
import { Header } from "../header/component"
import styles from './styles.module.scss'

export const Layout = () => {
    return (
        <div className={styles.root}>
          
                <Header />
                <Outlet />
                <Footer />
        
            <div id="modal-container" />
            <div id="popover-container" className={styles.popoverContainer}/>
        </div>
    )
}