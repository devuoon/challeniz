// list_content.tsx
import React, { useState, useEffect } from 'react';
import * as S from './challenge_box_main.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import ListTab from '../list_tab/list_tab';
import moment from 'moment';
import HeartImg from '../../../assets/image/heart_red.png';
import EmptyHeartImg from '../../../assets/image/heart.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// 예시로 Challenge 타입을 정의
export interface Challenge {
  _id: string;
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
  mainImg: string;
}
interface modules {
  onClick: () => void;
}
export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges?: Challenge[];
}

const ChallengeBox: React.FC<ChallengeBoxProps> = ({
  selectedCategory,

  challenges,
}) => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [wishCount, setWishCount] = useState(808);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get('/challenges');
        const data = response.data;

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            _id: challenge._id,
            like: false,
            title: challenge.title,
            start_date: new Date(challenge.start_date).toLocaleDateString(),
            end_date: new Date(challenge.end_date).toLocaleDateString(),
            tag: challenge.tag,
            id: challenge._id,
            category: challenge.category,
          }));
          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const wishCountHandler = async (challengeId: string) => {
    const updatedChallengeList = challengeList.map((challenge) => {
      if (challenge.id === challengeId) {
        const newLikeValue = !challenge.like;
        try {
          if (newLikeValue) {
            apiInstance.patch(`/challenges/zzim/${challenge.id}`);
          } else {
            apiInstance.patch(`/challenges/zzim/${challenge.id}`);
          }
          console.log(newLikeValue);
        } catch (error) {
          console.error(`Error updating challenge like status:`, error);
        }
        return {
          ...challenge,
          like: newLikeValue,
        };
      }
      return challenge;
    });

    setChallengeList(updatedChallengeList);
    setWishCount((prevCount) => prevCount + 1);
  };
  return (
    <S.ListWrap>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        className="mySwiper"
      >
        <S.ContentsWrap>
          {challenges &&
            challenges.map((challenge, index) => (
              <S.ContentWrap>
                <S.ImgStyled>
                  <img src={challenge.mainImg} alt="Challenge" />
                  {/* <S.StyledHeartButton
                      src={challenge.like ? HeartImg : EmptyHeartImg}
                      alt={challenge.like ? 'Liked' : 'Not Liked'}
                      onClick={() => wishCountHandler(challenge.id)}
                    /> */}
                </S.ImgStyled>
                <S.TabWrap>
                  {challenge.tag.map((tag, index) => (
                    <S.TabStyled key={index}>{tag}</S.TabStyled>
                  ))}
                </S.TabWrap>
                <Link to={`${ROUTE.DETAILPAGE.link}/${challenge._id}`}>
                  <S.H3Styled>{challenge.title}</S.H3Styled>
                </Link>
                <S.H4Styled>
                  <BsCalendarRange />
                  {moment(challenge.start_date).format(
                    'YYYY년 MM월 DD일'
                  )} ~ {moment(challenge.end_date).format('YYYY년 MM월 DD일')}
                </S.H4Styled>
              </S.ContentWrap>
            ))}
        </S.ContentsWrap>
      </Swiper>
    </S.ListWrap>
  );
};

export default ChallengeBox;
