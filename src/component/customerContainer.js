import Customers from "./customers";
import { hierarchy } from "../config/Constants";

const CustomerContainer = () => {
  return (
    <div className="mt-3 ml-[10%]">
      <Customers CustomerList={hierarchy}></Customers>
    </div>
  );
};
export default CustomerContainer;
