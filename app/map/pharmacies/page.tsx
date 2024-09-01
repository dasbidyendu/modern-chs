import { NextPage } from "next";
import Map from "@/app/components/Map";

const page = () => {
  return (
    <div>
      <h1>Find Nearby Pharmacies</h1>
      <Map type="pharmacies" />
    </div>
  );
};

export default page;
