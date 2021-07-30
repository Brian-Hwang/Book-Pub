import React from "react"
import styled from "styled-components"

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin-top: 20px;
    margin-left: 10px;
    width:80%;
    height:100px;
`
const Profile= styled.img`
  height: 70px;
  width: 70px;
  margin-left: 5px;
  margin-top: 5px;
`
const Box=styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    height: 80px;
    width: 70%;
    margin-left: 5px;
    margin-top: 5px;
    
`

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  width: 80%;
  
`
const Comm = styled.div`
  font-size: 15px;
  text-align: left;
  width: 100%;
`

function Comment({icon, name, text}) {
    return (
        <Wrapper>
            <Profile img src={icon}/>
            <Box>
                <Name> {name} </Name>
                <Comm>  {text} </Comm>
            </Box>
        </Wrapper>

    )
}
export default Comment;