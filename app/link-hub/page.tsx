"use-client";

import LinkHubUi from "./_component/link-hub-ui";

const LinkHubPage = () => {
  return (
    <div className="relative mt-20 md:mt-40 flex flex-col items-center px-6 h-screen">
      <LinkHubUi />
      <div className="absolute bottom-0 text-xs text-center mb-28">
        <span>
        © {new Date().getFullYear()} Southwestern College Software Engineering
        Club. All rights reserved.
      </span>
      </div>
      
    </div>
  );
};

export default LinkHubPage;
