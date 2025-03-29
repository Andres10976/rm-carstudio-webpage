declare global {
  interface Window {
    fbq?: (...args: any[]) => void; // Declare fbq as an optional function property on Window
  }
}

export {};
