const hierarchy = [
  {
    customer: [
      {
        site1: {
          container1: {
            Bank: {
              subBank: { string: { module: { cel: "" } } },
            },
          },
        },
        site2: {
          container1: {
            Bank: {
              subBank: { string: { module: { cel: "" } } },
            },
          },
        },
        site3: {
          container1: {
            Bank: {
              subBank: { string: { module: { cel: "" } } },
            },
          },
        },
      },
    ],
  },
];

const Customers = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div>Customers</div>
        <div className="border rounded-md border-gray-300 w-28 h-28 rounded-lg bg-gray-200">
          Customer Card
        </div>
      </div>
    </>
  );
};
export default Customers;
