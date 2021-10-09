import { Heading } from "@chakra-ui/layout";
import React from "react";
import Lists from "./Lists";

const Tour = ({ tours = [], removeTour = [] }) => {
  return (
    <>
      <Heading mt="75" mb="2">
        Our Tours
      </Heading>
      <div className="underline"></div>
      {tours.map((item) => (
        <Lists key={item?.id} {...item} removeTour={removeTour} />
      ))}
    </>
  );
};

export default Tour;
