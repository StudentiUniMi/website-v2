import { NextSeo } from "next-seo";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import { loadMessages } from "@/utils/i18n";

const DegreePage = () => {
  const t = useTranslations("Degree");

  return (
    <>
      <NextSeo
        canonical={"https://studentiunimi.it/{}"}
        description={""}
        openGraph={{
          url: "https://studentiunimi.it/{}",
          title: "",
          description: "",
          site_name: "Network StudentiUniMi",
          type: "website",
          locale: "",
          images: [
            {
              url: "",
              type: "image/png",
            },
          ],
        }}
        title={""}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Corso di laurea {t("title")}</h1>
        </div>
      </section>
    </>
  );
};

export default DegreePage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const messages = await loadMessages(context.locale);

  return {
    props: {
      messages,
    },
  };
};
