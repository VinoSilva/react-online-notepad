// store/localStorage.ts
export const loadState = <T>(key: string, fallback: T): T => {
  try {
    const serialized = localStorage.getItem(key);
    if (!serialized) return fallback;
    return JSON.parse(serialized) as T;
  } catch (err) {
    console.error("Could not load state", err);
    return fallback;
  }
};

export const saveState = (key: string, state: unknown) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(key, serialized);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
