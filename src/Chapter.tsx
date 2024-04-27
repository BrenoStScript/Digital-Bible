import { useState } from "react";

function Chapter(props: any) {
  const [open, setOpen] = useState(false);

  let chapters = [];
  let i = 1;
  while (i <= props.chapters) {
    chapters.push(i);
    i++;
  }

  return (
    <div className="flex">
      <h1 className=" text-2xl mr-2">Capítulo:</h1>
      <div className="h-11">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className=" p-1 border-4 text-xl w-16 "
        >
          {props.chapter}
        </button>
        {open && (
          <div className=" h-24 bg-gray-500 overflow-y-scroll w-16">
            {chapters.map((element) => {
              return (
                <button
                  className=" w-10 hover:bg-gray-400"
                  onClick={() => props.function(element)}
                  key={element}
                >
                  {element}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Chapter;
