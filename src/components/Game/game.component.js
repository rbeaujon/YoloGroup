import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import  './game.style.scss';

/** @namespace  YoloGroup/Component/Game/Component/Game */
export class Game extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired
    }
   static defaultProps = {};
    
    render() {
       
        let { url } = this.props;
   
        return (
            <div className='frame'>
                <iframe title='game'  scrolling='no' src={ url }></iframe>
            </div>
        ) 
    }
}
export default Game;