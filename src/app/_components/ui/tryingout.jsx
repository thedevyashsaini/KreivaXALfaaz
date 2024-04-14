"use client";

import Image from "next/image";
import React from "react";
import "../landingPage.css";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative w-auto sm:w-[30rem] h-auto p-6">
        <CardItem
          translateZ="100"
          className="imgBack w-full mt-4"
        >
          <img
            src="/099370123bdcf71e3a5cada2152fbab3.jpeg"
            className="h-60 w-full object-contain group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
