import styled from 'styled-components';
import HeartButton from '../heart/heart';
import { AiOutlineHeart } from 'react-icons/ai';

export const ListWrap = styled.div`
  padding: 10px 0 40px;
`;

export const CategoryTab = styled.div`
  display: flex;
  margin-bottom: 20px;

  span {
    cursor: pointer;
    margin-right: 10px;
    &.active {
      font-weight: bold;
    }
  }
`;

export const SearchResult = styled.div`
  margin-top: 100px;
`;

export const ContentWrap = styled.div`
  text-align: left;
`;

export const ContentsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }
`;

export const ImgStyled = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-color: #d9d9d9;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #eeeeee;

  @media (max-width: 420px) {
    height: 185px;
  }

  &.thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImgWrap = styled.div``;

export const StyledHeartButton = styled.img`
  width: 30px !important;
  height: 30px !important;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  cursor: pointer;
`;

export const TabWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  @media (max-width: 420px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const TabStyled = styled.a`
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 4px 15px;
  font-size: 13px;
  margin-right: 5px;

  @media (max-width: 420px) {
    padding: 4px 11px;
    font-size: 11px;
    margin-right: 3px;
  }
`;

export const H3Styled = styled.h3`
  font-size: 24px;
  padding-bottom: 10px;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  letter-spacing: -0.8px;

  @media (max-width: 420px) {
    max-width: 150px;
    font-size: 18px;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const H4Styled = styled.h4`
  font-size: 13px;
  font-weight: 400;
  color: #686868;
  display: flex;
  align-items: center;

  @media (max-width: 420px) {
    font-size: 11px;
  }

  svg {
    width: 1.2em;
    height: 1.2em;
    padding-right: 5px;
  }
`;

export const Status = styled.p`
  border-radius: 15px;
  padding: 8px 14px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;

  @media (max-width: 420px) {
    font-size: 11px;
    padding: 5px 10px;
  }

  &.black {
    background-color: #000;
  }
  &.blue {
    background-color: #339af0;
  }
  &.yellow {
    background-color: #ff6224;
  }
`;

export const InfoWrap = styled.div`
  position: absolute;
  top: 20px;
  left: 17px;
  display: flex;
`;

export const Users = styled.p`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 3px 7px;
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-right: 8px;

  @media (max-width: 420px) {
    margin-bottom: 10px;
  }

  svg {
    padding-right: 5px;
    width: 1.5em;
    height: 1.5em;
  }
`;
