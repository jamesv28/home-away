import Link from "next/link";
import { FaTent } from "react-icons/fa6";
import { Button } from "../ui/button";
const Logo = () => {
  return (
    <Button
      size="icon"
      variant="outline"
      className="bg-black flex flex-col justify-center items-center w-6 h-6"
    >
      <Link href="/" className=" text-white">
        <FaTent />
      </Link>
    </Button>
  );
};

export default Logo;
