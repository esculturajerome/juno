export default function Button({ text }) {
  return (
    <>
      <button className="bg-mainColor hover:bg-mainColor-dark ease-in-out duration-200 py-3 px-4 rounded-xl text-white">
        {text}
      </button>
    </>
  );
}
