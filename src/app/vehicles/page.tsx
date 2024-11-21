import Link from "next/link";
export default function VehicleList() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>vehicle List</h1>
      <h2>
        <Link href="vehicles/1">vehicle 1</Link>
      </h2>
      <h2>
        <Link href="vehicles/2">vehicle 2</Link>
      </h2>
      <h2>
        <Link href="vehicles/3">vehicle 3</Link>
      </h2>
    </>
  );
}
