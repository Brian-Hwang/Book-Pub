import React from "react"
import {NavLink} from "react-router-dom";
import styled from "styled-components"
import Comment from './Comment'

import logo from '../../assets/Logo.svg'
import Search from '../../assets/search.svg'

import PackageAds from '../../assets/PackageAds.svg'
import PackageDownload from '../../assets/PackageDownload.svg'
import PackageCode from '../../assets/PackageCode.svg'
import User1 from '../../assets/User1.svg'
import User2 from '../../assets/User2.svg'
import User3 from '../../assets/User3.svg'
import User4 from '../../assets/User4.svg'
import User5 from '../../assets/User5.svg'
import arrow from '../../assets/arrow.svg'
import myProfile from '../../assets/MyProfile.svg'

import { AlwaysScrollSection } from './AlwaysScrollSection'


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
    width: 400px;
    margin-left: 30px;
    outline:none;
    margin-top:35px;
`
const SearchButton = styled.button`
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  width: 40px;
  height: 37px;
  margin-top: 35px;
  margin-right: 116px;
  margin-left: 20px;
  background-color: #f7f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


const Wrapper1 = styled.div`

  display: flex;
  align-self: flex-end;
  flex-direction: row;
  width: 20%;
  height: 33px;
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 15px;
`

const Text_personal = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: 'NotoSans';
  // margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`
const Line = styled.div`
  width: 0px;
  margin-top: 7px;
  border: 1px solid #000000;
  margin-left: 15px;
  margin-right: 15px;
  height: 15px;
  @media (max-width: 375px) {
    //iphone
    display: none;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    display: none;
  }
`
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  flex-direction: row; // 가로
  width: 100%;
  height: 100px;
  margin-top: 20px;

`

const MaskImage_logo = styled.img`
  height: 150px;
  width: 150px;
`
const Download = styled.img`
  height: 80%;
  width: 90%;
  margin-left: 3%;
  margin-top: 2%;
`
const Code = styled.img`
  height: 80%;
  width: 90%;
  margin-left: 3%;
  margin-top: 2%;
  margin-bottom: 3%;

  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 70%;
    height: 80%;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 60%;
    height: 70%;
  }
`
const PkAds = styled.img`
  height: 100%;
  width: 100%;
`
const Arrow = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 50px;
  margin-top: 20px;
`
const MyProfile = styled.img`
  height: 100px;
  width: 800px;
  margin-top: 5%;
  margin-left: 20%;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  // overflow: hidden;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // overflow: hidden;
`

const Wrapper3 = styled.div`

  display: flex;
  flex-direction: row; // 가로
  width: 50%;
  height: 50px;
  justify-content: flex-end;
  margin-top: 50px;
  background-color: red;
`
const Wrapper4 = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1000px;
  background-color: orange;
`
const Box1 = styled.div`

  display: flex;
  flex-direction: column;
  width: 70%;
  height: 1000px;
  background-color: purple;
`
const Box1_sub1 = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 600px;
  background-color: blanchedalmond;
`
const Box1_sub2 = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px;
  background-color:yellowgreen;
`
const Box2 = styled.div`

  display: flex;
  flex-direction: row;
  width: 30%;
  height: 1000px;
  background-color: skyblue;
`
const Wrapper5 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1000px;
`
const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:  flex-start;
  width: 75%;
  height: 1000px;
`
const Box4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  height: 1000px;
`
const Wrapper6 = styled.div`
  display: flex;
  flex-direction:  column;
  align-items: left;
  width: 100%;
  height: 1000px;
`
const Wrapper7 = styled.div`
  display: flex;
  flex-direction:  column;
  width: 100%;
  height: 800px;
  background-color: blue;
`
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  height: 30px;
  margin-top: 3%;
  margin-left: 3%;
  margin-right:3%;
`
const Division = styled.div`
  width: 100%;
  height: 2px;
  color: black;
`





function ViewerPage() {
    return ( 
        < > 
        <Background>
            <Wrapper1>
            <Text_personal> My Channel </Text_personal>
            <Line />
            <Text_personal> My Page</Text_personal>
            <Line />
            <Text_personal> Logout </Text_personal>
              </Wrapper1> 
            <Wrapper2> 
              <Row >
              <MaskImage_logo img src={logo} />
              <Input></Input>
                <SearchButton> {' '} <img style={{ width: '30px', height: '30px' }} src={Search} />
            </SearchButton>
              </Row>
            </Wrapper2>
            <Wrapper3> </Wrapper3>
            <Wrapper4>
                <Box1>
                    <Box1_sub1> </Box1_sub1>
                    <Box1_sub2> </Box1_sub2>
                </Box1>
                <Box2> 

                </Box2>
                
            </Wrapper4>
            <Wrapper5> 
                <Box3>
                  <Col> 
                  <Title> packages </Title>
                  <Division> </Division>
                  <Download img src={PackageDownload}/> 
                  <Title > Code </Title>
                  <Code img src={PackageCode}/>
                  </Col>
                </Box3>
                <Box4> 
                  <PkAds img src={PackageAds}/>
                </Box4>
            </Wrapper5>
            <Wrapper6> 
            <Title> Q&A </Title>

            <MyProfile img src={myProfile}/>
            <AlwaysScrollSection>
              
            <Col> 

            <Comment icon = {User1} name="Kick it" text="I Don't UNDERSTAND" />
            <Row>
              <Arrow img src={arrow}/>
            <Comment icon = {User2} name="BG Kim(Business Girl)" text="Tell me in detail what you don't understand." />
            </Row> 

            <Comment icon = {User3} name="FFFFFF" text="I can't compile the development program." />
            <Row>
              <Arrow img src={arrow}/>
              <Comment icon = {User2} name="BG Kim(Business Girl)" text="Make sure the environment is properly set up." />
            </Row> 
            
            <Comment icon = {User4} name="KittyBoy" text="The video keeps stopping." />
            <Row>
              <Arrow img src={arrow}/>
              <Comment icon = {User2} name="BG Kim(Business Girl)" text="Check the Internet environment." />
            </Row> 

            <Comment icon = {User1} name="Kick it" text="I Don't UNDERSTAND" />
            <Row>
              <Arrow img src={arrow}/>
            <Comment icon = {User2} name="BG Kim(Business Girl)" text="Tell me in detail what you don't understand." />
            </Row> 

            <Comment icon = {User3} name="FFFFFF" text="I can't compile the development program." />
            <Row>
              <Arrow img src={arrow}/>
              <Comment icon = {User2} name="BG Kim(Business Girl)" text="Make sure the environment is properly set up." />
            </Row> 

          
            </Col>
            </AlwaysScrollSection> 
            
            </Wrapper6>
            <Wrapper7> </Wrapper7>
        </Background>
        
        </>
    )
}
export default ViewerPage;