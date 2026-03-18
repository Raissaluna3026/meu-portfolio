const env = import.meta.env;

export const appParams = {
  appId: env.VITE_APP_ID || "",
  token: env.VITE_APP_TOKEN || "",
  functionsVersion: env.VITE_FUNCTIONS_VERSION || "prod",
  appBaseUrl: env.VITE_APP_BASE_URL || "",
};
