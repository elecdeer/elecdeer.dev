import React from "react";
import { MainFrame } from "../components/templates/MainFrame";
import Link from "next/link";

type Props = {};

const PageB: React.FC<Props> = ({}) => {
  return (
    <MainFrame title={"pageB"}>
      <Link href={"/pageA"}>
        <a>ToPageA</a>
      </Link>
    </MainFrame>
  );
};

export default PageB;
