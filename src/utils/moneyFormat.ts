export function formatNumber(value: number, symbol = false): string {
	const change = new Intl.NumberFormat("en", {
		maximumFractionDigits: 2,
		style: symbol ? "currency" : undefined,
		currency: symbol ? "USD" : undefined,
		currencyDisplay: symbol ? "symbol" : undefined,
	});

	const money = change.format(value);

	return money;
}
