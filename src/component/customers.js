import { useState } from "react";
const Customers = ({ CustomerList }) => {
  const [visibleNestedElement, setVisibleNestedElement] = useState(false);
  return (
    <>
      <div className="flex">
        <div
          onClick={() => setVisibleNestedElement(!visibleNestedElement)}
          className="border  p-2 cursor-pointer hover:bg-slate-400  rounded-md bg-slate-500 text-white border-gray-300 h-12 rounded-lg bg-gray-200"
        >
          <h1>{CustomerList.name}</h1>
        </div>
        <div className="p-2">
          {visibleNestedElement
            ? CustomerList.items.map((item, i) => (
                <Customers CustomerList={item}></Customers>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
export default Customers;
