import { useState } from 'react';
import "./ColorPicker.css";

const ColorPicker = () => {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className='color-picker-container'>
            <h1>Color Picker App</h1>
            <div className='color-display' style={{ backgroundColor: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label> Select a Color: </label>
            <input type='color' value={color} onChange={(e) => handleColorChange(e)} />
        </div>
    )
}

export default ColorPicker;