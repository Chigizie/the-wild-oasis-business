import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" alt="Logo" width="100" height="100" />
      <span className="font-semibold">The Wild Oasis</span>
    </Link>
  );
}

export default Logo;
