import React, { useEffect, useState } from 'react'
import './style.scss'
import ImgPub from '../../assets/image/imgconnexion.jpg'
import CardRecipe from '../../Components/Display/cardRecipe/CardRecipe'
import Text from '../../Components/General/text/Text';
import GoogleIcon from '../../Components/icons/GoogleIcon';
import { TextField } from '@mui/material';
import Button from '../../Components/General/button/Button';
import { Link } from 'react-router-dom';

export default function Connexion({ setIsLayout, isLayout }) {
    const [user, setUser] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )

    }
    useEffect(() => { isLayout ? setIsLayout(false) : null, [isLayout] })
    return (

        <div className="wrap_connexion">
            <CardRecipe source={ImgPub} />
            <div className="wrap_forme_login">
                <Text tag='h1' text='Welcome Back' size='30px' weight='600' />
                <Link to="" className="btn_google">
                    <GoogleIcon />
                    <Text tag='p' text='Connect with Google' size='14px' weight='600' color="#000" />
                </Link>
                <Text tag='p' text='or' size='14px' weight='600' color="#000" />
                <form action="">
                    <TextField label="E-mail" variant="standard" fullWidth required sx={{ marginBottom: 1 }} onChange={handleChange} name='email' />
                    <TextField label="Password" variant="standard" type="password" fullWidth required sx={{ marginBottom: 3 }} onChange={handleChange} name='passeWord' />
                    <Link to='' className='forgot'>
                        <Text tag='p' size='10px' weight='400' text='Forget password?' color="#000" />
                    </Link>
                    <Button text='Log in' className='btn_sing btn--orange btn--lg' />
                    <div className='text_singup'>
                        <Text tag='p' size='10px' weight='400' text='Don’t have an account?' />
                        <Link to='/inscription'>SingUp</Link>
                    </div>



                </form>

            </div>

        </div>

    )
}
