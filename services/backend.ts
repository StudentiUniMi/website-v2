import axios from "axios";

import { endpoints } from "@/utils/apiConfig";
import {
  Admin,
  CourseDegree,
  Degree,
  Department,
  FeaturedGroups,
  Representative,
  VerboseDegree,
} from "@/types/models";

const backend = {
  getDepartments: async (): Promise<Array<Department>> => {
    const response = await axios.get<Array<Department>>(endpoints.departments);

    return response.data;
  },
  getDegrees: async (departmentId: string): Promise<Array<Degree>> => {
    const response = await axios.get<Array<Degree>>(
      `${endpoints.degrees}?dep_id=${departmentId}`,
    );

    return response.data;
  },
  getCourses: async (degreeId: string): Promise<Array<CourseDegree>> => {
    const response = await axios.get<Array<CourseDegree>>(
      `${endpoints.courses}?deg_id=${degreeId}`,
    );

    return response.data;
  },
  getRepresentatives: async (
    departmentId: string,
  ): Promise<Array<Representative>> => {
    const response = await axios.get<Array<Representative>>(
      `${endpoints.representatives}?dep_id=${departmentId}`,
    );

    return response.data;
  },
  getVerboseDegreeBySlug: async (
    degreeSlug: string,
  ): Promise<VerboseDegree> => {
    const response = await axios.get<VerboseDegree>(
      `${endpoints.degree}?slug=${degreeSlug}`,
    );

    return response.data;
  },
  getVerboseDegreeById: async (degreeId: string): Promise<VerboseDegree> => {
    const response = await axios.get<VerboseDegree>(
      `${endpoints.degree}?pk=${degreeId}`,
    );

    return response.data;
  },
  /**
   * Retrieves an array of string referred to Degree names (used in Homepage).
   */
  getStringDegrees: async (): Promise<Array<string>> => {
    const response = await axios.get<Array<string>>(endpoints.typingDegrees);

    return response.data;
  },
  getDegreesForSearchBox: async (
    searchText: string,
  ): Promise<Array<Degree>> => {
    const response = await axios.get<Array<Degree>>(
      `${endpoints.searchDegrees}?q=${searchText}`,
    );

    return response.data;
  },
  getAdmins: async (degreeSlug: string): Promise<Array<Admin>> => {
    const response = await axios.get<Array<Admin>>(
      `${endpoints.admins}?slug=${degreeSlug}`,
    );

    return response.data;
  },
  getExtraGroups: async (): Promise<FeaturedGroups> => {
    const response = await axios.get<FeaturedGroups>(endpoints.featuredGroups);

    return response.data;
  },
};

export default backend;
