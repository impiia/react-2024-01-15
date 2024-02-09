import { Footer } from "../footer/component"
import { Header } from "../header/component"
import { RestaurantPage } from "../restaurant-page/component"

export const Layout = () => {
    return (
        <>
            <Header />
            <RestaurantPage />
            <Footer />
        </>
    )
}