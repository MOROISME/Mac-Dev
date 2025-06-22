import { useGetData1Query } from "./api/data1";
import { useGetData2Query } from "./api/data2";
import { useGetData3Query } from "./api/data3";

export const CombinedData = () => {
  const {
    data: data1,
    isLoading: loading1,
    error: error1,
  } = useGetData1Query();

  const {
    data: data2,
    isLoading: loading2,
    error: error2,
  } = useGetData2Query();

  const param1 = data1?.message ?? "";
  const param2 = data2?.message ?? "";

  const {
    data: data3,
    isLoading: loading3,
    error: error3,
  } = useGetData3Query({ param1, param2 }, { skip: !data1 || !data2 });

  if (loading1 || loading2) return <div>Loading data1 and data2...</div>;
  if (error1 || error2) return <div>Error loading data1 or data2</div>;

  if (loading3) return <div>Loading data3...</div>;
  if (error3) return <div>Error loading data3</div>;

  return (
    <div>
      <div>Data1: {param1}</div>
      <div>Data2: {param2}</div>
      <div>Data3: {data3?.message}</div>
    </div>
  );
};
