import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/Logo.svg";
import Search from "../../assets/search.svg";
import intro from "../../assets/intro.svg";
import pop1 from "../../assets/pop1.svg";
import pop2 from "../../assets/pop2.svg";
import pop3 from "../../assets/pop3.svg";
import pop4 from "../../assets/pop4.svg";
import pop5 from "../../assets/pop5.svg";

import popular1 from "../../assets/popular1.svg";
import advertisement from "../../assets/advertisement.svg";
import video1 from "../../assets/video1.svg";
import video2 from "../../assets/video2.svg";
import video3 from "../../assets/video3.svg";
import video4 from "../../assets/video4.svg";
import video5 from "../../assets/video5.svg";
import video6 from "../../assets/video6.svg";
import video7 from "../../assets/video7.svg";
import video8 from "../../assets/video8.svg";
import video9 from "../../assets/video9.svg";

import SKKU from "../../assets/university_SKKU.jpg";
import LH from "../../assets/university_LH.jpg";
import KH from "../../assets/university_KH.jpg";
import HS from "../../assets/university_HS.jpg";
import DS from "../../assets/university_DS.jpg";
import google from "../../assets/google.jpg";
import samsung from "../../assets/samsung.jpg";
const Background = styled.div`
  background-color: white;
  background-repeat: no-repeat;
  background-position: center top;
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column; // 세로
`;

const Input = styled.input`
  color: #000000;
  // background-color: #F7F3F3;
  line-height: 20px;
  font-size: 16px;
  overflow-wrap: "auto";
  height: 30px;
  width: 400px;
  margin-left: 30px;
  outline: none;
  margin-top: 35px;
`;
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
`;

const Wrapper1 = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  width: 20%;
  height: 33px;
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 15px;

  @media (max-width: 375px) {
    //iphone
    justify-content: center;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    justify-content: center;
  }
`;

const Text_personal = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: "NotoSans";
  // margin-right: 5px;
  text-align: center;
  width: 40%;
  margin-left: ;
  margin-top: 5px;
`;
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
`;
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  flex-direction: row; // 가로
  width: 100%;
  height: 100px;
  margin-top: 20px;
`;

const MaskImage_logo = styled.img`
  height: 150px;
  width: 150px;
`;

const Wrapper3 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  align-self: center;
  flex-direction: row; // 가로
  width: 80%;
  height: 100px;
  margin-top: 20px;
`;

const Text_categories = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-family: "NotoSans";
  // margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`;

const Wrapper4 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 150px;
  margin-top: 80px;

  background-color: white;
`;

const MaskImage_slogan = styled.img`
  width: 30%;
`;
const Wrapper5 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column; // 가로
  margin-top: 100px;
  margin-bottom: 100px;

  width: 100%;
  height: 200px;
`;
const Wrapper6 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  height: 300px;
  background-color: white;
`;
const Wrapper7 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column; // 세로
  width: 100%;
  height: 1000px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 100%;
  margin-top: 5%;
  margin-bottom: 0%;
  height: 250px;
`;
const Video = styled.div`
  display: flex;
  width: 350px;
  height: 150px;
  margin-left: 7%;
  flex-direction: column; // 세로
  align-items: center;
  justify-content: center;
`;

const VideoTextButton = styled.button`
  display: flex;

  font-size: 15px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;

  flex-direction: column; // 세로
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  outline: 0;
  border: 0;
`;
const Videotext = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`;

const Wrapper8 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column; // 가로
  width: 100%;
  height: 400px;
`;
const Wrapper8_sub = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  flex-direction: row; // 가로
  width: 60%;
  height: 900px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 50px;
  justify-content: center;
  width: 100%;
  // overflow: hidden;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  // overflow: hidden;
`;
const Row3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40%;
  // overflow: hidden;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "NotoSans";
  text-align: center;
  width: 100%;
  height: 100px;
  margin-top: 100px;
`;
const Text_right = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: right;
  width: 100%;
  margin-top: 20px;
`;
const Text_center = styled.div`
  font-size: 35px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`;

const Viewmore = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: right;
  width: 85px;
  height: 30px;
  margin-left: 90%;
  background-color: #f6f6f6;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ChargeBox = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column; // 가로
  width: 50%;
  height: 95%;
`;

const ChargeText = styled.div`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: start;
  width: 100%;
  margin-top: 5px;
`;

const ChargeText_under = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  text-decoration: underline;
`;

const ChargeText_Blue = styled.div`
  font-size: 20px;
  color: #4b89dc;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
`;

const Creators_big = styled.img`
  width: 230px;
  height: 230px;
  margin-right: 30px;
`;

const Creators = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Sponors = styled.img`
  height: 100px;
  margin-top: 80px;
  margin-right: 60px;
`;
const Ads = styled.img`
  width: 100%;
  height: 220px;
  margin-top: 100px;
`;

function MainPage() {
  const history = useHistory();
  return (
    <>
      <Background>
        <Wrapper1>
          <Text_personal> My Channel </Text_personal>
          <Line />
          <Text_personal> My Page</Text_personal>
          <Line />`<Text_personal> Logout </Text_personal>`
        </Wrapper1>
        <Wrapper2>
          <Row>
            <MaskImage_logo img src={logo} />
            <Input></Input>
            <SearchButton>
              {" "}
              <img style={{ width: "30px", height: "30px" }} src={Search} />
            </SearchButton>
          </Row>
        </Wrapper2>
        <Wrapper3>
          <Text_categories> Upload </Text_categories>
          <Text_categories> Categories </Text_categories>
          <Text_categories> Video </Text_categories>
          <Text_categories> Premium </Text_categories>
        </Wrapper3>
        <Wrapper4>
          <Row>
            <MaskImage_slogan img src={intro} />
          </Row>

          {/* <img style={{ width: '100%', height: '30%' }} src={intro} /> */}
        </Wrapper4>
        <Wrapper5>
          <Text_center> Popular creators </Text_center>

          <Row>
            <Creators_big src={pop1}></Creators_big>
            <Creators src={pop2}></Creators>
            <Creators src={pop3}></Creators>
            <Creators src={pop4}></Creators>
            <Creators src={pop5}></Creators>
          </Row>
        </Wrapper5>

        <Row>
          {" "}
          <Ads img src={advertisement} />{" "}
        </Row>

        <Wrapper7>
          <Title> Newly Updated </Title>
          <Box>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video1} />
              <VideoTextButton onClick={() => history.push(`/viewer`)}>
                {" "}
                [HOT] 놓치면 안될 하반기 IT이슈 Best5{" "}
              </VideoTextButton>
            </Video>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video2} />
              <Videotext> 하루만에 웹 사이트 만들기[완결판] </Videotext>
            </Video>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video3} />
              <Videotext>
                {" "}
                [제작부터 심사까지]하루만에 이모티콘 만들기{" "}
              </Videotext>
            </Video>
          </Box>

          <Box>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video4} />
              <Videotext> 유튜브 썸네일 쉽게 만들기 #1 </Videotext>
            </Video>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video5} />
              <Videotext>
                {" "}
                Dark World 개발자가 직접 공개하는 제작과정{" "}
              </Videotext>
            </Video>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video6} />
              <Videotext> [Kids] 과학의 날 축하 영상 </Videotext>
            </Video>
          </Box>

          <Box>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video7} />
              <Videotext> IT시장의 트렌드 분석 </Videotext>
            </Video>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video8} />
              <Videotext> IT’s 닷컴에서 강의 시작했습니다. </Videotext>
            </Video>
            <Video>
              <img style={{ height: "300px", width: "300px" }} src={video9} />
              <Videotext> 대기업 코딩테스트 합격 끝장내기 </Videotext>
            </Video>
          </Box>

          <Viewmore> View more </Viewmore>
        </Wrapper7>
        <Wrapper8>
          <Title>Charge</Title>

          <Wrapper8_sub>
            <ChargeBox>
              <Row2>
                <ChargeText_Blue> IT'S </ChargeText_Blue>
                <ChargeText> Basic </ChargeText>
              </Row2>

              <ChargeText_under>• Free</ChargeText_under>
              <ChargeText>• Ads </ChargeText>
              <ChargeText>• Charge </ChargeText>
              <ChargeText>• Paid Download </ChargeText>
              <ChargeText> ... </ChargeText>
            </ChargeBox>
            <ChargeBox>
              <Row3>
                <ChargeText_Blue> IT'S </ChargeText_Blue>
                <ChargeText> Premium </ChargeText>
              </Row3>

              <ChargeText_under>• $3 per month</ChargeText_under>
              <ChargeText>• No Ads </ChargeText>
              <ChargeText>• No charge </ChargeText>
              <ChargeText>• Free Download </ChargeText>
              <ChargeText> ... </ChargeText>
            </ChargeBox>
          </Wrapper8_sub>
        </Wrapper8>

        <Wrapper5>
          <Text_center> Sponsored By </Text_center>

          <Row>
            <Sponors src={SKKU}></Sponors>
            <Sponors src={samsung}></Sponors>

            <Sponors src={KH}></Sponors>
            <Sponors src={LH}></Sponors>
            <Sponors src={google}></Sponors>

            <Sponors src={DS}></Sponors>
            <Sponors src={HS}></Sponors>
          </Row>
        </Wrapper5>
      </Background>
    </>
  );
}
export default MainPage;
