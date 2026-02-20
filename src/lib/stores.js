import { writable, readable } from 'svelte/store';

export const activeSection = writable(0);

export const mousePosition = writable({ x: 0, y: 0 });

export const data = writable();

export const electionYears = readable([2009, 2014, 2019, 2024	]);

export const page_title = writable("European Democracy Consulting Stiftung");
