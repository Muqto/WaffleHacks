import { Button, Paper } from '@mui/material'
import "./BarcodePopup.css"
import Barcode from 'react-jsbarcode'
import { useContext } from 'react'
import { Context } from '../../context/context'

const BarcodePopup = () => {
    const {slide} = useContext(Context)
    return (
        <div className='barcode-popup-container'>
            <Paper elevation={20} className={`barcode-popup-paper ${slide}`}>
                <Barcode className='barcode-container' value='649634112950953cec504306'/>
            </Paper>
        </div>
    )
}

export default BarcodePopup