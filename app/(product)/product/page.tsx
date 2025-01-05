import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="h1-bold flex justify-center pb-3 pt-48">
        Welcome to product page
      </h1>
      <div className="flex justify-center gap-3">
        <Link href="/product/1">Product 1</Link>
        <Link href="/product/2">Product 2</Link>
        <Link href="/product/3">Product 3</Link>
      </div>
    </>
  );
}
