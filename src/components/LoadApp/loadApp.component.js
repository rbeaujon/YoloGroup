import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import  './loadApp.style.scss';

/** @namespace  YoloGroup/Component/LoadApp/Component/loadApp */
export class LoadApp extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired
    }
   static defaultProps = {};
    
    render() {
       
        let { gameList, linkThum } = this.props;
   
        return (
            
            gameList.map((key) => (  
                
                    <div className="game">
                        <img src={ linkThum + key.url_thumb } alt={ key.name } />                
                        <div className='name'>{ key.name } </div>
                        <div className='product'> { key.product } </div>  
                    </div>
               
              )
          ))
      }    
}
export default LoadApp;