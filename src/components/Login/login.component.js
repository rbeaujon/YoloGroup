import { PureComponent } from 'react';
import login from './assets/login/login.png'
import  './login.style.scss';

/** @namespace  YoloGroup/Component/Login/Component/Login */
export class Login extends PureComponent {

    static defaultProps = {};
    render() {
       
        let { handleLogin } = this.props;
   
        return (
   
            <div className="form-container"> 
                <form onSubmit={handleLogin}>
                    
                    <img src={login} alt="login"  />
                    <div>
                        <input type="text" name="email" placeholder="email" required /> 
                    </div>
                    <div>
                        <input type="password" name="pass" placeholder="Enter Password" required />
                    </div>
                    <div className="button">
                        <input type="submit" />
                    </div>
                </form>
            </div> 
        )
    }    
}
export default Login;