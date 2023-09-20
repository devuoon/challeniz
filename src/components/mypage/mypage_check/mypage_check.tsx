import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiInstance } from '../../../utils/api';
import ModalBasic from '../../common/modal/modal';
import FullCalendar from '@fullcalendar/react';
import * as S from './mypage_check.style';

interface MypageCheckProps {}

interface Challenge {
  description: string;
  img: string;
  userName: string;
  postDate: string;
}

const MypageCheck: React.FC<MypageCheckProps> = () => {


  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  // challengeList 상태를 이곳으로 이동
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 인증 데이터를 가져오는 요청
        const response = await apiInstance.get(`/posts/challenges/${id}`);
        const data = response.data;

        console.log('데이터', data);
        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            userName: challenge.user.name,
            img: challenge.img,
            description: challenge.description,
            title: challenge.title,
            postDate: challenge.post_date,
          }));
          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };
    fetchData();
  }, [id]);
  const handleChallengeClick = (challenge: Challenge) => {
    const postDate = new Date(challenge.postDate);
    // 년, 월, 일을 추출하여 포맷팅
    const formattedDate = `${postDate.getFullYear()}년 ${
      postDate.getMonth() + 1
    }월 ${postDate.getDate()}일`;
    // challengeData에 포맷팅된 게시 날짜 설정
    challenge.postDate = formattedDate;
    setChallengeData(challenge);
    showModal();
  };

  return (
    <>
      <S.AuthWrap>
        <S.AuthGrid>
          {challengeList.map((challenge, index) => (
            <S.ImgWrap
              key={index}
              onClick={() => handleChallengeClick(challenge)}
            >
              <img src={challenge.img} alt="Challenge Image" />
            </S.ImgWrap>
          ))}
          {modalOpen && challengeData && (
            <ModalBasic
              setModalOpen={setModalOpen}
              challengeData={challengeData}
              postDate={challengeData.postDate}
              userName={challengeData.userName}
            />
          )}
        </S.AuthGrid>
      </S.AuthWrap>
    </>
  );
};

export default MypageCheck;
