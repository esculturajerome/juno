export default function Button({ text }) {
  return (
    <>
      <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainColor hover:bg-mainColor-dark font-NatsRegular lg:text-2xl">
        {text}
      </button>
    </>
  );
}
