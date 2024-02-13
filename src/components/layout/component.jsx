import { Footer } from "../footer/component"
import { Header } from "../header/component"
import styles from './styles.module.scss'

export const Layout = ({ children }) => {
    return (
        <div className={styles.root}>
          
                <Header />
                <div>{children}</div>
                <Footer />
        
            <div id="modal-container" />
            <div id="popover-container" className={styles.popoverContainer}/>
        </div>
    )
}