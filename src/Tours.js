import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";
const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      let result = await axios.get(url);
      let resp = result.data;
      setTours(resp);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Spinner
          thickness="4px"
          speed="0.5s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <Heading mt="100">no tours left</Heading>
        <Button
          mt="100"
          colorScheme="pink"
          variant="solid"
          onClick={() => fetchData()}
        >
          Refresh
        </Button>
      </>
    );
  }
  return (
    <>
      <Tour tours={tours} removeTour={removeTour} />
    </>
  );
};

export default Tours;
