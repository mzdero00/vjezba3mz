import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    vehicleId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`vehicle ${params.vehicleId}`);
    }, 100);
  });
  return { title: `vehicle ${title}` };
};

export default function VehicleDetails({ params }: Props) {
  return <h1>Details about vehicles {params.vehicleId} </h1>;
}
