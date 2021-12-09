import styled from "styled-components";


function Headline ({color, name}) {
    return <h1 style={{backgroundColor: color}}>Hello {name}!</h1>  
}


export default Headline;