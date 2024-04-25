
import React from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import style from './AppHeader.module.css'
import button from '../../css/button.module.css'
import Logo from '../Logo';

const AppHeader = () => {
  const navigate = useNavigate();
  Hub.listen('auth', ({ payload }) => {
	switch (payload.event) {
	  case 'signedIn':
		console.log("user has been signedIn successfully.", payload);
		navigate('/');
		break;
	  case 'signedOut':
		console.log('user has been signedOut successfully.', payload);
		break;
	  case 'tokenRefresh':
		console.log('auth tokens has been refreshed.', payload);
		break;
	  case 'tokenRefresh_failure':
		console.error('failure while refreshing auth tokens.', payload);
		break;
	  case 'signInWithRedirect':
		console.log('signInWithRedirect API has successfully been resolved.', payload);
		break;
	  case 'signInWithRedirect_failure':
		console.error('failure while trying to resolve signInWithRedirect API.', payload);
		break;
	  case 'customOAuthState':
		console.info('custom state returned from CognitoHosted UI', payload);
		break;
	}
	});
	const { user, signOut } = useAuthenticator((context) => [context.user]);
	console.log(user)
return (
	<div className={style.headerWrapper}>
	<header className={style.header}>
		<Logo />
		<div className={style.headerContent}>
			<div className={style.userText}>Welcome, {user?.signInDetails.loginId.split("@")[0]}</div>
			<div>
			<button className={button.primary} onClick={() => {navigate("/DxfRegistration")}}>Register DxF Participant</button>
			<button className={button.primary} onClick={signOut}>Sign Out</button>
			</div>
		</div>
	</header>
	</div>

)
}

export default AppHeader