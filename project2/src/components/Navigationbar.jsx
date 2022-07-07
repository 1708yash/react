import { useState } from 'react'
import '../css/Navigationbar.css'
import StarIcon from '@mui/icons-material/Star';
import Logo from '../images/backless_projectimg.png';
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';
import Clock from 'react-live-clock';
import '../App.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';

function NavigationBar() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);;
    };
    return (
        <div className='navbar'>

            <div className='navbar__logo'>
                <img src={Logo} alt='/' />
            </div>

            <div className='navbar__slot2'>
                <input type="text" placeholder='this is input space' className='slot2__input1' />

                <div className='slot2__bottom'>

                    <button className='slot2__button'
                        style={{
                            backgroundColor: isActive ? 'salmon' : '',
                            color: isActive ? 'white' : '',
                        }}
                        onClick={handleClick}
                    >
                        <StarIcon />Click
                    </button>
                    <input className='slot2__input2' type="text" placeholder='second' />
                    <div className='volume'> <VolumeUpSharpIcon fontSize='large' /></div>
                </div>
            </div>

            <div className='navbar__slot3'>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />

            </div>

            <div className='navbar__slot4'>
                <input type="text" placeholder='this is input space' />

                <div className='slot2__bottom'>
                    <input type="text" placeholder='second' />
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </div>

            </div>

            <div className='navbar__slot5'>
                <button className='circl'>1</button>
                <button className='circl'>3</button>
                <button className='circl'>8</button>
                <button className='circl'>4</button>
                <button className='circl'>7</button>
            </div>

            <div className='navbar__slot6'>
                <AcUnitIcon fontSize='large' />
            </div>

            <div className='navbar__slot7'>
                <input type="text" placeholder='this is input space' className='slot2__input1' />
                <input type="text" placeholder='this is input space' className='slot2__input1' />
            </div>


        </div>
    )
}

export default NavigationBar