import { useMemo } from "react";

export const useCurrencyFormatter = (number: number): string => {
  const formattedCurrency = useMemo(() => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits: 0
    }).format(number);
  }, [number]);

  return formattedCurrency;
};
