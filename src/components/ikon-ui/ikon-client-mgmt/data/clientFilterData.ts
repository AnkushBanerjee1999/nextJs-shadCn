import clientData from "./clientData";

export const clientFilteredData = (() => {
  let filterData: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[] = [];
  clientData.forEach((eachClientData) => {
    filterData.push({
      label: eachClientData.clientName,
      value: eachClientData.clientName,
      icon: undefined, // Add empty icon property if needed
    });
  });

  return filterData;
})();
