import React, { useState } from 'react';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import Wrapper from '../../components/common/wrapper/wrapper';
import FormEdit from '../../components/form/form_edit/form_edit';
import * as S from './edit_page.style';

import { apiInstance } from '../../utils/api';

export interface ChallengeFormDataType {
  title: string;
  cate: string;
  description: string;
  start_date: string;
  end_date: string;
  recru_open_date: string;
  recru_end_date: string;
  tag: string[];
  mainImg: string;
}

const NewPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [topic, setTopic] = useState<string>('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 이미지 선택
  const handleIsImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file); // 선택된 파일 상태 업데이트
    if (file) {
      setIsImageSelected(true);
    } else {
      setIsImageSelected(false);
    }
    console.log('이미지', file);
  };

  const [data, setData] = useState<ChallengeFormDataType>({
    title: '',
    cate: '',
    description: '',
    start_date: '',
    end_date: '',
    recru_open_date: '',
    recru_end_date: '',
    tag: [],
    mainImg: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 챌린지 개설 버튼 클릭 시 실행
  const handleChallengeSubmit = () => {
    console.log('데이터2', data);
    const {
      title,
      description,
      start_date,
      end_date,
      cate: category,
      recru_open_date,
      recru_end_date,
      tag,
      mainImg,
    } = data;
    console.log('뉴패이지', title);

    if (title.trim() === '' || title == null) {
      alert('주제를 입력하세요.');
    } else if (!selectedFile) {
      alert('이미지를 선택해주세요.');
    } else if (!isAgreed) {
      alert('챌린지를 개설하려면 약관에 동의해야 합니다.');
      return;
    } else {
      // 챌린지 생성 API 호출
      apiInstance
        .post('/challenges/create', {
          title,
          description,
          start_date,
          end_date,
          category,
          recru_open_date,
          recru_end_date,
          tag,
          mainImg,
        })
        .then((response) => {
          if (response.status === 201) {
            alert('챌린지가 성공적으로 개설되었습니다!');
          }
        })
        .catch((error) => {
          console.log(error.response);
          alert('챌린지 개설에 실패했습니다.');
        });
    }
  };

  return (
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
          <FormEdit
            onInputChange={handleInputChange}
            setTopic={setTopic}
            topic={topic}
            isImageSelected={isImageSelected}
            handleIsImageSelected={handleIsImageSelected}
            handleChallengeSubmit={handleChallengeSubmit}
            data={data}
            setData={setData}
          />
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default NewPage;
