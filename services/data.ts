import { Faq, Service } from "@/types";
import Faqs from "@/data/Faqs.json";
import Redirects from "@/data/services/Redirects.json";
import Tools from "@/data/services/Tools.json";
import Guides from "@/data/services/Guides.json";

const data = {
  getFaqs: (): Array<Faq> => Faqs,
  getRedirects: (): Array<Service> => Redirects,
  getTools: (): Array<Service> => Tools,
  getGuides: (): Array<Service> => Guides,
};

export default data;
