import { Footer } from "../footer/component"
import { Header } from "../header/component"
import { Restaurant } from "../restaurant/component"

export const Layout = ({restaurants}) => {
    return (
        <>
       <Header />
        {restaurants.map((restaurant) => (
            <Restaurant
            name={restaurant.name} 
            menu={restaurant.menu} 
            reviews={restaurant.reviews}/>
          ))}  
       <Footer />
        </>
    )
}