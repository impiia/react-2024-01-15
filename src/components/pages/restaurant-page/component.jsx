import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from '../../restaurant/component';
import style from './styles.module.scss';
import { selectRestaurantIds } from '../../../redux/entities/restaurant/selectors';
import { RestaurantTabs } from '../../restaurant-tabs/component';
import { Layout } from '../../layout/component';
import { getRestaurants } from '../../../redux/entities/restaurant/thunks/get-restaurants';
import { selectIsLoading } from '../../../redux/ui/request';


export const RestaurantPage = () => {
    const [requestId, setRequestId] = useState();
    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));
    const restaurantIds = useSelector(selectRestaurantIds);
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    const selectRestaurant = (restaurantId) => {
        setSelectedRestaurantId(restaurantId);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getRestaurants()).requestId); 
    }, []);

    return (
        <Layout>
        {isLoading? (<div>is loading...</div>) : 
           ( <div className={style.root}>
                <RestaurantTabs
                    restaurantIds={restaurantIds}
                    onSelectRestaurant={selectRestaurant}
                />
                {selectedRestaurantId && <Restaurant restaurantId={selectedRestaurantId} /> 
                }

            </div>)
        }
        </Layout>
    );
};
