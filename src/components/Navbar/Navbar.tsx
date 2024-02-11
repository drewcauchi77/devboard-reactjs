import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { collapseMenu } from '../../state/status/statusSlice';
import { FaTasks } from 'react-icons/fa';
import { FaGear, FaPerson, FaAnglesLeft, FaAnglesRight, FaPlus } from 'react-icons/fa6';
import NavbarItem from './NavbarItem';

const Navbar = () => {
    const isMenuCollapsed = useSelector((state: RootState) => state.status.isMenuCollapsed);
    const dispatch = useDispatch();

    return (
        <nav className={ `navbar${ !isMenuCollapsed ? ' open' : '' }` }>
            <div className="inner-navbar">
                <NavbarItem link='/tasks' text='Tasks' icon={ <FaTasks /> } />
                <NavbarItem link='/add-task' text='Add New Task' icon={ <FaPlus /> } />
                <NavbarItem link='/settings' text='Settings' icon={ <FaGear /> } />
                <NavbarItem link='/' text='About' icon={ <FaPerson /> } />
            </div>
            <div className="lower-menu">
                <NavbarItem text='Collapse Menu' isAction={ true } icon={ isMenuCollapsed ? <FaAnglesRight /> : <FaAnglesLeft /> } onClick={ () => dispatch(collapseMenu(!isMenuCollapsed)) } />
            </div>
        </nav>
    )
};

export default Navbar;