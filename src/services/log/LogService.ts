export const LogService = {
  error(error: Error | any) {
    // implements sentry.
    console.error(error);
  },
  info(info: any) {
    console.log(info);
  },
};
