import React from 'react';
import { Link,  Route} from 'react-router-dom';
import  PhotoGrid  from './PhotoGrid';
import  Single  from './Single';
class Main extends React.Component {

    render(){
        console.log(this.props);
        
        return(
        <div>
            <div>

                <h1>
                    <Link to='/'>ReduxaGram</Link>    
                </h1>
                
                <Route exact {...this.props} 
                path='/' 
                render={(props)=><PhotoGrid {...this.props} {...props}/>} 
                /> 
                <Route exact {...this.props}
                path='/view/:postId'
                render={(props)=><Single {...this.props} {...props}/>} 
                />   

            </div>
        </div>
    
        )
    }
}

export default Main ;