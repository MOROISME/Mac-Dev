import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CombinedData } from "../features/CombinedData";

// 👇 RTK Query hooks をモック
jest.mock("../features/api/data1", () => ({
  useGetData1Query: jest.fn(() => ({
    data: { message: "Hello from data1" },
    isLoading: false,
    error: null,
  })),
}));

jest.mock("../features/api/data2", () => ({
  useGetData2Query: jest.fn(() => ({
    data: { message: "Hello from data2" },
    isLoading: false,
    error: null,
  })),
}));

jest.mock("../features/api/data3", () => ({
  useGetData3Query: jest.fn(() => ({
    data: { message: "Hello from data3" },
    isLoading: false,
    error: null,
  })),
}));

test("renders all combined data when loaded successfully", () => {
  render(<CombinedData />);

  expect(screen.getByText(/Data1: Hello from data1/i)).toBeInTheDocument();
  expect(screen.getByText(/Data2: Hello from data2/i)).toBeInTheDocument();
  expect(screen.getByText(/Data3: Hello from data3/i)).toBeInTheDocument();
});
