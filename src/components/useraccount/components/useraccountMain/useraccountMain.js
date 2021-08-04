
import './useraccountMain.css'
import gearbutton from './loadingicon.gif'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
  

const UseraccountMain = ({ display, setDisplay }) => {
    
    

    
  
    
  
    
   
   
    
	
    return (
        <div className='main'>
           
            {display === 'useraccountMain' &&
                <div className='flex-column'>
                    <div className='center'>
                        <div className='content'>
                            <p className='paragraph'>
                               Useraccount in process
                            </p>
                           
                            <div className='form'>
                                <p className='title'>Login/Signup</p>
                               
                               
            
                            </div>
                        </div>

                       

                            </div>    
                  
                </div>
            }
            
        </div>
    )
}
export default UseraccountMain
