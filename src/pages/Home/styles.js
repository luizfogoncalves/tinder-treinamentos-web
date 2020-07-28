import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalLogin = styled.div`
    width: 60%;
    height: 70%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
`

export const ImageBlock = styled.div`
    width: 40%;
    height: 90%;
    
    margin-top: 5%;
    margin-bottom: 5%;
    border-right: 1px solid rgba(112, 112, 112, .5);
        
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 200px;
        height: 200px;
    }
`

export const Form = styled.div`
    width: 60%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.div`
    height: 44px;
    border-radius: 55px;
    border: 1px solid #DDDDDD;
    width: 50%;
    background-color: #DDDDDD;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    
    svg {
        width: 20%;
        opacity: 0.7;
    }
    
    input {
        width: 80%;
        height: 100%;
        box-sizing: border-box;
        border: none;
        background: transparent;
        padding-right: 10px;
        color: #707070;
    }
`

export const ButtonSubmit = styled.button`
    border-radius: 55px;
    height: 44px;
    width: 50%;
    background-color: #06AD32;
    border: 1px solid #06AD32;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;
`