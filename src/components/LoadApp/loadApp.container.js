
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { setURL } from '../../store/yologroup/yologroup.actions';
import LoadApp from './loadApp.component';
import { Navigate } from "react-router-dom";
import '../../styles/main.scss';

/** @namespace  YoloGroup/Component/LoadApp/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    user_id: state.YoloGroupReducer.user_id,
    name: state.YoloGroupReducer.name,
    ip: state.YoloGroupReducer.ip,
    url: state.YoloGroupReducer.url
})
/** @namespace  YoloGroup/Component/LoadApp/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    setURL: (data) => dispatch(setURL(data))
});
/** @namespace  YoloGroup/Component/LoadApp/Container/LoadAppContainer */
export class LoadAppContainer extends PureComponent {
    static propTypes = {}
    static defaultProps = {};
    state = {
     gameList:[],
     linkThum: 'http://localhost/YoloGroup/assets/img/thumb/',
     url: null
    }
    constructor(props) {
        super(props)
        
        this.getURL = this.getURL.bind(this);
    }    
    async componentDidMount() {
        this.getData();
        this.postLogs();
    }  
    async postLogs(){
        const { user_id, name, ip } = this.props;
        let payload =  {
            "operator_id": 1,
            "user_id": user_id,
            "user_name": name,
            "user_ip": ip

        }
        let requestOptions = {    
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify(payload)

        };
        let link = "http://localhost/YoloGroup/server/api/provider/logs/";

        async function postVisit() {
            
            await fetch(link, requestOptions ) 
            .then(response => response.json())
            .then(data => {
                console.log('Success, the answer from server API is:', data);
            })
            .catch((error) => {
                console.error('The data has some errors:', error);
            });
        }
        postVisit();
    }
    async getData() {
        let payload =  {
            "operator_id": 1
        }
        let requestOptions = {    
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify(payload)

        };
        let link = "http://localhost/YoloGroup/server/api/operator/generic/v2/game/list/";

        async function getList (x) {
            
            await fetch(link, requestOptions ) 
            .then(response => response.json())
            .then(data => {
              console.log('Success, the answer from server API is:', data);
              x.setState({
                gameList: data
            });
            })
            .catch((error) => {
              console.error('The data has some errors:', error);
            });
        }
        getList(this);
    } 
    async getURL(game_code) {
        
        let payload =  {
            "game_code": game_code
        }
        let requestOptions = {    
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify(payload)

        };
        let link = "http://localhost/YoloGroup/server/api/operator/generic/v2/game/url/";

        async function fecthUrl(x) {
            
            await fetch(link, requestOptions ) 
            .then(response => response.json())
            .then(data => {
                console.log('Success, the answer from server API is:', data);
                x.props.setURL(data[0].url)
            })
            .catch((error) => {
                console.error('The data has some errors:', error);
            });
        }
        fecthUrl(this);
    }  
    render() {
        const { url } = this.props;
        if(url !== null){
            return <Navigate to="/game" />;
            
        }

        return (
            <div className='game-container'>
             
                     <LoadApp
                     getURL = {this.getURL}
                    { ...this.state }
                    { ...this.props }
                    />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoadAppContainer);