"use client";

import Image from "next/image";
import React from "react";
import "../landingPage.css";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-8">
        <CardItem
          translateZ="100"
          className="w-full mt-4"
        >
          <Image
            src="/topcloud.png"
            height="100"
            width="100"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
