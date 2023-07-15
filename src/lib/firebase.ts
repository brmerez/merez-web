import { getApps, initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD0LPULZbJHwpIJHiPbvKvcajjdaw4r99Q',
	authDomain: 'merez-web.firebaseapp.com',
	projectId: 'merez-web',
	storageBucket: 'merez-web.appspot.com',
	messagingSenderId: '280890177447',
	appId: '1:280890177447:web:b3a29b747e7d3bbbe86882',
	measurementId: 'G-2S57HXK488'
};

const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

export { app, auth };
