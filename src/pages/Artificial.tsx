import Navbar from "@/pages/components/Navbar";
import Link from "next/link"; // Import Link

const Artificial = () => {
  return (
    <div className="h-screen w-screen relative">
      {/* Button to go to home page */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <Link href="/" className="ai-links">
          Go to Home
        </Link>
      </div>

      <iframe
        src="https://mindmesh-73885.chipp.ai"
        height="100%"
        width="100%"
        frameBorder="0"
        title="MindMesh"
        className="h-full w-full"
      ></iframe>
    </div>
  );
};

export default Artificial;
