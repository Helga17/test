import React from "react";
import { Container } from '@material-ui/core';

const DisplayArea = ({elements}) => {
    return(
        <Container style={{ backgroundColor: '#cfe8fc', height: '100vh', paddingTop: "30px" }}>
            {
                Object.keys(elements).map((tag, index) => {
                    console.log(elements, tag)
                        switch(tag){
                        case "input": 
                            return <input {...elements[tag]} key={index} />
                        case "div":
                            return <div {...elements[tag]} key={index} />
                        case "p":
                            return <p key={index} {...elements[tag]}>{Object.values(elements[tag].text)}</p>
                        case "ul":
                            return <ul key={index} {...elements[tag]}><li>{Object.values(elements[tag].li)}</li></ul>
                        default: break
                    }
                    return tag;
                })
            }
        </Container>
    )
}

export default DisplayArea;   