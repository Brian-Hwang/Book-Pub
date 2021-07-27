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
  background-color: red;
`

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 150px;
  background-color: orange;
`
const Wrapper3 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 80px;
  background-color: yellow;
`
const Wrapper4 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 150px;
  background-color: green;
`
const Wrapper5 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 200px;
  background-color: blue;
`
const Wrapper6 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 100px;
  background-color: blueviolet;
`
const Wrapper7 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 500px;
  background-color: purple;
`
const Wrapper8 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 300px;
  background-color: gray;
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
            <Wrapper3> </Wrapper3>
            <Wrapper4> </Wrapper4>
            <Wrapper5> </Wrapper5>
            <Wrapper6> </Wrapper6>
            <Wrapper7> </Wrapper7>
            <Wrapper8> </Wrapper8>


        </Background>
        
        </>
    )
}
export default MainPage;