export default async function promisify(promise: Promise<any>) {
  try {
    const res = await promise;
    return [res?.data, null];
  } catch (error: any) {
    return [null, error?.response?.data || error];
  }
}