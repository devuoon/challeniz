import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './complete_info.style';
import { apiInstance } from '../../../utils/api';
import ModalBasic from '../../comment/comment_write/comment_write';
import moment from 'moment';

interface Challenge {
  description: string;
  img: string;
  userName: string;
  postDate: string;
}

interface Challenge {
  mainImg: string;
  title: string;
  start_date: string;
  end_date: string;
  id: string;
}

const CompleteInfo = () => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [star, setStar] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null
  );
  const { id } = useParams();
  const [challengeData, setChallengeData] = useState<Challenge[]>([]);

  const handleChallengeClick = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    setModalOpen(true);
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const challengeResponse = await apiInstance.get('/users/mypageChall');
        if (challengeResponse.status === 200) {
          const challenges: Challenge[] =
            challengeResponse.data.finishChallenge.map((challenge: any) => ({
              ...challenge,
              title: challenge.title,
              mainImg: challenge.mainImg,
              start_date: new Date(challenge.start_date).toLocaleDateString(),
              end_date: new Date(challenge.end_date).toLocaleDateString(),
              id: challenge._id,
            }));
          setChallengeData(challenges);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUserData();
  }, [id]);

  const handleChallengeSubmit = async (star: number, description: string) => {
    try {
      const score = star;
      const response = await apiInstance.post('/review', {
        challengeId: id,
        star: score,
        content: description,
      });
      const data = response.data;

      if (response) {
        alert('리뷰가 성공적으로 등록되었습니다!');
      } else {
        console.error('리뷰 전송 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  return (
    <S.StatusWrap>
      {challengeData.map((challenge, index) => (
        <S.InfoWrap key={index}>
          <S.ImgWrap>
            <img src={challenge.mainImg} alt="Challenge" />
          </S.ImgWrap>
          <S.InfoFlex>
            <div>
              <h3>{challenge.title}</h3>
              <h4>
                {moment(challenge.start_date).format('YYYY년 MM월 DD일')} ~{' '}
                {moment(challenge.end_date).format('YYYY년 MM월 DD일')}
              </h4>
            </div>
          </S.InfoFlex>
          <S.ButtonAuth
            onClick={() => handleChallengeClick(selectedChallenge!)}
          >
            후기 작성하기
          </S.ButtonAuth>
          {modalOpen && (
            <ModalBasic
              setModalOpen={setModalOpen}
              title={challenge.title}
              star={star}
              description={description}
              onSubmit={handleChallengeSubmit}
              id={challenge.id}
            />
          )}
        </S.InfoWrap>
      ))}
    </S.StatusWrap>
  );
};

export default CompleteInfo;
