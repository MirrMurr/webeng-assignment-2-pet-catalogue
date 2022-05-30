export default async function delay(t: any) {
  return new Promise((res) => setTimeout(res, t));
}
