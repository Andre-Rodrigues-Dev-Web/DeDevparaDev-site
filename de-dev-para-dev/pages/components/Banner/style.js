import style from 'styled-components'

const ContainerBanner = style.div`
    padding: 10rem 0;
    img{
        width: 90%;
    }
`;
const ContainerTextos = style.div`
    h2{
        font-size: 4vw;
    }
    @media(min-width: 700px){
        margin-left: 10rem;
        width: 60%;
        h2{
            font-size: 3.4vw;
        }
        p{
            font-size: 2vw;
        }
    }
`;

export {
    ContainerBanner,
    ContainerTextos
}