import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import CustomerTable from "../components/table/CustomerTable";
import { Pagination } from "@mantine/core";
import { useSelector } from "react-redux";
import { useCustomersListQuery } from "../services/api/customer";

const Customer = () => {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const token = useSelector((state) => state?.auth?.token);
  const { data, isLoading } = useCustomersListQuery(token);
  const [customers, setCustomers] = useState(data?.customers);

  const handleSearch = (value) => {
    setCustomers(
      data?.customers?.filter((customer) =>
        customer?.full_name?.toLowerCase()?.includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    handleSearch(searchName);
  }, [searchName]);

  console.log(token, data);
  return (
    <Layout>
      {/* for nav bar  */}
      <div className=" w-full h-[70px] bg-nav-color sticky top-0 flex items-center justify-between px-[20px] shadow-md z-30">
        <div className="">
          <h4 className=" text-[20px] font-medium">User List</h4>
        </div>
        <div className=" relative">
          <input
            type="text"
            placeholder="Search ..."
            className=" w-[400px] h-[36px] rounded-full border focus:outline-none ps-[33px]"
            onChange={(e) => setSearchName(e.target.value)}
          />
          <AiOutlineSearch
            className={"text-[20px] text-gray-400 absolute top-2 left-2"}
          />
        </div>
      </div>
      {/* for add button  */}
      <div className=" p-[20px] flex items-center justify-between gap-[20px]">
        <p className=" text-[18px] font-normal">
          All ({data?.customers?.length})
        </p>
        <button className="flex items-center gap-[10px] uppercase px-[15px] py-[8px] rounded-full bg-blue-600 text-white text-[16px] transition-all duration-200 active:scale-95">
          <FiPlus className="text-[18px] font-semibold text-white" />
          add new
        </button>
      </div>
      {/* for table  */}
      <CustomerTable customerData={customers} />
      {/* for Pagination  */}
      {/* <div className=" mt-5">
        <Pagination value={page} onChange={setPage} total={10} />
      </div> */}
      {/* for nav footer  */}
      {/* <div className=" fixed bottom-0 text-gray-500 w-full h-[60px] bg-white flex items-center ps-[20px] mt-5">
        Showing 1 to 6 of 56 Entries
      </div> */}
      <div className=" w-full h-[70px]"></div>
    </Layout>
  );
};

export default Customer;
