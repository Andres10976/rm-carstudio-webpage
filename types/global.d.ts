interface CalendlyApi {
  initPopupWidget: (options: { url: string }) => void;
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, unknown>;
    utm?: Record<string, unknown>;
  }) => void;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;

    Calendly?: CalendlyApi;
  }
}

export {};
