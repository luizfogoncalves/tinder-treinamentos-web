import React from 'react'

import { Container, ModalLogin, ImageBlock , Form, Input, ButtonSubmit } from './styles'

import Image from '../../assets/images/Imagem.png'
import Icon from '../../assets/images/Icon.png'

import { FaEnvelope, FaKey } from 'react-icons/fa'

export default function Home() {
    return(
    <Container style={{
        backgroundImage: `url(${Image})`
    }}>
        <ModalLogin>
            <ImageBlock>
                <img src={Icon}/>
            </ImageBlock>
            <Form>
                <Input>
                    <FaEnvelope color="#000000" size="18px" />
                    <input placeholder="E-mail" ></input>
                </Input>
                <Input>
                    <FaKey color="#000000" size="18px" />
                    <input placeholder="Senha" ></input>
                </Input>
                <ButtonSubmit>Login</ButtonSubmit>
            </Form>
        </ModalLogin>
    </Container>
    )
}