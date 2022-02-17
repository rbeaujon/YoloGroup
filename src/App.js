import LoadAppContainer from  './components/LoadApp/';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import './styles/main.scss'

/** @namespace  YoloGroup/App/mapStateToProps */
export const mapStateToProps = (state) => ({
  isSubmitted: state.YoloGroupReducer.isSubmitted
});
/** @namespace  YoloGroup/App/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
});

function App(props) {

  const { isSubmitted } = props;
  if(isSubmitted === false) {
    return <Navigate to="/a" />;
}

  return (
    <div>
      <div className = "menu col-s-12 col-12 col-b-12">
        GAMES LIST
      </div>
        <LoadAppContainer />
      <div className="footer col-s-12 col-12 col-b-12"> 
          <p>The Yolo Group Assignment </p> 
      </div> 
    </div> 
  
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

