"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { FiSearch, FiX } from "react-icons/fi"; // Importing search icon and x icon from react-icons library

interface Coin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // State to store the entered search term
  const [suggestions, setSuggestions] = useState<Coin[]>([]); // State to store the suggestions

  const fetchSuggestions = useCallback(async () => {
    console.log("Fetching suggestions...");
    if (searchTerm.trim() !== "") {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const coins: Coin[] = data.coins; // Extracting coins array from the response
        console.log("Fetched coins:", coins);
        setSuggestions(coins);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to clear search term
  const clearSearchTerm = () => {
    setSearchTerm("");
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-100 rounded-lg p-2 w-[220px]">
        <div className="mr-2">
          <FiSearch className="text-gray-500" />
        </div>
        <input
          type="text"
          className="w-full bg-transparent outline-none placeholder-gray-400"
          placeholder="Search a crypto"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchTerm && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={clearSearchTerm}
            className="ml-2 focus:outline-none text-gray-500 hover:text-gray-700"
          >
            <FiX />
          </button>
        )}
      </div>
      {suggestions.length > 0 ? (
        <ul className="absolute z-50 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg overflow-y-auto w-full max-h-48">
          {suggestions.map((coin) => (
            <li
              key={coin.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200"
            >
              <Link href={`/${coin.api_symbol}`}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex justify-center items-center">
                    <Image
                      src={coin.thumb}
                      alt={coin.name}
                      width={32}
                      height={32}
                      style={{ width: "80%", height: "80%" }}
                      className="rounded-full"
                    />
                  </div>
                  <span className="whitespace-nowrap">{coin.name}</span>
                </div>
                <div className="text-end h-fit">
                  <span className="text-xs text-end text-gray-400">
                    /{coin.api_symbol}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        searchTerm.trim() !== "" && (
          <div className="absolute z-50 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg w-full h-fit">
            <p className="px-4 py-2 text-gray-500">No coin found</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;
