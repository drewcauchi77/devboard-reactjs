import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { increment } from '../state/counter/counterSlice';

const HomeView = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h2>{ count }</h2>
            <button onClick={ () => dispatch(increment()) }>increment</button>
        </>
    )
}

export default HomeView;