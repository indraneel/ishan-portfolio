function Header({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-24 w-96 flex-row border-4 border-slate-800">
      <div className="align-center items-center self-center border-r-2 p-2 text-center text-2xl font-bold">
        Ishan <br /> Thakore
      </div>
      <div className="align-center flex-1 items-center self-center text-center text-lg">
        {children}
      </div>
    </div>
  );
}

export default Header;
