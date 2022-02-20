import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { Navigate } from "react-router-dom";
import { isAuthenticated, setURL } from '../../store/yologroup/yologroup.actions';
import InfoMenu from './infoMenu.component';
import '../../styles/main.scss';

/** @namespace  YoloGroup/Component/Game/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    id: state.YoloGroupReducer.id,
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
export class InfoContainer extends PureComponent {
    static propTypes = {}
    static defaultProps = {};
    state = {}

    render() {
        const { isSubmitted } = this.props;

        if(isSubmitted === false) {
            return <Navigate to="/" />;
        }
       
        return (
            <div> 
                <div  className='info-container'>
                     <InfoMenu
                    { ...this.props }
                    />
                </div>
            </div>
        )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);