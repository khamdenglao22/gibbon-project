import React from "react";
import ContactPage from "./ContactPage";
import SubBanner from "@/components/SubBanner";

const Page = () => {
  return (
    <>
      <SubBanner
        title="Contact"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />
      <ContactPage />
    </>
  );
};

export default Page;
