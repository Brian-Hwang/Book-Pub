import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/Logo.svg";
import Search from "../../assets/search.svg";
import like from "../../assets/like.svg";
import video1 from "../../assets/video1.svg";
import profile from "../../assets/profile.svg";
import video3 from "../../assets/video3.svg";

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
`;

const Text_personal = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: "NotoSans";
  // margin-right: 5px;
  text-align: center;
  width: 100%;
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  // overflow: hidden;
`;
const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row; // 가로
  width: 50%;
  height: 50px;
  justify-content: flex-end;
  margin-top: 50px;
  background-color: red;
`;
const Wrapper4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1000px;
  background-color: orange;
  border-bottom: 1px solid rgba(0, 0, 0, 255);
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 1000px;
  background-color: purple;
`;
const Box1_sub1 = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%
  height: 40%;
  background-color: blanchedalmond;
`;
const Box1_sub2 = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: yellowgreen;
`;
const Text_Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-left: 10px;
  text-align: start;
  width: 100%;
`;
const Box1_sub2_sub1 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row;
  width: 100%;
  height: 8%;
  background-color: white;
`;
const Box1_sub2_sub2 = styled.div`
  display: flex;
  border-top: 2px solid rgba(0, 0, 0, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 255);

  align-items: center;
  justify-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Box1_sub2_sub2_sub1 = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  align-items: center;
  justify-items: flex-start;
  flex-direction: row;
  width: 100%;
  height: 8%;
  background-color: white;
`;
const Text_channel = styled.div`
  font-size: 18px;
  font-family: "NotoSans";
  margin-left: 10px;
  text-align: start;
  width: 100%;
`;
const Box1_sub2_sub2_sub2 = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  align-items: center;
  justify-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 8%;
  background-color: white;
`;
const Text_channel_description = styled.div`
  font-size: 13px;
  font-family: "NotoSans";
  margin-left: 10px;
  text-align: start;
  width: 100%;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-center;
  width: 30%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 255);

  background-color: skyblue;
`;
const Text_relatedVideos = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 23px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-left: 10px;
  text-align: center;
  width: 100%;
`;
const Wrapper5 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 800px;
  background-color: yellow;
`;
const Box3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  height: 800px;
  background-color: yellow;
`;
const Box4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  height: 800px;
  background-color: orange;
`;
const Wrapper6 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background-color: green;
`;
const Wrapper7 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background-color: blue;
`;

const CategoryButton = styled.button`
  display: flex;

  font-size: 15px;
  font-weight: bold;
  font-family: "NotoSans";
  text-align: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 255);
  flex-direction: column; // 세로
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  outline: 0;
`;
const Video = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column; // 세로
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const Videotext = styled.div`
  font-size: 13px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: center;
  width: 100%;
`;

function ViewerPage() {
  return (
    <>
      <Background>
        <Wrapper1>
          <Text_personal> My Channel </Text_personal>
          <Line />
          <Text_personal> My Page</Text_personal>
          <Line />
          <Text_personal> Logout </Text_personal>
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
          <CategoryButton>Video</CategoryButton>
          <CategoryButton>Description</CategoryButton>
          <CategoryButton>Code</CategoryButton>
          <CategoryButton>QnA</CategoryButton>
          <CategoryButton>Comments</CategoryButton>
        </Wrapper3>
        <Wrapper4>
          <Box1>
            <Box1_sub1>
              <img style={{ height: "100%", width: "100%" }} src={video1} />
            </Box1_sub1>

            <Box1_sub2>
              <Box1_sub2_sub1>
                <Text_Title> [놓치면 안될 하반기 IT이슈 Best 5] </Text_Title>
                <img style={{ width: "8%" }} src={like} />
              </Box1_sub2_sub1>
              <Box1_sub2_sub2>
                <Box1_sub2_sub2_sub1>
                  <img style={{ height: "80%" }} src={profile} />
                  <Text_channel>BG Kim (Business Girl)</Text_channel>
                </Box1_sub2_sub2_sub1>
                <Box1_sub2_sub2_sub2>
                  <Text_channel_description>
                    BG Kim은 누구인가요?
                  </Text_channel_description>
                  <Text_channel_description>
                    microsoft, google, kakao 3사에 특별채용된 풀스택 개발자이자
                  </Text_channel_description>
                  <Text_channel_description>
                    IT’s Parter Creator 입니다.
                  </Text_channel_description>
                  <Text_channel_description>
                    ‎‎‏‏‎ ‎‏‏‎
                  </Text_channel_description>
                  <Text_channel_description>
                    ‎‎‏‏‎ ‎‏‏‎‎
                  </Text_channel_description>
                  <Text_channel_description>
                    {" "}
                    광고&협업문의는 bggirl@gmail.com
                  </Text_channel_description>
                </Box1_sub2_sub2_sub2>
              </Box1_sub2_sub2>
            </Box1_sub2>
          </Box1>

          <Box2>
            <Text_relatedVideos> Related Videos </Text_relatedVideos>

            <Video>
              <img style={{ width: "90%" }} src={video3} />
              <Videotext>
                {" "}
                [제작부터 심사까지]하루만에 이모티콘 만들기{" "}
              </Videotext>
            </Video>
            <Video>
              <img style={{ width: "90%" }} src={video3} />
              <Videotext>
                {" "}
                [제작부터 심사까지]하루만에 이모티콘 만들기{" "}
              </Videotext>
            </Video>
            <Video>
              <img style={{ width: "90%" }} src={video3} />
              <Videotext>
                {" "}
                [제작부터 심사까지]하루만에 이모티콘 만들기{" "}
              </Videotext>
            </Video>
            <Video>
              <img style={{ width: "90%" }} src={video3} />
              <Videotext>
                {" "}
                [제작부터 심사까지]하루만에 이모티콘 만들기{" "}
              </Videotext>
            </Video>
          </Box2>
        </Wrapper4>
        <Wrapper5>
          <Box3> </Box3>
          <Box4> </Box4>
        </Wrapper5>
        <Wrapper6> </Wrapper6>
        <Wrapper7> </Wrapper7>
      </Background>
    </>
  );
}
export default ViewerPage;
