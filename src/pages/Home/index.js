import React, { useState, useEffect } from 'react'

import { Container, ModalLogin, ImageBlock , Form, Input, ButtonSubmit } from './styles'

import Image from '../../assets/images/Imagem.png'
import Icon from '../../assets/images/Icon.png'

import { FaEnvelope, FaKey } from 'react-icons/fa'

import { useHistory } from 'react-router-dom'

import { makeLogin } from '../../services/users'

export default function Home() {
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const history = useHistory();
    
    const login = async () => {
        console.log('entrei aqui');
        try {
            // const result = await makeLogin(state.email, state.password)
            await sessionStorage.setItem('user', JSON.stringify({
                name: 'Luiz',
                user: 'user'
            }))
            history.push('/course');
            // console.log('retorno login', result.data);
            
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
                        onChange={(e) => 
                            setState({
                                ...state,
                                password: e.target.value
                            })
                        }
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