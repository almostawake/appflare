import type { RequestHandler } from './$types';

const FIREBASE_PROJECT = 'burradoo-spend';

export const GET: RequestHandler = async ({ params, request }) => {
	const url = new URL(request.url);
	const target = `https://${FIREBASE_PROJECT}.firebaseapp.com/__/auth/${params.path}${url.search}`;
	const response = await fetch(target, {
		headers: { 'Host': `${FIREBASE_PROJECT}.firebaseapp.com` }
	});
	return new Response(response.body, {
		status: response.status,
		headers: response.headers
	});
};

export const POST: RequestHandler = async ({ params, request }) => {
	const url = new URL(request.url);
	const target = `https://${FIREBASE_PROJECT}.firebaseapp.com/__/auth/${params.path}${url.search}`;
	const response = await fetch(target, {
		method: 'POST',
		headers: { 'Host': `${FIREBASE_PROJECT}.firebaseapp.com` },
		body: await request.text()
	});
	return new Response(response.body, {
		status: response.status,
		headers: response.headers
	});
};
