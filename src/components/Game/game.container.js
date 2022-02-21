import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { Navigate } from "react-router-dom";
import { isAuthenticated, setURL } from '../../store/yologroup/yologroup.actions';
import Game from './game.component';
import backimg from './assets/back.png';
import '../../styles/main.scss';

/** @namespace  YoloGroup/Component/Game/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    user_id: state.YoloGroupReducer.user_id,
    name: state.YoloGroupReducer.name,
    isSubmitted: state.YoloGroupReducer.isSubmitted,
    url: state.YoloGroupReducer.url
})
/** @namespace  YoloGroup/Component/Game/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    isAuthenticated: (isSubmitted) => dispatch(isAuthenticated(isSubmitted)),
    setURL: (data) => dispatch(setURL(data))
});
/** @namespace  YoloGroup/Component/Game/Container/GameContainer */
export class GameContainer extends PureComponent {
    static propTypes = {}
    static defaultProps = {};
    state = {}

    render() {
        const { isSubmitted, url } = this.props;

        if(isSubmitted === false) {
            return <Navigate to="/" />;
        }
        if(url === null){
            return <Navigate to="/home" /> 
        }
        return (
            <div> 
               <div className = "menu ">
               <img src={backimg} className="back" alt="AQUI"  onClick={() => { return (this.props.setURL(null))}}/>
                    <label for="Game List">GAME</label>
                    <button type="button" onClick={() => 
                        { return (this.props.isAuthenticated(false), this.props.setURL(null) )}} >Logout 
                    </button>
                </div>
                <div  className='gameContainer'>
                     <Game
                    { ...this.props }
                    />
                </div>
            </div>
        )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);