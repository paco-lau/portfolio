import GalleryPage from "../../components/photography/GalleryPage";

const columns = [
  [
    { id: 1, aspect: "landscape" as const, gradient: "linear-gradient(160deg, #0d1f2d 0%, #1a3a4a 50%, #2d6080 100%)" },
    { id: 4, aspect: "portrait"  as const, gradient: "linear-gradient(180deg, #0a1a2a 0%, #1a3050 50%, #2a4a70 100%)" },
    { id: 7, aspect: "landscape" as const, gradient: "linear-gradient(160deg, #0a1520 0%, #152a3a 50%, #204060 100%)" },
  ],
  [
    { id: 2, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #1a1a14 0%, #3a3a28 60%, #5a5a3a 100%)" },
    { id: 5, aspect: "landscape" as const, gradient: "linear-gradient(200deg, #0d2030 0%, #1a3848 50%, #2a5868 100%)" },
    { id: 8, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #101820 0%, #203040 50%, #304858 100%)" },
  ],
  [
    { id: 3, aspect: "landscape" as const, gradient: "linear-gradient(160deg, #0a1a14 0%, #1a3a28 50%, #2a5a3a 100%)" },
    { id: 6, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #0d1a28 0%, #1a3040 60%, #2a4858 100%)" },
    { id: 9, aspect: "landscape" as const, gradient: "linear-gradient(200deg, #0a1520 0%, #1a2e40 50%, #2a4a60 100%)" },
  ],
];

export default function UrbanLandscapePage() {
  return (
    <GalleryPage
      title="Urban & Landscape"
      sub="Light & Space"
      accent="#7EC8E3"
      columns={columns}
    />
  );
}
