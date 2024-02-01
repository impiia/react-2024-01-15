import { Footer } from "../footer/component"
import { Header } from "../header/component"
import { Restaurants } from "../restaurants/component"

export const Layout = ({ restaurants }) => {
    return (
        <>
            <Header />
            <Restaurants restaurants={restaurants}/>
            <Footer />
        </>
    )
}