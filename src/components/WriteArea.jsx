import React from "react";
import {  Container, TextareaAutosize } from '@material-ui/core';

const WriteArea = ({text, setText, add}) => {
    
    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    return(
        <Container style={{paddingTop: "30px"}}>
            <TextareaAutosize 
                placeholder="hi" 
                value={text} 
                onChange={handleChangeText} 
                onKeyPress={add}
            />
        </Container>
    )
}

export default WriteArea;