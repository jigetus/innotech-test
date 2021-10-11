import React from "react";
import { useState, useEffect } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
const Screen1 = () => {
  const [amount, setAmount] = useState(20);
  const [offset, setOffset] = useState(0);
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const handleOffset = (direction) => {
    switch (direction) {
      case "forward":
        if (page < pages) {
          setPage(page + 1);
          setOffset(offset + amount);
        }
        break;
      case "backward":
        if (page > 1) {
          setPage(page - 1);
          setOffset(offset - amount);
        }
        break;

      default:
        return false;
    }
    // setOffset(offset + amount);
  };
  const handleAmount = (value) => {
    setAmount(value);
    setOffset(0);
    setPage(1);
  };
  const max_heroes = 61;
  const pages = Math.ceil(max_heroes / amount);
  useEffect(() => {
    fetch(
      `https://www.breakingbadapi.com/api/characters?limit=${amount}&offset=${offset}`
    )
      .then((res) => res.json())
      .then((ar) => {
        setHeroes(ar);
      });
  }, [amount, offset, page]);
  useEffect(() => {
    fetch(
      `https://www.breakingbadapi.com/api/characters?limit=${amount}&offset=${offset}`
    )
      .then((res) => res.json())
      .then((ar) => {
        setHeroes(ar);
      });
  }, []);
  return (
    <div>
      <h1>Search component</h1>
      <Table heroes={heroes} />
      <Pagination
        amount={amount}
        setAmount={setAmount}
        handleOffset={handleOffset}
        offset={offset}
        setOffset={setOffset}
        handleAmount={handleAmount}
      />
    </div>
  );
};

export default Screen1;
