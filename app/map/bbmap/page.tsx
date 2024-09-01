import { NextPage } from "next";
import Map from "@/app/components/Map";

const page = () => {
  return (
    <div>
      <h1>Find Nearby Blood Banks</h1>
      <Map type="blood banks" />
    </div>
  );
};

export default page;
