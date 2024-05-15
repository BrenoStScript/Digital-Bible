import Books from "./Books";
import Versions from "./Versions";
import Button from "./Button";
import { useState } from "react";

function Bible() {
  const [version, setVersion] = useState("acf");
  const [book, setBook] = useState("gn");
  const [chapter, setChapter] = useState(1);

  return (
    <div className=" p-4 mb-16 mt-16 bg-gray-600 w-2/3 min-h-96 h-3/4 flex flex-col items-center justify-center">
      <h1 className=" text-2xl sm:text-4xl font-semibold ">Bíblia Digital</h1>
      <div className="flex flex-col items-center mt-3">
        <Versions version={version} function={setVersion} />
        <Books
          book={book}
          function={setBook}
          chapterFunction={setChapter}
          chapter={chapter}
        />
      </div>
      <Button version={version} book={book} chapter={chapter} name={"ABRIR"} />
    </div>
  );
}

export default Bible;
