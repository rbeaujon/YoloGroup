import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { updateCustomerSelection } from '../../store/yologroup/yologroup.actions';
import Post from './post.component';
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from 'react-bootstrap';

export const mapStateToProps = (state) => ({
    id: state.postReducer.id,
    info: state.postReducer.info,
    category: state.postReducer.category,
    actionSelected: state.postReducer.actionSelected,
    checkboxSelected: state.postReducer.checkboxSelected,
    howManyCheckBoxAreSelected: state.postReducer.howManyCheckBoxAreSelected
    
})

export const mapDispatchToProps = (dispatch) => ({
   updateCustomerSelection: (selection) => dispatch(updateCustomerSelection(selection))
});

/** @namespace  Adcash/Component/Post/Container */
export class PostContainer extends PureComponent {
    static propTypes = {
        id: String.isRequired,
        info: String.isRequired,
        category: String.isRequired,
        actionSelected: String.isReq
    }
    static defaultProps = {};
    state = {
        actionSelected: '',
        loadApp: ''
    }
    constructor(props) {
        super(props)
        
        this.renderSelection = this.renderSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSelect(post) {
         this.setState({
            actionSelected: post
        });

    }
    handleSubmit(data) {

        if (this.props.checkboxSelected[0].location === 'node'){
            if (this.props.actionSelected === 'update'){
                
                var link  =  'http://localhost:3200/posts/' + this.props.checkboxSelected[0].id;
            }else{

                link  =  'http://localhost:3200/posts/'
            }
            
        }
        else { link = 'http://localhost/Adcash/server/api/posts/' }
            
        if (this.props.actionSelected === 'create') {
            data.preventDefault();
            let id  =  data.target.elements.nextId.value;
            id = parseInt(id);
            let info =  data.target.elements.info.value;
            let category =  data.target.elements.category.value;
            category =  parseInt(category);

            var newPost =  {
                "id": id,
                "info": info,
                "category": category
            };
    
            fetch(link, {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            this.props.handleUpdate();
            document.getElementById('info').value = '';
            // this.props.updateCustomerSelection('') // return the page to original windows and show all items saved (API)
        }
        if (this.props.actionSelected === 'update') {


            const { checkboxSelected } = this.props;
    
            data.preventDefault();
            let info =  data.target.elements.info.value;
            var category =  data.target.elements.category.value;
            category =  parseInt(category);

            var payload =  {
                "id": checkboxSelected[0].id,
                "info": info,
                "category": category
            };

            var requestOptions = {    
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                mode: 'cors',
                body: JSON.stringify(payload)
            };

            async function putRequest (x) {
                
                await fetch(link, requestOptions ) 
                .then(response => response.json())
                .then(data => {
                  console.log('Success: Edit the item with the data:', data);
                  x.props.handleUpdate();
                  document.getElementById('info').value = '';
                })
                .catch((error) => {
                  console.error('The data has errors:', error);
                });
            }
            putRequest(this);

        }   
        if (this.props.actionSelected === 'delete') {
            const { checkboxSelected } = this.props;
            var dataToDelete=[];

            checkboxSelected.map((key) => {
                return dataToDelete.push(key.id);
            })
                requestOptions = {    
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json'},
                    mode: 'cors',
                    body: dataToDelete
                };
    
                async function putRequest (x) {
                    
                    await fetch(link, requestOptions ) 
                    .then(response => response.json())
                    .then(data => {
                      console.log('Success: Item deleted = data:', data);
                      x.props.handleUpdate();
                      document.getElementById('info').value = '';
                    })
                    .catch((error) => {
                      console.error('The data has errors:', error);
                    });
                }
                putRequest(this);

                fetch( link, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
                })
                .then(res => res.json())
             
        }              
    }
    renderSelection() {

        const { actionSelected, categories, posts, howManyCheckBoxAreSelected } = this.props; 

        if(posts.length > 0 ){
            var nextId = posts[posts.length-1].id + 1;
        }else {nextId = 0;}

        switch (actionSelected) {
            case 'create':
                return (
                    
                        <form onSubmit={this.handleSubmit}>
                            <div  className="textInfo">
                            
                                Info 
                                <textarea id="info" name="info" />
            
                                Category
                                
                                <select id="category"  className="col-s-12 col-8 col-b-8"  >
                                    { categories.map((key) => (
                                        <option value={key.id}>{key.name}</option>
                                    ))}
                                </select>
                                  <input type="hidden" id="nextId" name="nextId" value={ nextId } />

                                <input type="submit" value="Submit" className='col-12' />

                            </div>
                        </form>   
                    )  
            case 'update':
                
            var update = document.getElementById('update');
            
            if(update){ 
       
                    if (howManyCheckBoxAreSelected === 1 ) {
                        update.className = "show";
                    }
                    else{
                        update.className = "hidden";
                    }   
                
             } 

                return (
                        <form onSubmit={this.handleSubmit}>
                            <div  className="textInfo">
                                Select one item in the up-right conner and then make click in the button Update.
                            </div>                              
                            <div id="update" className="hidden">
                                Info 
                                <textarea id="info" name="info"  className="textInfo"/>
            
                                Category
                                <select  className="textInfo" id="category"  >
                                    { categories.map((key) => (
                                        <option value={key.id}>{key.name}</option>
                                    ))}
                                </select>

                                <input type="submit" value="Update"  />
                            </div>
                        </form>    
                    )    
            case 'delete':
                return (
                        <form onSubmit={this.handleSubmit}>
                            <div className="textInfo">
                                Select the items in the up-right conner and then make click in the button Delete.
                            </div>
                            <div className="textInfo">   
                                <input type="submit" value="Delete"  />
                            </div>
                        </form>    
                    )   
            default:
                break;
        }
    }    
    render() {   
        return (
                <div>
                    <div className="dropdown">
                    <button className="dropdownButton">Post</button>
                    <ul id="dropdown-post" class="dropdown-content">
                        <li onClick={() => this.props.updateCustomerSelection('create') } >Create</li>
                        <li onClick={() => this.props.updateCustomerSelection('update') } >Update</li>
                        <li onClick={() => this.props.updateCustomerSelection('delete') } >Delete</li>
                    </ul>
                    </div>
                    <Post 
                         renderSelection = { this.renderSelection() }
                    /> 
                </div>    
        )           
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);