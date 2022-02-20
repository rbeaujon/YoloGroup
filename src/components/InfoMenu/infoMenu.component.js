import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import  './infoMenu.style.scss';

/** @namespace  YoloGroup/Component/InfoMenu/Component/InfoMenu */
export class InfoMenu extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired
    }
   static defaultProps = {};
    
    render() {
       
        let { name } = this.props;
   
        return (
            <div>
                <div className='welcome'>Welcome</div> 
                <div className='name'>{name}</div>
            </div>
        ) 
    }
}
export default InfoMenu;