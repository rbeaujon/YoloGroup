
import { PureComponent } from 'react';
import React from 'react';

export class Post extends PureComponent {


    render() {

       
         return (
            <div>
                <div className='hidden'>
                    <input type="text" id="addCategory" name="addCategory" />
                </div>
                 <div>
                    { this.props.renderSelection }
                </div> 
            </div>
        )
    }

}

export default Post;