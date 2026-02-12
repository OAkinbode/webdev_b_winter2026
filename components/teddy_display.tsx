type TeddiesDisplayProps = {
  teddies: string[];
};

export default function TeddyDisplay({ teddies }: TeddiesDisplayProps) {
  const mapOverNames = (array: string[]) => {
    const newArray: string[] = array.map((name) => name.toLowerCase());
    return newArray;
  };

  const announceName = (name: string) => {
    alert(`Welcome ${name.toLowerCase()}`);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-1 py-2 justify-start items-start w-full">
        {mapOverNames(teddies).map((name, i) => (
          <p key={i} onClick={() => announceName(name)}>
            {name}
          </p>
        ))}
      </div>
    </div>
  );
}
