import React from "react";
import netflix from "../assets/netflix.png";

function Footer() {
  return (
    <div>
      <div class="bg-black  shadow w-full  ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col justify-center items-center">
            <img src={netflix} className="w-[11rem] px-8  " />
            <p>Entertain Your loved ones in home</p>
          </div>

          <div class="flex justify-center items-center">
            <ul class="flex space-x-4 text-sm font-medium text-gray-500">
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Premium
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              World Air
            </a>
            . Privacy.Terms.Sitemap
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
