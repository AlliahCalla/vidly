import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn:
      "https://1ae377eeec2a49f09a4205c58d8df0c0@o533284.ingest.sentry.io/5655538",
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
