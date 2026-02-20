import { groups } from 'd3-array';
import { format } from 'd3-format';

export const nf = Intl.NumberFormat('en-BE', {
	style: 'currency',
	currency: 'EUR',
	maximumSignificantDigits: 3,
	notation: 'compact',
	minimumFractionDigits: 1
});

export const pctf = format('.1%');

const takeWhileNotEmpty = (f, [x, ...xs]) => (f(x) ? [x, ...takeWhile(f, xs)] : []);
const takeWhile = (f, xs) => (xs.length ? takeWhileNotEmpty(f, xs) : []);

export function getExcludeYears(data, year, props) {
	const allYears = Array.from(new Set(data.map((d) => year(d)))).sort();

	const visibleYears = groups(data, (d) => year(d))
		.filter((d) => props.map((p) => d[1].every((d) => !isNaN(d[p]))).every((d) => d === true))
		.map((d) => d[0])
		.sort();

	const result = [
		...takeWhile((d) => !visibleYears.includes(d), allYears),
		...takeWhile((d) => !visibleYears.includes(d), allYears.reverse())
	];

	return result;
}

export const colors = [
	['#6eb663'],
	['#a0cbe8', '#6eb663'],
	['#a0cbe8', '#6eb663', '#ffbe7d'],
	['#a0cbe8', '#6eb663', '#f1ce63', '#ffbe7d'],
	['#a0cbe8', '#6eb663', '#f1ce63', '#ffbe7d', '#e15759'],
	['#a0cbe8', '#6eb663', '#f1ce63', '#ffbe7d', '#e15759', '#d4a6c8'],
	['#a0cbe8', '#86bcb6', '#6eb663', '#f1ce63', '#ffbe7d', '#e15759', '#d4a6c8'],
	['#a0cbe8', '#86bcb6', '#6eb663', '#f1ce63', '#ffbe7d', '#e15759', '#fabfd2', '#d4a6c8']
];
