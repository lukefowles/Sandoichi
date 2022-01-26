import React, {useEffect} from 'react';
import Form from './components/Form/Form';
import Sandwiches from './components/Sandwiches/Sandwiches'
import { useDispatch } from 'react-redux';
// will allow us to dispatch an action 

const App = () => {


    //react redux attempt 1:
    
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getOrders());
    // }, [dispatch]);

    return(
        <div>
            <div>
                <Sandwiches />
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}

export default App;