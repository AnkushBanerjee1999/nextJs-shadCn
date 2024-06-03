import probeData from "./probeData";
console.log(probeData);  // Check what is actually being imported

export const probeFilteredData = (() => {
  let filterData: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[] = [];
  probeData.forEach((eachProbeData) => {
    filterData.push({
      label: eachProbeData.PROBE_NAME,
      value: eachProbeData.PROBE_NAME,
      icon: undefined, // Add empty icon property if needed
    });
  });

  return filterData;
})();
