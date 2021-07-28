import React from "react"
import styled from "styled-components"



import logo from '../../assets/Logo.svg'
import Search from '../../assets/search.svg'
import intro from '../../assets/intro.svg'
import pop1 from '../../assets/pop1.svg'
import pop2 from '../../assets/pop2.svg'
import pop3 from '../../assets/pop3.svg'
import pop4 from '../../assets/pop4.svg'
import pop5 from '../../assets/pop5.svg'

import popular1 from '../../assets/popular1.svg'
import advertisement from '../../assets/advertisement.svg'
import video1 from '../../assets/video1.svg'
import video2 from '../../assets/video2.svg'
import video3 from '../../assets/video3.svg'
import video4 from '../../assets/video4.svg'
import video5 from '../../assets/video5.svg'
import video6 from '../../assets/video6.svg'
import video7 from '../../assets/video7.svg'
import video8 from '../../assets/video8.svg'
import video9 from '../../assets/video9.svg'


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

const Input = styled.input`
    color:#000000;
    // background-color: #F7F3F3;
    line-height : 20px;
    font-size: 16px;
    overflow-wrap:"auto";
    height: 30px;
    // border: 1px solid #ffffff;
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline:none;
    
    margin-top:11px;
    // border-radius: 10px;
    @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 300px;
    margin-left: 45px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 368px;
    margin-left: 85px;
  }
  @media (max-width: 430px) {
    //iphone
    display: none;
  }
`
const SearchButton = styled.button`
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  width: 40px;
  height: 37px;
  margin-top: 11px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    margin-right: 10px;
    margin-left: 10px;
    background-color: #f7f3f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1440px) {
    //desktop
    margin-right: 116px;
    margin-left: 20px;
    background-color: #f7f3f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 430px) {
    //iphone
    background-color: #ffffff;
    margin-top: 20px;
    margin-right:5px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`


const Wrapper1 = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  flex-direction: row; // 가로
  width: 100%;
  height: 80px;
  background-color: gray;
`

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 200px;
  background-color: white;
`
const Wrapper3 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 150px;
  background-color: gray;
`
const Wrapper4 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 150px;
  background-color: white;
`
const Wrapper5 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column; // 가로
  width: 100%;
  height: 200px;
  background-color: gray;
`
const Wrapper6 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 300px;
  background-color: white;
`
const Wrapper7 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column; // 세로
  width: 100%;
  height: 900px;
`

const Box = styled.div`
display: flex;
align-items: center;
justify-items: center;
flex-direction: row; // 가로
width: 100%;
margin-top: 5%;
margin-bottom: 0%;
height: 250px;
`
const Video = styled.div`
display: flex;
width: 350px;
height: 150px;
margin-left: 7%;
flex-direction: column; // 세로
align-items: center;
justify-content: center;
`

const Wrapper8 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column; // 가로
  width: 100%;
  height: 1000px;
`
const Wrapper8_sub = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  flex-direction: row; // 가로
  width: 60%;
  height: 900px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: 'NotoSans';
  text-align: center;
  width: 100%;
  height: 100px;
  margin-top: 100px;
`
const Text_right = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: right;
  width: 10%;
  margin-top: 5px;
`
const Text_center = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`

const Viewmore = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: right;
  width: 90px;
  height: 30px;
  margin-left: 90%;
  background-color: #F6F6F6;
  margin-top: 5px;
  margin-bottom: 10px;
`
const ChargeBox = styled.div`
  display: flex;
  align-items: left;
  justify-items: left;
  flex-direction: column; // 가로
  width: 50%;
  height: 95%;
`

const ChargeText = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`

const ChargeText_Blue = styled.div`
  font-size:20px;
  color: #4B89DC;
  font-weight: bold;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`

const Creators= styled.div`
  height: 100px; width: 100px;
  margin-right: 10px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`


function MainPage() {
    return(
        <> 
        <Background>
            <Wrapper1>
            <Text_right> My Channel | </Text_right>
            <Text_right> My Page | </Text_right>
            <Text_right> Logout </Text_right>

              </Wrapper1> 
            <Wrapper2> 
                <img style={{ height: '150px', width: '150px' }} src={logo} />
                <Input></Input>
                <SearchButton>
        {' '}
        <img style={{ width: '30px', height: '30px' }} src={Search} />
      </SearchButton>

            </Wrapper2>
            <Wrapper3> 
            <Text_right> Upload </Text_right>
            <Text_right> Categories </Text_right>
            <Text_right> Video </Text_right>
            <Text_right> Premium </Text_right>
            </Wrapper3>
            <Wrapper4> 
            <img style={{ width: '200px', height: '200px' }} src={intro} />

            </Wrapper4>
            <Wrapper5> 
            <Text_center> Popular creators </Text_center>

              <Row>
                <Creators> pop1 </Creators>
              <img style={{ height: '100px', width: '100px' }} src={pop1} /> 
            <img style={{ height: '100px', width: '100px' }} src={[pop2]} /> 
            <img style={{ height: '100px', width: '100px' }} src={pop3} /> 
            <img style={{ height: '100px', width: '100px' }} src={pop4} /> 
            <img style={{ height: '100px', width: '100px' }} src={pop5} />            
            </Row>

            </Wrapper5>
            <Wrapper6>  <img src={advertisement} /> </Wrapper6>

            <Wrapper7> 
              <Title> Newly Updated </Title>
              <Box> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video1} /> 
                <Text_center> [HOT] 놓치면 안될 하반기 IT이슈 Best5 </Text_center>
              </Video> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video2} /> 
                <Text_center> 하루만에 웹 사이트 만들기[완결판] </Text_center>
              </Video> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video3} /> 
                <Text_right> [제작부터 심사까지]하루만에 이모티콘 만들기 </Text_right>
              </Video> 
              </Box>

              <Box> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video4} /> 
                <Text_right> 유튜브 썸네일 쉽게 만들기 #1 </Text_right>
              </Video> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video5} /> 
                <Text_right> Dark World 개발자가 직접 공개하는 제작과정 </Text_right>
              </Video> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video6} /> 
                <Text_right> [Kids] 과학의 날 축하 영상 </Text_right>
              </Video> 
              </Box>

              <Box> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video7} /> 
                <Text_right> IT시장의 트렌드 분석 </Text_right>
              </Video> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video8} /> 
                <Text_right> IT’s 닷컴에서 강의 시작했습니다. </Text_right>
              </Video> 
              <Video> 
                <img style={{ height: '300px', width: '300px' }} src={video9} /> 
                <Text_right> 대기업 코딩테스트 합격 끝장내기 </Text_right>
              </Video> 
              </Box>

              <Viewmore> View more </Viewmore> 

            </Wrapper7>
            <Wrapper8> 
              <Title>Charge</Title> 

              <Wrapper8_sub> 
              <ChargeBox>
                <div>
                <ChargeText_Blue > IT's </ChargeText_Blue > 
                <ChargeText > Basic </ChargeText> 
                </div> 
                
                <ChargeText> Free</ChargeText> 
                <ChargeText> Ads </ChargeText> 
                <ChargeText> Charge </ChargeText> 
                <ChargeText> Paid Download </ChargeText> 
                <ChargeText> ... </ChargeText> 
              </ChargeBox>
              <ChargeBox>
                <div>
                <ChargeText_Blue > IT's </ChargeText_Blue > 
                <ChargeText> Premium </ChargeText> 
                </div> 
                
                <ChargeText> $10 per month</ChargeText> 
                <ChargeText> No Ads </ChargeText> 
                <ChargeText> No charge </ChargeText> 
                <ChargeText> Free Download </ChargeText> 
                <ChargeText> ... </ChargeText> 
              </ChargeBox>
              </Wrapper8_sub>
          


            </Wrapper8>


        </Background>
        
        </>
    )
}
export default MainPage;