import styled from "styled-components";

export const TitleAndSortContainer = styled.div`
    height: 50px;
    width: 100%;
    margin-top: 70px;
    margin-bottom: 30px;
`

export const TitleBox = styled.div`
    width: 200px;
    margin-left: 30px;
    margin-right: 500px;
    float: left;
    text-align: left;
    font-size: 35px;
`

export const SortBox = styled.div`
    margin-top: 20px;
    margin-right: 20px;
    float: right;
    display: flex;
`

export const SortOption = styled.div`
    margin: 10px;
    cursor: pointer;
    color: ${props => (props.isSelected ? 'green' : 'black')};
`