import React from 'react'
import Link from 'next/link'
import{
    Navigation,
    ContainerMenu,
    Logo,
    ContainerLinks,
    Item
} from './style'

const Menu = (props) => {
    return (
        <Navigation>
            <ContainerMenu>
                <Logo>
                    <h1>{props.logonome}</h1>
                </Logo>
                <ContainerLinks>
                    <Item>
                        <Link href="/">
                            <a>Home</a>                        
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/">
                            <a>Cursos</a>                        
                        </Link>
                    </Item>
                    <Item>
                        <Link href="/">
                            <a>Entrevistas</a>                        
                        </Link>
                    </Item>
                    <Item className="active">
                        <Link href="/">
                            <a>About-us</a>                        
                        </Link>
                    </Item>
                    
                </ContainerLinks>
            </ContainerMenu>
        </Navigation>
    )
}

export default Menu;