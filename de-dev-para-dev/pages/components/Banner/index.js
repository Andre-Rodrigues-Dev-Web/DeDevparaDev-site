import React from 'react'

import{
    Container,
    Col,
    Row
} from '../Grids/style'

import {
    ContainerBanner,
    ContainerTextos
} from './style'


const Banner = (props) => {
    return (
        <ContainerBanner>
            <Container>
                <Row>
                    <Col Desk="6">
                        <ContainerTextos>
                            <h2>{props.titleBanner}</h2>  
                            <p>{props.fraseBanner}</p>
                        </ContainerTextos>      
                    </Col>
                    <Col Desk="6">
                        <img src="/imgs/about-us.png" alt="desenho" />
                    </Col>
                </Row>
            </Container>
        </ContainerBanner>
    )
}
export default Banner;