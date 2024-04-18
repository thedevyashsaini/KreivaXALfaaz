"use client";

import Image from "next/image";
import React from "react";
import "../landingPage.css";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export default function ThreeDCardDemo({imgSrc}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative w-auto sm:w-[30rem] h-auto p-6">
        <CardItem
          translateZ="100"
          className="imgBack w-full mt-4"
        >
          <Image
            src={imgSrc}
            height={200}
            width={200}
            className="h-60 w-full object-contain group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}