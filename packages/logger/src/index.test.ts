import { afterEach, describe, expect, it, vi } from "vitest";
import { log, logSum } from "./index";

// Mock console.log to test output
const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("logger", () => {
  // 在每个测试后清除 mock
  afterEach(() => {
    consoleLogSpy.mockClear();
  });

  it("should log a message with timestamp", () => {
    log("test message");
    expect(consoleLogSpy).toHaveBeenCalledOnce();
    expect(consoleLogSpy.mock.calls[0][0]).toContain("[INFO]");
    expect(consoleLogSpy.mock.calls[0][0]).toContain("test message");
  });

  it("should use the add function from utils and log the sum", () => {
    const result = logSum(5, 10);
    expect(result).toBe(15);
    expect(consoleLogSpy).toHaveBeenCalledOnce();
    expect(consoleLogSpy.mock.calls[0][0]).toContain("[SUM]");
    expect(consoleLogSpy.mock.calls[0][0]).toContain("The sum of 5 and 10 is 15");
  });
});
