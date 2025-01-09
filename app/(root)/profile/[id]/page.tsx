import React from "react";

const ProfileDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <>
      <p className="pt-28">ProfileDetails {id}</p>
    </>
  );
};

export default ProfileDetails;
