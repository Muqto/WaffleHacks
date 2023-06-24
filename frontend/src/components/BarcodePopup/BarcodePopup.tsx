import { Button, Paper } from '@mui/material'
import "./BarcodePopup.css"
import Barcode from 'react-jsbarcode'
import { useState } from 'react'

const BarcodePopup = () => {
    const [slide, setSlide] = useState("")
    return (
        <div className='barcode-popup-container'>
            <Button onClick={() => {setSlide(slide === "" ? "slide" : "")}}>Barcode</Button>
            <Paper elevation={20} className={`barcode-popup-paper ${slide}`}>
                <Barcode className='barcode-container' value='649634112950953cec504306'/>
            </Paper>
        </div>
    )
}

export default BarcodePopup