import React from "react";
import {
  Container,
  EventDetails,
  EventImg,
  EventInfo,
  EventInfoText,
  EventInfoText1,
  EventInfoText2,
  EventSubtitle,
  EventTitle,
} from "./style";
import Image from "../../assests/event-cake.svg";
import Date from "../../assests/date-icon.svg";
import Location from "../../assests/pin-icon.svg";
import Arrow from "../../assests/arrow.svg";

export default function index() {
  return (
    <Container>
      <EventDetails>
        <div>
          <EventTitle>Birthday Bash</EventTitle>
          <EventSubtitle>Hosted by Elysia</EventSubtitle>
          <EventInfo>
            <img src={Date} alt="" className="icon" />
            <EventInfoText>
              <EventInfoText1>18 August 6:00PM</EventInfoText1>
              <EventInfoText2>
                to <span>19 August 1:00PM</span> UTC +10
              </EventInfoText2>
            </EventInfoText>
            <img src={Arrow} alt="" className="arrow" />
          </EventInfo>
          <EventInfo>
            <img src={Location} alt="" className="icon" />
            <EventInfoText>
              <EventInfoText1>Street name</EventInfoText1>
              <EventInfoText2>Suburb, State, Postcode</EventInfoText2>
            </EventInfoText>
            <img src={Arrow} alt="" className="arrow" />
          </EventInfo>
        </div>
      </EventDetails>
      <EventImg>
        <img src={Image} alt="cake" />
      </EventImg>
    </Container>
  );
}
