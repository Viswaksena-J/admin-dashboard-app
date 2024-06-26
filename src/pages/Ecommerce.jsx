import React from "react";
// import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot, GoDotFill } from "react-icons/go";
// import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  // medicalproBranding,
  recentTransactions,
  // weeklyStats,
  dropdownData,
  SparklineAreaData,
  // ecomPieChartData,
} from "../data/dummy";
// import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
// import { employeesData, employeesGrid } from "../data/dummy";
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Resize,
//   Sort,
//   ContextMenu,
//   Filter,
//   Page,
//   ExcelExport,
//   PdfExport,
//   Edit,
//   Inject,
//   Search,
//   Toolbar,
// } from "@syncfusion/ej2-react-grids";
import { useStateContext } from "../contexts/ContextProvider";
// import product9 from "../data/product9.jpg";
// import { Header } from "../components";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  const hi = "hello";
  return (
    <div className="mt-8">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        {/* Earnings */}
        {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div> */}
        <div
          className=" rounded-2xl md:w-400 p-4 m-3"
          style={{ backgroundColor: currentColor }}
        >
          <div className="flex justify-between items-center ">
            <p className="font-semibold text-white text-2xl">Earnings</p>

            <div>
              <p className="text-2xl text-white font-semibold mt-8">
                $63,448.78
              </p>
              <p className="text-gray-200">Monthly revenue</p>
            </div>
          </div>

          <div className="mt-4">
            <SparkLine
              currentColor={currentColor}
              id="column-sparkLine"
              height="100px"
              type="Column"
              data={SparklineAreaData}
              width="320"
              color="rgb(242, 252, 253)"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={"text-sm text-${item.pcColor} ml-2"}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
            <div className="mt-5">
              <SparkLine
                currentColor={currentColor}
                id="line-sparkline"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-10 flex-wrap justify-center"> */}
      <div className="flex flex-col md:flex-row justify-center">
        {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  "> */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-1/2">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            {/* <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-green-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,000</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-red-400 ml-3 text-xs">
                    15%
                  </span>
                </p>
                <p className="text-red-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div> */}
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
        {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl"> */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl md:w-1/2 md:ml-4">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row">
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl w-full md:w-1/2">
          <Header category="Page" title="Orders" />
          <GridComponent
            id="gridcomp"
            dataSource={ordersData}
            allowPaging
            pageSettings={{ pageSize: 5 }}
            allowSorting={true}
            toolbar={["Search"]}
            width="auto"
          >
            <ColumnsDirective>
              {ordersGrid
                .filter(
                  (item) =>
                    item.field === "OrderItems" ||
                    item.field === "CustomerName" ||
                    item.field === "TotalAmount" ||
                    item.field === "OrderID"
                )
                .filter((item) => item.headerText !== "Status")
                .map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
            </ColumnsDirective>
            <Inject
              services={[
                Resize,
                Sort,
                ContextMenu,
                Filter,
                PdfExport,
                ExcelExport,
                Edit,
                Page,
                Search,
                Toolbar,
              ]}
            />
          </GridComponent>
        </div>
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl w-full md:w-1/2">
          <Header category="Page" title="Employees" />
          <GridComponent
            dataSource={employeesData}
            allowPaging
            pageSettings={{ pageSize: 5 }}
            allowSorting={true}
            toolbar={["Search"]}
            width="auto"
          >
            <ColumnsDirective>
              {employeesGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar]} />
          </GridComponent>
        </div>
      </div> */}
    </div>
  );
};

export default Ecommerce;
