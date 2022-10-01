import React from "react";
import {
  Container,
  DetailButton,
  DetailButtonText,
  DetailsContainer,
  DetailSubtitle,
  DetailTitle,
  DetailTitleSpan,
  EventContainer,
  ImgContainer,
} from "./style";

import Image from "../../assests/event-image.svg";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <Container>
      <EventContainer>
        <ImgContainer>
          <img src={Image} alt="event" />
        </ImgContainer>
      </EventContainer>
      <DetailsContainer>
        <DetailTitle>
          Imagine if <br />
          <DetailTitleSpan>Snapchat</DetailTitleSpan>
          <br />
          had events.
        </DetailTitle>
        <DetailSubtitle>
          Easily host and share events with your friends
          <br /> across any social media.
        </DetailSubtitle>
        <DetailButton>
          <DetailButtonText>
            <Link to="/create">Create my event</Link>
          </DetailButtonText>
        </DetailButton>
      </DetailsContainer>
    </Container>
  );
}
