const Card = ({ keyProp }: { keyProp: number }) => {
  return (
    <div
      className="w-full h-full min-h-[180px] min-w-[180px] bg-[#270C1C] rounded-md p-5 shadow-good"
      key={keyProp}
    >
      <h1 className="font-good">Title</h1>
    </div>
  );
};

export default Card;
