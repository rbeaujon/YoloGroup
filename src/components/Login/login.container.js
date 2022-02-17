import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { Navigate } from "react-router-dom";
import { isLogin } from '../../store/yologroup/yologroup.actions';
import Login from './login.component';
import  './login.style.scss';


/** @namespace  YoloGroup/Component/Login/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isSubmitted: state.YoloGroupReducer.isSubmitted
});
/** @namespace  YoloGroup/Component/Login/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    isLogin: (isSubmitted) => dispatch(isLogin(isSubmitted))
});
/** @namespace  YoloGroup/Component/Login/Container/LoginContainer */
export class LoginContainer extends PureComponent {
    
    constructor(props) {
        super(props)
        
        this.handleLogin = this.handleLogin.bind(this);
    }  

    handleLogin(event){
        event.preventDefault(); //the page doesn't reload
        let { email, pass } = document.forms[0];
        var userEmail = email.value;
        var userPass = pass.value;
        

        //Checking the user in the API nodejs
    
   
        async function getUsers(x) {

            var requestOptions = {    
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors'
        };
        await fetch('http://localhost:3100/users', requestOptions ) 
            .then(response => response.json())
            .then(data => {
                console.log('Success -> The users list received is:', data);
                data.map((key) => {
                    if(key.email === userEmail & key.password === userPass){
                        return (
                            x.props.isLogin(true)
                            
                        )
                    }
                    else{
                        x.props.isLogin(false)
                    }           
                })
            })
            .catch((error) => {
                console.error('fail fetching the users, you has errors:', error);
            });
        }
        getUsers(this);
    
    }
    
    render(){
        const { isSubmitted } = this.props;

            if(isSubmitted === true) {
                return <Navigate to="/home" />;
            }
            
           
        
        return(
            <div>  
                <div id="login" >
                    <Login
                    { ...this.state }
                    handleLogin = { this.handleLogin }
                    />
                </div> 
            </div>
                
        )    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);