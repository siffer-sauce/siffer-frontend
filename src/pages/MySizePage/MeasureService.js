import React from "react";
import styled from "styled-components";
import CircularButton from "../../components/CircularButton";
import SmallBanner from "../../components/SmallBanner";
import HorizantalCard from "./HorizontalCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 100vh;
    background-image: url("images/MeasureService/5.png");
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .banner__item {
    height: 50%;
    box-sizing: border-box;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
  }
  .title {
    margin-top: 80px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .subTitle {
  }
  .cards {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    overflow-wrap: nowrap;
    white-space: nowrap;
    height: 200px;
  }
  p {
    margin-top: 10px;
    font-weight: 300;
    padding-right: 20px;
  }
  .imgBox {
    padding-right: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
  }
  .banners {
    display: flex;
    flex-direction: column;
    padding-right: 20px;

    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

const MeasureService = () => {
  return (
    <Container>
      <div className="banner">
        <div className="banner__item"></div>
        <div className="banner__item">
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>
            신체치수 측정 서비스
          </span>
          <span style={{ fontWeight: "bold", fontSize: "28px" }}>
            Body size
          </span>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "28px",
              marginBottom: "24px",
            }}
          >
            Measurement service
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            원하시는 장소로 달려갑니다.
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            단 한번의 측정으로 사이즈 고민없는
          </span>
          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            온라인 쇼핑을 시작하세요.
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            bottom: "32px",
          }}
        >
          <CircularButton width={320} white={true}>
            지금 바로 예약
          </CircularButton>
        </div>
      </div>
      <div className="content">
        <span className="title">이런 분께 추천해요.</span>
        <div className="cards">
          <HorizantalCard
            title="신체부위에 고민있는 분"
            tags="# 하체통통 # 복부비만"
            imageUrl="images/MeasureService/2.png"
          />
          <HorizantalCard
            title="셀프측정이 귀찮은 분"
            tags="# 귀차니즘"
            imageUrl="images/MeasureService/3.png"
          />
        </div>
        <span className="title">서비스 이용방법</span>
        <span className="subTitle">해당 서비스는 무료입니다.</span>
        <p>
          ※ 예약 당일 무단불참 예방을 위해 보증금 만 원을 선입금하셔야 하며,
          현재 부산지역만 지원됩니다.
        </p>
        <div className="banners">
          <SmallBanner icon="finger" title="하단의 '예약' 버튼 클릭 !" />
          <SmallBanner
            icon="congratulate"
            title="예약 후 24시간 내 예약확정 알림 받기"
          />

          <SmallBanner icon="gift" title="원하는 장소에서 신체치수 측정 받기" />

          <SmallBanner
            icon="ruler"
            title="서비스 이용 후 씨퍼 굿즈 선물 받기"
          />
        </div>
        <span className="title">씨퍼 랜덤 굿즈 기프트</span>
        <span className="subTitle">해당 서비스 이용 고객님께 씨퍼만의</span>
        <span className="subTitle">유니크한 굿즈를 선물해 드립니다.</span>
        <div className="imgBox">
          <img src="images/MeasureService/4.png" />
        </div>
      </div>
    </Container>
  );
};

export default MeasureService;