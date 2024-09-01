import { NextPage } from "next";
import Map from "@/app/components/Map";

const page = () => {
  return (
    <div>
      <h1>Find Nearby Hospitals</h1>
      <Map type="hospitals" />
    </div>
  );
};

export default page;
