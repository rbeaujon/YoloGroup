import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import LoadAppContainer from  './components/LoadApp/';
import InfoMenu from  './components/InfoMenu/';
import { isAuthenticated, setURL } from '../src/store/yologroup/yologroup.actions';
import './styles/main.scss'

/** @namespace  YoloGroup/App/mapStateToProps */
export const mapStateToProps = (state) => ({
  isSubmitted: state.YoloGroupReducer.isSubmitted,
  url: state.YoloGroupReducer.url
});
/** @namespace  YoloGroup/App/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
  isAuthenticated: (isSubmitted) => dispatch(isAuthenticated(isSubmitted)),
  setURL: (data) => dispatch(setURL(data))
});

function App(props) {

  const { isSubmitted } = props;
  if(isSubmitted === false) {
    return <Navigate to="/" />;
}

  return (
    <div>
      <div className = "menu">
        <label for="Game List">GAMES LIST </label>
        <button type="button" onClick={() => 
           { return (props.isAuthenticated(false), props.setURL(null) )}} >Logout  
          </button>
      </div>
        <InfoMenu />
        <LoadAppContainer />
      <div className="footer col-s-12 col-12 col-b-12"> 
          <p>The Yolo Group Assignment </p> 
      </div> 
    </div> 
  
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

