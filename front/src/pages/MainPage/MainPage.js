import React from "react"
import styled from "styled-components"
import popular1 from '../../assets/popular1.svg'

const Background = styled.div`
  background-color: white;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column; // 세로
`

const Wrapper1 = styled.div`
  display: flex;
  align-items: right;
  flex-direction: row; // 가로
  width: 100%;
  height: 30px;
  background-color: pink;
`

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 150px;
  background-color: blue;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`

function MainPage() {
    return(
        <> 
        <Background>
            <Wrapper1></Wrapper1> 
            <Wrapper2> 
            <Row>
                <img style={{ height: '50px', width: '50px' }} src={popular1} />
              </Row>


            </Wrapper2>


        </Background>
        
        </>
    )
}
export default MainPage;