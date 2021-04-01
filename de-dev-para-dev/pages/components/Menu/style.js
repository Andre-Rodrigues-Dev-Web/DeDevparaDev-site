import style from 'styled-components'

const Navigation = style.nav`
    box-shadow: 1px 3px 4px 0 #00000014; 
    position: fixed;
    width: 100%;
`;

const ContainerMenu = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 98%;
`;

const Logo = style.div`
    width: 40%;
    h1{
        color: #6C63FF;
        font-size: 4vw;
        font-weight: 800;
        text-transform: uppercase;
    }
    @media(min-width: 700px){
        h1{
            font-size: 1.5vw;
        }
    }
`;
const ContainerLinks = style.ul`
    display: none;
    @media(min-width: 700px){
        display: block;
        width: 34%;
    }
    .active{
        background-color: #6C63FF;
        border-radius: 3rem;
        box-shadow: 1px 3px 4px 0 #00000014;
        color: #fff;
    }
`;
const Item = style.li`
    color: #333;
    display: inline;
    font-weight: 600;
    padding: 10px 20px;
    list-style-type: none;
`;

export{
    Navigation,
    ContainerMenu,
    Logo,
    ContainerLinks,
    Item
}