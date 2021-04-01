import style from 'styled-components'

const Container = style.div`
    margin: 0 auto;
    width: 98%;
`;

const Row = style.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 700px){
        flex-direction: row;
    }
`;

const getCol = (ValueGrid) =>{
    if(!ValueGrid) return;
    const width = ValueGrid / 12 * 100;
    return `width: ${width}%;`; 
} 

const Col = style.div`
    @media(min-width: 700px){
        ${({Desk}) => Desk && getCol (Desk)}
    }
`;

export{
    Container,
    Col,
    Row
}