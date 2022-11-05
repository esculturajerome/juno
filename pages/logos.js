import Image from "next/image";

const logos = () => {
  return (
    <div className="grid place-items-center gap-4">
      <Image
        src="/juno_logo.png"
        width="550"
        height="180"
        alt="Juno Logo"
        className="rounded-t-md"
      />
      <Image
        src="/juno_transparent.png"
        width="550"
        height="180"
        alt="Juno Logo"
        className="rounded-t-md"
      />
      <Image
        src="/juno-logo.png"
        width="600"
        height="300"
        alt="Juno Logo"
        className="rounded-t-md"
      />
    </div>
  );
};

export default logos;
