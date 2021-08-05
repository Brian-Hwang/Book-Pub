import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/Logo.svg";
import Search from "../../assets/search.svg";
import like from "../../assets/like.svg";
import video1 from "../../assets/video1.svg";
import video2 from "../../assets/video2.svg";
import video3 from "../../assets/video3.svg";
import video4 from "../../assets/video4.svg";


import profile from "../../assets/profile.svg";
import Comment from "./Comment";

import PackageAds from "../../assets/PackageAds.svg";
import PackageDownload from "../../assets/PackageDownload.svg";
import PackageCode from "../../assets/PackageCode.svg";
import User1 from "../../assets/User1.svg";
import User2 from "../../assets/User2.svg";
import User3 from "../../assets/User3.svg";
import User4 from "../../assets/User4.svg";
import User5 from "../../assets/User5.svg";
import arrow from "../../assets/arrow.svg";
import myProfile from "../../assets/MyProfile.svg";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

import Project1 from "../../assets/Project1.svg";
import Project2 from "../../assets/Project2.svg";
import Project3 from "../../assets/Project3.svg";
import Project4 from "../../assets/Project4.svg";
import Project5 from "../../assets/Project5.svg";
import Project6 from "../../assets/Project6.svg";

import information1 from "../../assets/information1.svg";
import information2 from "../../assets/information2.svg";
import information3 from "../../assets/information3.svg";
import information4 from "../../assets/information4.svg";
import information5 from "../../assets/information5.svg";

import ReactPlayer from "react-player";

import { AlwaysScrollSection } from "./AlwaysScrollSection";

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
  width: 700px;
  margin-left: 10px;
  outline: none;
  margin-top: 55px;
`;
const SearchButton = styled.button`
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  width: 40px;
  height: 37px;
  margin-top: 55px;
  margin-right: 116px;
  margin-left: 20px;
  background-color: #f7f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 280px;
  justify-content: column;
  align-items: column;
  overflow: hidden;
  position: fixed;
  background-color: white;
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  margin-left: 70%;
  height: 33px;
  margin-top: 15px;
  margin-right: 15px;
  overflow: hidden;
  position: fixed;
  background-color: white;
`;

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: row; // 가로
  width: 50%;
  margin-left: 25%;
  height: 200px;
  margin-top: 50px;
  overflow: hidden;
  position: fixed;
  background-color: white;
`;

const MaskImage_logo = styled.img`
  height: 200px;
  width: 300px;
`;

const Download = styled.img`
  height: 80%;
  width: 90%;
  margin-left: 3%;
  margin-top: 2%;
`;
const Code = styled.img`
  height: 60%;
  width: 70%;
  margin-left: 3%;
  margin-top: 2%;
  margin-bottom: 3%;
`;
const PkAds = styled.img`
  height: 100%;
  width: 100%;
`;
const Arrow = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 50px;
  margin-top: 20px;
`;
const MyProfile = styled.img`
  height: 100px;
  width: 800px;
  margin-top: 5%;
  margin-left: 10%;
`;
const Like = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 2px;
  margin-top: 2px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  // overflow: hidden;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 280px;
  overflow: hidden;
  position: fixed;
`;
const Wrapper4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1000px;
  border-bottom: 1px solid rgba(0, 0, 0, 255);
  overflow: hidden;
  margin-top: 330px;
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 1000px;
`;
const Box1_sub1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Box1_sub2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  height: 15%;
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
  font-size: 22px;
  font-weight: bold;
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
  font-size: 15px;
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
`;

const Text_relatedVideos = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-left: 10px;
  text-align: center;
  width: 100%;
`;
const Wrapper_bottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2600px;
  overflow: hidden;
`;
const Wrapper_left = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 2600px;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 255);
`;
const Wrapper_right = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 2600px;
  overflow: hidden;
`;


const Wrapper5 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 800px;
`;

const Box4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 890px;
`;

const Wrapper6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 1000px;
  overflow: hidden;
`;
const Wrapper6_right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: 1130px;
  overflow: hidden;
  border-top: 2px solid rgba(0, 0, 0, 255);
  border-bottom: 2px solid rgba(0, 0, 0, 255);
`;
const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin-top: 30px;
`;

const ProjectText = styled.div`
  font-size: 15px;
  margin-left: 10px;
  margin-top: 25px;
  text-align: start;
  font-weight: bold;
  width: 70%;
`;

const Profile= styled.img`
  height: 70px;
  width: 70px;
  margin-left: 5px;
  margin-top: 5px;
  margin-left: 20px;
`

const InforBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin-top: 20px;
`;

const InforText_Blue = styled.div`
  font-size: 18px;
  margin-left: 20px;
  font-weight: bold;
  margin-top: 35px;
  text-align: start;
  color: #4b89dc;
  width: 10%;
`;
const InforText = styled.div`
  font-size: 18px;
  margin-left: 3px;
  margin-top: 35px;
  font-weight: bold;
  text-align: start;
`;

const Infor= styled.img`
  height: 100px;
  width: 100px;
  margin-left: 5px;
  margin-top: 5px;
  margin-left: 20px;
`


const Wrapper7 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const Wrapper7_right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  overflow: hidden;
  border-bottom: 2px solid rgba(0, 0, 0, 255);
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

const FirstVideo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column; // 세로
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const Videotext = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-family: "NotoSans";
  margin-right: 5px;
  text-align: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  height: 20px;
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 3%;
  margin-top: -2%;
`;
const TitleBox = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  height: 30px;
  margin-top: 5%;
  border-bottom: 2px solid rgba(0, 0, 0, 255);
`;

const Division = styled.div`
  width: 100%;
  height: 2px;
  color: black;
`;

const CommentRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  justify-content: flex-start;
  align-items: flex-start;
  width: 25%;
  // overflow: hidden;
`;

const Text_Comment = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "NotoSans";
  color: grey;
  // margin-right: 5px;
  text-align: center;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 5%;
`;

function ViewerPage() {
  return (
    <>
      <Background>
        <Header>
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
            <CategoryButton onClick={() => window.scrollTo(0, 0)}>
              {" "}
              Video
            </CategoryButton>
            <CategoryButton onClick={() => window.scrollTo(0, 400)}>
              {" "}
              Description
            </CategoryButton>
            <CategoryButton onClick={() => window.scrollTo(0, 1000)}>
              {" "}
              Code
            </CategoryButton>
            <CategoryButton onClick={() => window.scrollTo(0, 1830)}>
              {" "}
              QnA
            </CategoryButton>
            <CategoryButton onClick={() => window.scrollTo(0, 2800)}>
              {" "}
              Comments
            </CategoryButton>
          </Wrapper3>
        </Header>
        <Wrapper4>
          <Box1>
            <Box1_sub1>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                width="100%"
                height="600px"
                controls={true}
              />
            </Box1_sub1>

            <Box1_sub2>
              <Box1_sub2_sub1>
                <Text_Title> [놓치면 안될 하반기 IT이슈 Best 5] </Text_Title>
                <Like img src={like} />
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
            <AlwaysScrollSection>
              <Col>
                <FirstVideo>
                  <img style={{ width: "90%" }} src={video1} />
                  <Videotext>
                    {" "}
                    IT시장의 트렌드 분석{" "}
                  </Videotext>
                </FirstVideo>
                <Video>
                  <img style={{ width: "90%" }} src={video2} />
                  <Videotext>
                    {" "}
                    하루만에 웹 사이트 만들기[완결판]{" "}
                  </Videotext>
                </Video>
                <Video>
                  <img style={{ width: "90%" }} src={video3} />
                  <Videotext>
                    {" "}
                    [Kids] 과학의 날 축하 영상{" "}
                  </Videotext>
                </Video>
                <Video>
                  <img style={{ width: "90%" }} src={video4} />
                  <Videotext>
                    {" "}
                    [제작부터 심사까지]하루만에 이모티콘 만들기{" "}
                  </Videotext>
                </Video>
              </Col>
            </AlwaysScrollSection>
          </Box2>
        </Wrapper4>
        <Wrapper_bottom> 
        <Wrapper_left>
        <Wrapper5>
          <Box3>
            <Col>
              <TitleBox>
                <Title> packages </Title>
              </TitleBox>
              <Division> </Division>
              <Download img src={PackageDownload} />
              <TitleBox>
                <Title> Code </Title>
              </TitleBox>
              <Code img src={PackageCode} />
            </Col>
          </Box3>
        </Wrapper5>
        <Wrapper6>
          <TitleBox>
            <Title> Q&A </Title>
          </TitleBox> 

          <MyProfile img src={myProfile} />
          <Col>
            <Comment icon={User1} name="Kick it" text="I Don't UNDERSTAND" />
            <Row>
              <Arrow img src={arrow} />
              <Comment
                icon={User2}
                name="BG Kim(Business Girl)"
                text="Tell me in detail what you don't understand."
              />
            </Row>

            <Comment
              icon={User3}
              name="FFFFFF"
              text="I can't compile the development program."
            />
            <Row>
              <Arrow img src={arrow} />
              <Comment
                icon={User2}
                name="BG Kim(Business Girl)"
                text="Make sure the environment is properly set up."
              />
            </Row>

            <Comment
              icon={User4}
              name="KittyBoy"
              text="The video keeps stopping."
            />
            <Row>
              <Arrow img src={arrow} />
              <Comment
                icon={User2}
                name="BG Kim(Business Girl)"
                text="Check the Internet environment."
              />
            </Row>
          </Col>
        </Wrapper6>

        <Wrapper7>
          <TitleBox>
            <Title> Comment </Title>
          </TitleBox>

          <MyProfile img src={myProfile} />
          <Col>
            <Comment icon={User5} name="yaong" text="gooooooooood!!!!!!!" />
            <CommentRow>
              <img style={{ height: "100%" }} src={up} />
              <Text_Comment> 3K </Text_Comment>
              <img style={{ height: "100%" }} src={down} />
              <Text_Comment> REPLY </Text_Comment>
            </CommentRow>
            <Comment
              icon={User1}
              name="kick it"
              text="You teach better than my college professor.."
            />
            <CommentRow>
              <img style={{ height: "100%" }} src={up} />
              <Text_Comment> 1K </Text_Comment>
              <img style={{ height: "100%" }} src={down} />
              <Text_Comment> REPLY </Text_Comment>
            </CommentRow>
            <Comment icon={User2} name="FFFFFF" text="Wow amazing!!." />
            <CommentRow>
              <img style={{ height: "100%" }} src={up} />
              <Text_Comment> 12 </Text_Comment>
              <img style={{ height: "100%" }} src={down} />
              <Text_Comment> REPLY </Text_Comment>
            </CommentRow>
          </Col>
        </Wrapper7>
        </Wrapper_left> 
        <Wrapper_right> 
          <Box4>
            <PkAds img src={PackageAds} />
          </Box4>
          <Wrapper6_right> 
            <Text_relatedVideos> Related Projects </Text_relatedVideos>
            <ProjectBox> 
              <Profile img src={Project1}/>
              <ProjectText> Java Study recruitment. </ProjectText>
            </ProjectBox>
            <ProjectBox> 
              <Profile img src={Project2}/>
              <ProjectText> 2023 Hackathon Participants Recruitment </ProjectText>
            </ProjectBox>
            <ProjectBox> 
              <Profile img src={Project3}/>
              <ProjectText> Computer Beginner Learning </ProjectText>
            </ProjectBox>
            <ProjectBox> 
              <Profile img src={Project4}/>
              <ProjectText> C language basic study </ProjectText>
            </ProjectBox>
            <ProjectBox> 
              <Profile img src={Project5}/>
              <ProjectText> Simple game development recruitment </ProjectText>
            </ProjectBox>
            <ProjectBox> 
              <Profile img src={Project6}/>
              <ProjectText> A study with a 20-year experience as a mentor. </ProjectText>
            </ProjectBox>
          </Wrapper6_right>
          <Wrapper7_right> 
          <Text_relatedVideos> Information </Text_relatedVideos>
          <InforBox>
            <Infor img src={information1}/>
            <InforText_Blue> IT'S </InforText_Blue>
            <InforText> Mail Address</InforText>
          </InforBox>
          <InforBox>
            <Infor img src={information2}/>
            <InforText_Blue> IT'S </InforText_Blue>
            <InforText> Youtube</InforText>
          </InforBox>
          <InforBox>
            <Infor img src={information3}/>
            <InforText_Blue> IT'S </InforText_Blue>
            <InforText> Facebook</InforText>
          </InforBox>
          <InforBox>
            <Infor img src={information4}/>
            <InforText_Blue> IT'S </InforText_Blue>
            <InforText> Instagram</InforText>
          </InforBox>
          <InforBox>
            <Infor img src={information5}/>
            <InforText_Blue> IT'S </InforText_Blue>
            <InforText> Kakaotalk</InforText>
          </InforBox>

          </Wrapper7_right>

        </Wrapper_right>
        </Wrapper_bottom>
      </Background>
    </>
  );
}
export default ViewerPage;
