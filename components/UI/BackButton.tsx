import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <Link href="/#portfolio" className="flex items-center gap-2 group">
      <ArrowLeft size={20} />
      <h3 className="m-0">Zurück</h3>
    </Link>
  );
};

export default BackButton;
