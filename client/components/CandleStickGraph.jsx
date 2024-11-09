"use client"

import React, { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer } from "recharts"

// Helper function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}

// Helper function to parse different data formats
const parseData = (inputData) => {
  if (inputData?.status && inputData?.data && Array.isArray(inputData?.data?.candles[0])) {
    // First format: { status: "success", data: { candles: [...] } }
    const data = inputData?.data?.candles.map(candle => ({
        time: new Date(candle[0]).getTime(),
        open: candle[1],
        high: candle[2],
        low: candle[3],
        close: candle[4],
        volume: candle[5],
        color: candle[4] > candle[1] ? "var(--chart-green)" : "var(--chart-red)"
      }));
    console.log(data)
    return data.reverse()
  } else if (Array.isArray(inputData?.data?.candles.length > 0)) {
    // Second format: { candles: [...] }
    const data = inputData?.candles.map((candle) => ({
      time: formatDate(candle[0]),
      open: candle[1],
      high: candle[2],
      low: candle[3],
      close: candle[4],
      volume: candle[5],
      color: candle[4] > candle[1] ? "var(--chart-green)" : "var(--chart-red)"
    }))

    console.log(data)
    return data
  } else {
    console.error("Unsupported data format")
    return []
  }
}

export default function FlexibleCandlestickChart({ inputData }) {
  const data = useMemo(() => parseData(inputData), [inputData])

  return (
    <Card className="w-full max-w-7xl">
      <CardHeader>
        <CardTitle>Stock Price Candlestick Chart</CardTitle>
        <CardDescription>1-minute interval data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            candlestick: {
              label: "Price",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 40 }}>
              <XAxis dataKey="time" interval={60} tickFormatter={(value) => value} />
              <YAxis dataKey="high" domain={['auto', 'auto']} />
              <ZAxis range={[10, 10]} />
              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-background p-2 rounded shadow-md text-sm">
                        <p>Time: {data.time}</p>
                        <p>Open: {data.open}</p>
                        <p>High: {data.high}</p>
                        <p>Low: {data.low}</p>
                        <p>Close: {data.close}</p>
                        <p>Volume: {data.volume}</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Scatter
                data={data}
                shape={(props) => {
                  const { cx, payload, yAxis } = props
                  const { open, close, high, low } = payload
                  const candleWidth = 8
                    const isUp = close > open
                  const yHigh = yAxis.scale(high)
                  const yLow = yAxis.scale(low)
                  const yOpen = yAxis.scale(open)
                  const yClose = yAxis.scale(close)

                  return (
                    <g className={isUp ? "text-candlestick-up" : "text-candlestick-down"}>
                      <line 
                        x1={cx} 
                        y1={yHigh} 
                        x2={cx} 
                        y2={yLow} 
                        stroke="currentColor" 
                        strokeWidth={1}
                      />
                      <rect
                        x={cx - candleWidth / 2}
                        y={Math.min(yOpen, yClose)}
                        width={candleWidth}
                        height={Math.abs(yOpen - yClose)}
                        fill="currentColor"
                        stroke="none"
                      />
                    </g>
                  )
                }}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}