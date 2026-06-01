import GalleryPage from "../../components/photography/GalleryPage";

const columns = [
  [
    { id: 1, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #1a140a 0%, #3a2a10 50%, #6a4a20 100%)" },
    { id: 4, aspect: "landscape" as const, gradient: "linear-gradient(200deg, #1a1208 0%, #4a3010 50%, #8a6020 100%)" },
    { id: 7, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #140f08 0%, #3a2808 60%, #6a4a10 100%)" },
  ],
  [
    { id: 2, aspect: "landscape" as const, gradient: "linear-gradient(180deg, #1a1508 0%, #3a2e10 50%, #6a5220 100%)" },
    { id: 5, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #180e08 0%, #3a2010 50%, #7a4020 100%)" },
    { id: 8, aspect: "landscape" as const, gradient: "linear-gradient(160deg, #1a1208 0%, #3a2a10 50%, #5a4018 100%)" },
  ],
  [
    { id: 3, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #1a1208 0%, #4a3010 60%, #8a5818 100%)" },
    { id: 6, aspect: "landscape" as const, gradient: "linear-gradient(200deg, #120e08 0%, #2a2010 50%, #5a4020 100%)" },
    { id: 9, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #1a1408 0%, #3a2c10 60%, #6a4e20 100%)" },
  ],
];

export default function GraduationPage() {
  return (
    <GalleryPage
      title="Graduation"
      sub="Milestones & Moments"
      accent="#C8A97E"
      columns={columns}
    />
  );
}
