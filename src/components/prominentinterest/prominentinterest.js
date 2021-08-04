import React, {useState} from 'react';
import './prominentinterest.css';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const ProminentInterest = ({ male,female,Entertainment,visitors,shopping,travel,inputPlace }) => {

 
	
  const Tooltipinfo = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
	
  },
}))(Tooltip);
	
  return (
    <>
      <div className='prominent-interest'>
        <div className='first-line'>
           
          <div className='left'>
          
	  <Tooltipinfo  placement="right"
        title={
          <React.Fragment>
            <Typography color="inherit">Demographic</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
		   <p className='heading'>
              <div className='heading-text'>Demographic</div> <InfoIcon  />
            </p>
      </Tooltipinfo>
        
          </div>

          <div className='right'>
            <p className='date'></p><img className='icon' src="https://img.icons8.com/material/32/000000/sort-down--v1.png" />
            <img src="https://img.icons8.com/windows/32/000000/share-2.png" className='icon' />
            <img className='icon' src="https://img.icons8.com/windows/32/000000/download.png" />
          </div>
         
        </div>
        <div className='heading'>
          <div className="heading-text-card1">Demographic</div>
          <div className='heading-text-card2'>Interest(%)</div>
            </div>
      
        <div className='interest-cards'>
          
         {inputPlace === "Forum Mall" ?
         <div className='number-visits'>
            
         <p>Male<h3 >&nbsp;{male}&nbsp;</h3></p>
         <p>Female<h3 >&nbsp;{female}&nbsp;</h3></p>
          <p>Frequent shoppers<h3 >&nbsp;43&nbsp;</h3></p>
         <p>Premium shoppers<h3 >&nbsp;10&nbsp;</h3></p>  
         <p>Thrifty shoppers<h3 >&nbsp;37&nbsp;</h3></p>
         <p>College students<h3 >&nbsp;45&nbsp;</h3></p>
         <p>Instagram users<h3 >&nbsp;57&nbsp;</h3></p>  </div>:
         <div className='number-visits'> 
         <p>Male<h3 >&nbsp;{male}&nbsp;</h3></p>
         <p>Female<h3 >&nbsp;{female}&nbsp;</h3></p>
         </div>}
         
         
        </div>
      </div>
    </>
  )
}

export default ProminentInterest
