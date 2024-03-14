"use client";
import React, { useEffect, useRef, memo } from "react";

const WidgetCoinGraph: React.FC<{ symbol: string }> = ({ symbol }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "CRYPTO:${(symbol + "").toUpperCase()}USD",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com" 
        }`;
    if (container.current) {
      container.current.appendChild(script);
    }
    return () => script.remove();
  }, [symbol]);

  return (
    <div className="tradingview-widget-container w-full h-full" ref={container}>
      <div className="tradingview-widget-container__widget w-full h-[calc(100%-32px)]"></div>
    </div>
  );
};

export default memo(WidgetCoinGraph);
