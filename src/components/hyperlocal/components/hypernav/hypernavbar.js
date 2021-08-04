import { Link } from 'react-router-dom'
const HyperNav = ({ setDisplay }) => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to='/'>Foot-Insights</Link> &nbsp;
                <a href='#' className='hyperlocal-intelligence active' onClick={() => { setDisplay('hyperMain') }}>Hyperlocal Intelligence</a> &nbsp;
                <Link to='/advertising'>Advertising</Link>&nbsp;
                
               
            
            </div>


            <div className='right-side'>
            <Link to='/useraccount'>
                <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" className='profilePic' />
                </Link>&nbsp;
            
            XYZ Corp
            </div>
        </div>
    )
}

export default HyperNav