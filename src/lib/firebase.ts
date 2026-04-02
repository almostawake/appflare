import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import { dev } from '$app/environment';

const firebaseConfig = {
	apiKey: 'AIzaSyBKHv_zhXWYdWfWvNWQSrPOAKHb0Ta5aLA',
	authDomain: dev ? 'localhost:5173' : 'burradoo-spend.almostawake.workers.dev',
	projectId: 'burradoo-spend',
	appId: '1:35790315176:web:596fd91def56f513866c9d'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (dev) {
	connectAuthEmulator(auth, 'http://localhost:9099');
}

const googleProvider = new GoogleAuthProvider();

export async function login() {
	await signInWithRedirect(auth, googleProvider);
}

export async function logout() {
	await signOut(auth);
}

export async function handleRedirectResult() {
	return getRedirectResult(auth);
}

export function onAuthChange(callback: (user: User | null) => void) {
	return onAuthStateChanged(auth, callback);
}

export type { User };
