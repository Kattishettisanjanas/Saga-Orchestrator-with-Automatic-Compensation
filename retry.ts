export async function retry(fn: Function, retries: number) {
  let attempt = 0;

  while (attempt < retries) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      const delay = Math.pow(2, attempt) * 100;
      await new Promise(r => setTimeout(r, delay));
    }
  }

  throw new Error("Max retries reached");
}
