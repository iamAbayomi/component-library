import React from "react"
import './Checkbox.css'
type props ={
    checkBoxValue?: boolean
    onChange?: () => {}
}

function Notification(props: props){
    return(
        <div>
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={props.onChange} 
                    value="true"
                    checked={props.checkBoxValue}/>
                <span className="slider round"></span>
            </label>
        </div>        
    )
}

export default Notification