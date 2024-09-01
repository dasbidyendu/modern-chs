import { NextPage } from "next";
import Map from "@/app/components/Map";

const page = () => {
  return (
    <div>
      <h1>Find Nearby Hospitals with oxygen supply</h1>
      <Map type="hospitals with oxygen" />
    </div>
  );
};

export default page;
