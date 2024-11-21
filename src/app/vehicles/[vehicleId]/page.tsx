type Props = {
  params: {
    vehicleId: string;
  };
};

export default function VehicleDetails({ params }: Props) {
  return <h1>Details about vehicles {params.vehicleId} </h1>;
}
