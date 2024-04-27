import useFetch from "./useFetch";
function Button(props: any) {
  const { data, loading, fetchData } = useFetch(
    "https://www.abibliadigital.com.br/api/verses/" +
      props.version +
      "/" +
      props.book +
      "/" +
      props.chapter
  );

  const newFetch = () => {
    fetchData(
      "https://www.abibliadigital.com.br/api/verses/" +
        props.version +
        "/" +
        props.book +
        "/" +
        props.chapter
    );
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (data !== null) {
    let verses = data.verses;

    return (
      <div className="m-3 p-2" >
        <button
          className=" mt-6 w-20 h-14 p-1 border-4 hover:bg-slate-500"
          onClick={newFetch}
        >
          {props.name}
        </button>
        {verses.map((element: any) => {
          return (
            <div key={crypto.randomUUID()}>
              <p>
                {element.number} - {element.text}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <button
      className=" m-1 h-14 w-20 p-1 border-4 hover:bg-slate-500"
      onClick={newFetch}
    >
      {props.name}
    </button>
  );
}

export default Button;
