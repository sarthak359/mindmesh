import Navbar from "@/pages/components/Navbar";

export default function Home() {
  return (
    <div>
      <img
        className="image-gradiant"
        src="/gradient.png"
        alt="Gradient background"
      />
      <div className="layer-blur"></div>
      <Navbar />
    </div>
  );
}
