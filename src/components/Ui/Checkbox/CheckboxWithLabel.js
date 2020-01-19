import React from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

function CheckboxWithLabel(props){
    const{defaultChecked, checkFor, onChange} = props;

    return(
        <div key={checkFor}>
            <Grid item s={12} md={5} >
                <Checkbox color="primary" type="checkbox" name={checkFor} defaultChecked={defaultChecked} onChange={onChange} className="checklistInput"/>
                <label htmlFor ={checkFor}>{checkFor + ":"}</label>
            </Grid>
        </div>
    );
}
export default CheckboxWithLabel;
