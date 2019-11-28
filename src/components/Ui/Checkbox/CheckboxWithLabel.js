import React from "react";

function CheckboxWithLabel(props){
    const{defaultChecked, checkFor, onChange} = props;

    return(
        <div key={checkFor}>
            <label htmlFor ={checkFor}>{checkFor + ":"}</label>
            <input type="checkbox" name={checkFor} defaultChecked={defaultChecked} onChange={onChange}/>
        </div>
    );
}
export default CheckboxWithLabel;