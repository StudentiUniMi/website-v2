import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const t = useTranslations("Footer");

  return (
    <footer className="w-full flex gap-3 items-center justify-center py-6 bg-default-100">
      Footer test
    </footer>
  );
};

export default Footer;
