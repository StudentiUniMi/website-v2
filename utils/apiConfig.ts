const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.studentiunimi.it/api";

const endpoints = {
  departments: `${BASE_URL}/departments`,
  degrees: `${BASE_URL}/degrees`,
  degree: `${BASE_URL}/degree`,
  courses: `${BASE_URL}/courses`,
  representatives: `${BASE_URL}/representatives`,
  typingDegrees: `${BASE_URL}/typingDegrees`,
  searchDegrees: `${BASE_URL}/searchDegrees`,
  admins: `${BASE_URL}/admins`,
  featuredGroups: `${BASE_URL}/featuredGroups`,
};

export { BASE_URL, endpoints };
