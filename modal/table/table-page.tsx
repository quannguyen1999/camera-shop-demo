import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import axios from "axios";
import { LoadingItem } from "@/components/loading-item";
import qs from "query-string";
import { useModal } from "@/modal/popup/use-modal-store";
interface TablePageProps {
  urlApi: string,
  columns: any
}
export default function TablePage({urlApi, columns}: TablePageProps) {

  const { isRefresh } = useModal();
  const [loading, setLoading] = useState(isRefresh);
  const [dataTable, setDataTable] = useState([]);
  const [totalRecord, setTotalRecord] = useState(0);
  const [nextCursor, setNextCursor] = useState("");
  const [firstCursor, setFirstCursor] = useState("");

  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get(urlApi);
      setDataTable(datas.data.items);
      setTotalRecord(datas.data.total);
      setNextCursor(datas.data.nextCursor);
      setFirstCursor(datas.data.firstCursor);
    };

    setLoading(true);
    getData();
    setLoading(false);
  }, [isRefresh]);

  const onLoadPage = async (type: "next" | "previous") => {
    setLoading(true);
    const url =
      type == "previous"
        ? qs.stringifyUrl({
            url: urlApi,
            query: {
              firstCursor: firstCursor,
            },
          })
        : qs.stringifyUrl({
            url: urlApi,
            query: {
              nextCursor: nextCursor,
              firstCursor: firstCursor,
            },
          });
    const datas = await axios.get(url);
    setDataTable(datas.data.items);
    setNextCursor(datas.data.nextCursor);
    setFirstCursor(datas.data.firstCursor);
    setLoading(false);
  };

  return (
    <div className="container mx-auto  ">
      {loading ? (
        <LoadingItem />
      ) : (
        <DataTable
          isHasNextPage={
            nextCursor != undefined && nextCursor.trim().length > 0
          }
          isHasPreviousPage={
            firstCursor != undefined && firstCursor.trim().length > 0
          }
          totalRecord={totalRecord}
          columns={columns}
          data={dataTable}
          onNextPage={() => onLoadPage("next")}
          onPreviousPage={() => onLoadPage("previous")}
        />
      )}
    </div>
  );
}
