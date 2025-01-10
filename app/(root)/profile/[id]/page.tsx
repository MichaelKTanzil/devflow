import React from "react";

const ProfileDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <>
      <p>ProfileDetails {id}</p>
    </>
  );
};

export default ProfileDetails;
