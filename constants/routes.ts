const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  QUESTION: (id: string) => `/question/${id}`,
  TAGS: (id: string) => `/tag/${id}`,
};

export default ROUTES;
