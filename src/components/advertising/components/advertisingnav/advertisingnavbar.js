import { Link } from 'react-router-dom'
const AdvertisingNav = ({ setDisplay }) => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to='/'>Foot-Insights</Link> &nbsp;
                <Link to='/hyperlocal'>Hyperlocal Intelligence</Link>&nbsp;
                <a href='#' className='sales-marketing active' onClick={() => { setDisplay('advertisingMain') }}>Advertising</a>
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

export default AdvertisingNav