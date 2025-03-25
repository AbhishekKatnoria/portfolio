import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="p-8">
      <Image src="/logo.png" alt="logo" width={20} height={20} />
    </div>
  );
};

export default Header;
