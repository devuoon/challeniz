import React from 'react';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import about from '../../assets/image/about.png';
import list from '../../assets/image/about_list.png';
import check from '../../assets/image/about_check.png';
import badge from '../../assets/image/about_badge.png';
import chat from '../../assets/image/about_chat.png';

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className="Title">
        <div className="TxtBox">
          <h1 className="H1Styled">
            당신의 습관을 위한 페이스메이커 <span>첼리니</span>
          </h1>
          <br />
          <p>
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknow
          </p>
        </div>
        <img src={about} alt="about" className="about" />
        <p className="Btn">가입하고 챌린지 참여하기</p>
      </div>
      <Wrapper>
        <div className="TitleList">
          <div className="ListTxt">
            <h1 className="H1Styled2">
              좋은 습관 만들기 위한 챌린지에 <span>참여해보세요</span>
            </h1>
            <br />
            <p>
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknow
            </p>
          </div>
          <img src={list} alt="list" className="list" />
        </div>
        <div className="TitleCheck">
          {/* 인증사진을 목업스타일이나 인증모음샷으로 수정하는거 어떤지 물어보기 */}
          <img src={check} alt="check" className="check" />
          <div className="CheckTxt">
            <h1 className="H1Styled2">
              다른사람의 인증샷을 보고 <span>응원해보세요!</span>
            </h1>
            <br />
            <p>
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknow
            </p>
          </div>
        </div>
        <div className="TitleCheck1">
          <div className="BadgeTxt">
            <h1 className="H1Styled2">
              다양한 챌린지에 참여하여 배지를 <span>획득해보세요</span>
            </h1>
            <br />
            <p>
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknow
            </p>
          </div>
          <img src={badge} alt="badge" className="badge" />
        </div>
      </Wrapper>
      <div className="TitleCheck2">
        <img src={chat} alt="chat" className="chat" />
        <div className="CheckTxt">
          <h1 className="H1Styled2">
            언제 어디서든, <span>1:1 상담 가능합니다.</span>
          </h1>
          <br />
          <p>
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknow
          </p>
        </div>
      </div>

      <div className="Title2">
        <div className="TitleBox">
          <h1>챌린지 이용방법</h1>
        </div>
        <div className="HowChall">
          <div className="How1">
            <span className="Num">01</span>
            <div className="HowTxt">
          
              <p>참여하고싶은 챌린지를 찾아보세요</p>
            </div>
          </div>
          <div className="How1">
            <span className="Num">01</span>
            <div className="HowTxt">
          
              <p>참여하고싶은 챌린지를 찾아보세요</p>
            </div>
          </div> <div className="How1">
            <span className="Num">01</span>
            <div className="HowTxt">
          
              <p>참여하고싶은 챌린지를 찾아보세요</p>
            </div>
          </div> <div className="How1">
            <span className="Num">01</span>
            <div className="HowTxt">
          
              <p>참여하고싶은 챌린지를 찾아보세요</p>
            </div>
          </div> <div className="How1">
            <span className="Num">01</span>
            <div className="HowTxt">
          
              <p>참여하고싶은 챌린지를 찾아보세요</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
