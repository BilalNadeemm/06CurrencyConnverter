
import { useState, useEffect } from "react";

const key = "6ed595bf2175c091b52fc5af";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${currency}`);
            const result = await response.json();
            setData(result.conversion_rates);
        };

        fetchCurrencyInfo();
    }, [currency]);

    return data;
}

export default UseCurrencyInfo;
