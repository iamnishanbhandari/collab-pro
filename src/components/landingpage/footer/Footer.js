import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="border-t border-solid border-gray-100 my-4 flex justify-evenly mt-32 mb-5 "
        id="help-center-section"
      >
        <div>
          <div className=" font-semibold mt-10 text-2xl ">About us</div>
          <div className="mt-2 text-gray-600 text-md">
            <div>Company Info </div>
            <div>About us</div>
          </div>
        </div>

        <div>
          <div className=" font-semibold mt-10 text-2xl ">Legal Aggrements</div>
          <div className="mt-2 text-gray-600 text-md">
            <div>Brand Aggrements </div>
            <div>Influencer Aggrements</div>
          </div>
        </div>

        <div>
          <div className=" font-semibold mt-10 text-2xl ">User Policies</div>
          <div className="mt-2 text-gray-600 text-md">
            <div>Terms and Condition</div>
            <div>Privacy Policy</div>
            <div>Privacy Policy</div>
            <div>Content Policy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
