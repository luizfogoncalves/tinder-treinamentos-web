import React, { useState } from 'react'

import { Container, ModalLogin, ImageBlock , Form, Input, ButtonSubmit } from './styles'

import Image from '../../assets/images/Imagem.png'
import Icon from '../../assets/images/Icon.png'

import { FaEnvelope, FaKey } from 'react-icons/fa'

import { makeLogin } from '../../services/users'

export default function Home() {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    
    const login = async () => {
        console.log('email', state.email);
        console.log('password', state.password);
        try {
            const result = await makeLogin(state.email, state.password)
            console.log('retorno login', result);
        } catch (err) {
            console.log('Houve um erro ao realizar o login', err)
        }
    }
    
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
                    <input 
                        placeholder="E-mail" 
                        value={state.email} 
                        onChange={(e) => {
                            setState({
                                ...state,
                                email: e.target.value
                            })
                        }}
                    ></input>
                </Input>
                <Input>
                    <FaKey color="#000000" size="18px" />
                    <input 
                        type="password"
                        placeholder="Senha" 
                        value={state.password} 
                        onChange={(e) => {
                            setState({
                                ...state,
                                password: e.target.value
                            })
                        }}
                    ></input>
                </Input>
                <ButtonSubmit
                    onClick={() => {
                        login();
                    }}
                >Login</ButtonSubmit>
            </Form>
        </ModalLogin>
    </Container>
    )
}