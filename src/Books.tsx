import React, { useState } from "react";
import Chapter from "./Chapter";
function Books(props: any) {
  const [open, setOpen] = useState(false);

  let booksChapters = [
    {
      name: "gn",
      chapters: 50,
    },
    {
      name: "ex",
      chapters: 40,
    },
    {
      name: "lv",
      chapters: 27,
    },
    {
      name: "nm",
      chapters: 36,
    },
    {
      name: "dt",
      chapters: 34,
    },
    {
      name: "js",
      chapters: 24,
    },
    {
      name: "jz",
      chapters: 21,
    },
    {
      name: "rt",
      chapters: 4,
    },
    {
      name: "1sm",
      chapters: 31,
    },
    {
      name: "2sm",
      chapters: 24,
    },
    {
      name: "1rs",
      chapters: 22,
    },
    {
      name: "2rs",
      chapters: 25,
    },
    {
      name: "1cr",
      chapters: 29,
    },
    {
      name: "2cr",
      chapters: 36,
    },
    {
      name: "ed",
      chapters: 10,
    },
    {
      name: "ne",
      chapters: 13,
    },
    {
      name: "et",
      chapters: 10,
    },
    {
      name: "job",
      chapters: 42,
    },
    {
      name: "sl",
      chapters: 150,
    },
    {
      name: "pv",
      chapters: 31,
    },
    {
      name: "ec",
      chapters: 12,
    },
    {
      name: "ct",
      chapters: 8,
    },
    {
      name: "is",
      chapters: 66,
    },
    {
      name: "jr",
      chapters: 52,
    },
    {
      name: "lm",
      chapters: 5,
    },
    {
      name: "ez",
      chapters: 48,
    },
    {
      name: "dn",
      chapters: 12,
    },
    {
      name: "os",
      chapters: 14,
    },
    {
      name: "jl",
      chapters: 3,
    },
    {
      name: "am",
      chapters: 9,
    },
    {
      name: "ob",
      chapters: 1,
    },
    {
      name: "jn",
      chapters: 4,
    },
    {
      name: "mq",
      chapters: 7,
    },
    {
      name: "na",
      chapters: 3,
    },
    {
      name: "hc",
      chapters: 3,
    },
    {
      name: "sf",
      chapters: 3,
    },
    {
      name: "ag",
      chapters: 2,
    },
    {
      name: "zc",
      chapters: 14,
    },
    {
      name: "ml",
      chapters: 4,
    },
    {
      name: "mt",
      chapters: 28,
    },
    {
      name: "mc",
      chapters: 16,
    },
    {
      name: "lc",
      chapters: 24,
    },
    {
      name: "jo",
      chapters: 21,
    },
    {
      name: "at",
      chapters: 28,
    },
    {
      name: "rm",
      chapters: 16,
    },
    {
      name: "1co",
      chapters: 16,
    },
    {
      name: "2co",
      chapters: 13,
    },
    {
      name: "gl",
      chapters: 6,
    },
    {
      name: "ef",
      chapters: 6,
    },
    {
      name: "fp",
      chapters: 4,
    },
    {
      name: "cl",
      chapters: 4,
    },
    {
      name: "1ts",
      chapters: 5,
    },
    {
      name: "2ts",
      chapters: 3,
    },
    {
      name: "1tm",
      chapters: 6,
    },
    {
      name: "2tm",
      chapters: 4,
    },
    {
      name: "tt",
      chapters: 3,
    },
    {
      name: "fm",
      chapters: 1,
    },
    {
      name: "hb",
      chapters: 13,
    },
    {
      name: "tg",
      chapters: 5,
    },
    {
      name: "1pe",
      chapters: 5,
    },
    {
      name: "2pe",
      chapters: 3,
    },
    {
      name: "1jo",
      chapters: 5,
    },
    {
      name: "2jo",
      chapters: 1,
    },
    {
      name: "3jo",
      chapters: 1,
    },
    {
      name: "jd",
      chapters: 1,
    },
    {
      name: "ap",
      chapters: 22,
    },
  ];

  return (
    <div className=" z-10 flex m-4">
      <h1 className=" text-2xl mr-2">Livro:</h1>
      <div className=" h-11">
        <button
          className="w-24 p-1 border-4 mr-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          {props.book === "job" ? "JÓ" : props.book.toUpperCase()}
        </button>
        {open && (
          <div className=" bg-gray-500 overflow-y-scroll w-24 h-24 ">
            {booksChapters.map((element) => {
              return (
                <button
                  className=" w-16 hover:bg-gray-400 mx-1"
                  onClick={() => props.function(element.name)}
                  key={element.name}
                >
                  {element.name === "job" ? "JÓ" : element.name.toUpperCase()}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {booksChapters.map((element) => {
          return (
            element.name === props.book && (
              <div key={crypto.randomUUID()}>
                <Chapter
                  function={props.chapterFunction}
                  chapter={props.chapter}
                  chapters={element.chapters}
                />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Books;
