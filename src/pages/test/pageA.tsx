import React from "react";
import { MainFrame } from "../../components/templates/MainFrame";
import Link from "next/link";

type Props = {};

const PageA: React.FC<Props> = ({}) => {
  return (
    <MainFrame title={"pageA"}>
      <Link href={"/pageB"}>
        <a>ToPageB</a>
      </Link>
    </MainFrame>
  );
};

export default PageA;
