# frozen_string_literal: true

def max_profit(prices)
  base = prices.first
  profit = 0

  prices.each do |price|
    daily_profit = price - base

    base = price if price < base || daily_profit.positive?

    profit += daily_profit if daily_profit.positive?
  end

  profit
end
