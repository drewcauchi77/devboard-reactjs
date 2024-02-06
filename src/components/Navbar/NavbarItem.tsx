import { Link } from 'react-router-dom';
import { T_NavbarItemProps } from '../../typings/types';

const NavbarItem = (props: T_NavbarItemProps) => {
    const { link, text, icon, isAction, onClick } = props;

    return (
        <div className="menu-item">
            { !isAction ? (
                <Link to={ link! } className="link-item">
                    { icon }
                    <span>{ text }</span>
                </Link>
            ) : (
                <div className="link-item" onClick={ onClick }>
                    { icon }
                    <span>{ text }</span>
                </div>
            ) }
        </div>
    )
};

export default NavbarItem;