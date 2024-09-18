import { NextSeo } from "next-seo";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import {
  Admin,
  CourseDegree,
  Representative,
  VerboseDegree,
} from "@/types/models";
import backend from "@/services/backend";
import { loadMessages } from "@/utils/i18n";

interface Props {
  loadedDegree: VerboseDegree;
  courses: Array<CourseDegree>;
  admins: Array<Admin>;
  representatives: Array<Representative>;
  errors: {
    degree: boolean;
    courses: boolean;
    admins: boolean;
    representatives: boolean;
    informations: boolean;
  };
}

const DegreePage = (props: Props) => {
  const t = useTranslations("Degree");

  console.log("Loaded props on degree page: ", props);

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

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: retrieve all slugs
  const slugs = [
    "triennale_informatica",
    "triennale-informatica-musicale",
    "magistrale-sicurezza-informatica",
    "magistrale-informatica",
  ];

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const messages = await loadMessages(context.locale);

  let errors = {
    degree: false,
    courses: false,
    admins: false,
    representatives: false,
    informations: false,
  };

  const degreeSlug = context.params!.slug as unknown as string;

  // Handle underscore old slugs
  const [fixedSlug, hasReplaced] = replaceUnderscore(degreeSlug);

  if (hasReplaced) {
    return {
      redirect: {
        destination: `/${fixedSlug}`,
        permanent: false,
      },
    };
  }

  let degree: VerboseDegree | undefined = undefined,
    teachingCourses: Array<CourseDegree> = [],
    admins: Array<Admin> = [],
    representatives: Array<Representative> = [];

  try {
    degree = await backend.getVerboseDegreeBySlug(degreeSlug);
  } catch (e) {
    console.error("Error while fetching degree: ", e);
    errors.degree = true;
  }

  const degreeKey = degree?.pk.toString();
  const departmentKey = degree?.department.pk.toString();

  try {
    if (!degreeKey)
      throw new Error(
        `Degree key is undefined, can't retrieve the teaching courses.`,
      );

    teachingCourses = (await backend.getCourses(degreeKey)) ?? [];
  } catch (e) {
    console.error("Error while fetching teaching courses: ", e);
    errors.courses = true;
  }

  try {
    admins = await backend.getAdmins(degreeSlug);
  } catch (e) {
    console.error("Error while fetching admins: ", e);
    errors.admins = true;
  }

  try {
    if (!departmentKey)
      throw new Error(
        `Department key is undefined, can't retrieve the representatives.`,
      );

    representatives = await backend.getRepresentatives(departmentKey);
  } catch (e) {
    console.error("Error while fetching representatives: ", e);
    errors.representatives = true;
  }

  return {
    props: {
      loadedDegree: degree,
      courses: teachingCourses ?? [],
      admins: admins ?? [],
      representatives: representatives ?? [],
      errors: errors,
      messages,
    },
  };
};

const replaceUnderscore = (str: string): [string, boolean] => {
  const replaced = str.replace(/_/g, "-");

  return [replaced, replaced !== str];
};
