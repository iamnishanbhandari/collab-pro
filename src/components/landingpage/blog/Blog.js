import React from "react";
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";

const Blog = () => {
  return (
    <>
      <div id="blog-section">
        <div className="flex mt-40 mb-10 ml-24">
          <div className="m-2 w-1/3">
            <img src={blog1}></img>
            <div className="mt-5">
              <p className="text-bold text-2xl">
                Leveraging the Power of Digital Marketing
              </p>
            </div>
            <div>
              <p className="text-gray-600 w-400  mt-3">
                Explore the immense potential of digital marketing in <br />{" "}
                reaching a global audience, driving business growth, and staying
                competitive in the digital age.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-4">
              <div>logo</div>
              <div className="flex flex-col text-sm text-gray-400">
                <div>
                  <p>Collab-pro Media</p>
                </div>
                <div>
                  <p>30 jan 2024 , 3 min read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-2 w-1/3">
            <img src={blog2}></img>
            <div className="mt-5">
              <p className="text-bold text-2xl">
                The Art of Effective Online Collaboration
              </p>
            </div>
            <div>
              <p className="text-gray-600 mt-3">
                Dive into the strategies, tools, and best practices
                <br /> that make online collaboration a game-changer teams,{" "}
                <br /> and remote work.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-4">
              <div>logo</div>
              <div className="flex flex-col text-sm text-gray-400">
                <div>
                  <p>Collab-pro Media</p>
                </div>
                <div>
                  <p>30 jan 2024 , 2 min read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="m-2 w-1/3">
            <img src={blog3}></img>
            <div className="mt-5">
              <p className="text-bold text-2xl">
                Influencer Marketing: The Future of Brand Promotion
              </p>
            </div>
            <div>
              <p className="text-gray-600 w-400  mt-3">
                Uncover the secrets behind influencer marketing's <br />{" "}
                success, from building brand awareness to creating <br />{" "}
                authentic connections with target audiences.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-4">
              <div>logo</div>
              <div className="flex flex-col text-sm text-gray-400">
                <div>
                  <p>Collab-pro Media</p>
                </div>
                <div>
                  <p>30 jan 2024 , 3 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
