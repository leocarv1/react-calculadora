import styled from 'styled-components'

export const Container = styled.div`
    widht: 100%;
    height: 100vh;
    background-color: #cacaca;
    

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    border-radius: 27px 27px 27px 27px;
    -moz-border-radius: 27px 27px 27px 27px;
    -webkit-border-radius: 27px 27px 27px 27px;
    border: 0px solid #000000;
    
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`