
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import LoadApp from './loadApp.component';
import '../../styles/main.scss';

/** @namespace  YoloGroup/Component/LoadApp/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
})
/** @namespace  YoloGroup/Component/LoadApp/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
});
/** @namespace  YoloGroup/Component/LoadApp/Container/LoadAppContainer */
export class LoadAppContainer extends PureComponent {
    static propTypes = {}
    static defaultProps = {};
    state = {
     gameList:[],
     linkThum: 'http://localhost/YoloGroup/assets/img/thumb/'   
    }
    constructor(props) {
        super(props)
        
        this.handleUpdate = this.handleUpdate.bind(this);
    }   
    
    async componentDidMount() {
        this.getData();
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
    handleUpdate() {
        this.getData();
    }  
     
    render() {
        return (
            <div className='game-container'>
             
                     <LoadApp
                    { ...this.state }
                    { ...this.props }
                    />
       

            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoadAppContainer);