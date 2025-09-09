import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 20px;
`

export const Item = styled.li`
    width: 250px;
    background-color: #ddd;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    width: 220px;
    border-radius: 15px;
    margin: 15px;
`

export const Title = styled.p`
    text-decoration: none;
    color: #000;
    text-align: center;
`

