import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full flex gap-3 items-center justify-center py-6">
      <Link href={router.pathname} locale="it">
        Change to IT locale
      </Link>
      <Link href={router.pathname} locale="en">
        Change to EN locale
      </Link>
    </footer>
  );
};

export default Footer;
