function Versions(props: any) {
  let versions = ["acf", "apee", "bbe", "kjv", "nvi", "ra", "rvr"];

  //apee = francês bbe e kjv = inglês rvr = espanhol

  return (
    <div className=" mt-6 flex flex-col justify-center items-center">
       <h1 className="text-2xl mr-2">Versão</h1>
        <div className="p-2 border-4 grid grid-cols-7 justify-center w-96 gap-2 text-justify my-2">
        {versions.map((element) => {
          if (element === props.version) {
            return (
              <div
                className="border-2 border-solid p-2 text-xs w-12 text-center cursor-pointer bg-white text-cyan-950"
                key={element}
                onClick={() => props.function(element)}
              >
                {element.toUpperCase()}
              </div>
            );
          }

          return (
            <div
              className="border-2 border-solid p-2 text-xs w-12 text-center cursor-pointer hover:bg-white hover:text-cyan-950"
              key={element}
              onClick={() => props.function(element)}
            >
              {element.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Versions;
