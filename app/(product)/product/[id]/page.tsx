import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <>
      <h1>Product {id}</h1>
      <Link href="/product">Go Back</Link>
    </>
  );
};

export default page;
