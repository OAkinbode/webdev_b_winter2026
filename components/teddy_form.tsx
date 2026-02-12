type TeddiesFormProps = {
  teddies: string[];
  teddy: string;
  setTeddy: (teddy: string) => void;
  setTeddies: (teddies: string[]) => void;
  setUser: (user: string) => void;
};

export default function TeddyForm({
  teddies,
  teddy,
  setTeddy,
  setTeddies,
  setUser,
}: TeddiesFormProps) {
  const addNames = (e: React.FormEvent) => {
    e.preventDefault();
    setTeddies([...teddies, teddy]);
    setUser(teddy);
    setTeddy("");
  };

  const changeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeddy(e.target.value);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form className="flex flex-col gap-2" onSubmit={addNames}>
        {/* <label>Add a teddy bear name</label> */}
        <input
          type="text"
          name="Teddy name"
          value={teddy}
          onChange={changeValues}
          className="border border-b-cyan-800"
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
