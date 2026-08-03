import GalleryPage from "../../components/photography/GalleryPage";
import portAndy from "../../../assets/photography/portrait/port-andy.jpg";
import portHarshini from "../../../assets/photography/portrait/port-harshini.jpg";
import portJoshnathan from "../../../assets/photography/portrait/port-hksa-joshnathan copy.jpg";
import portJaylen from "../../../assets/photography/portrait/port-jaylen.jpg";
import portDggroup from "../../../assets/photography/portrait/port-dggroup.jpg";
import portKylie from "../../../assets/photography/portrait/port-kylie.jpg";
import portLing from "../../../assets/photography/portrait/port-ling.jpg";
import portHksacny from "../../../assets/photography/portrait/port-hksacny.jpg";
import portMahi from "../../../assets/photography/portrait/port-mahi.jpg";

const columns = [
  [
    { id: 1, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #2a1f1a 0%, #5a3a2a 60%, #8a6050 100%)", image: portAndy },
    { id: 4, aspect: "landscape" as const, gradient: "linear-gradient(200deg, #3a2010 0%, #6a3a20 50%, #9a6040 100%)", image: portJoshnathan },
    { id: 7, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #1a0f0a 0%, #4a2a1a 60%, #7a4a2a 100%)", image: portHksacny },
  ],
  [
    { id: 2, aspect: "landscape" as const, gradient: "linear-gradient(180deg, #1a1010 0%, #3a2020 50%, #6a3030 100%)", image: portJaylen, scale: 1.04 },
    { id: 5, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #0f1a14 0%, #2a3a28 50%, #4a5a40 100%)", image: portHarshini },
    { id: 8, aspect: "landscape" as const, gradient: "linear-gradient(160deg, #1a1510 0%, #3a2e20 50%, #6a5030 100%)", image: portDggroup },
  ],
  [
    { id: 3, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #14100a 0%, #3a2a18 60%, #6a4a28 100%)", image: portLing },
    { id: 6, aspect: "landscape" as const, gradient: "linear-gradient(200deg, #1a1208 0%, #4a3010 50%, #7a5020 100%)", image: portKylie },
    { id: 9, aspect: "portrait"  as const, gradient: "linear-gradient(160deg, #1a1010 0%, #4a2020 60%, #8a3030 100%)", image: portMahi },
  ],
];

export default function PortraitPage() {
  return (
    <GalleryPage
      title="Portrait & Group"
      sub="Faces & Stories"
      accent="#C8957E"
      columns={columns}
    />
  );
}
