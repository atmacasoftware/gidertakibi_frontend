
import { useEffect, useState } from "react";
import "../../components/style.css";
import { PageHeader } from "../../shared/PageHeader"

export default function Dashboard() {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWitdh = window.innerWidth;
      setwidth(newWitdh);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  return (
    <>
      <PageHeader />
    </>
  );
}
