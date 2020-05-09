import React, { useState } from 'react';
import Loading from './loading';
import '../../App.css';

export default { title: 'Loading' };

export const WithText = () => {
	const [loading, setLoading] = useState(false);

	const handleLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}

	return (
      <div className="App">
	      <Loading
	        className="section"
	        enabled={loading}
	      >
	        <p>
	          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	        </p>
	        <button onClick={() => handleLoading()}>
	          Apply loading
	        </button>
	      </Loading>
      </div>
	)
};

export const WithContent = () => {
	const [loading, setLoading ] = useState(false);

	const handleLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}

	return (
      <div className="App">
	      <Loading
	        className="section"
	        enabled={loading}
	        content="Loading..."
	      >
	        <p>
	          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	        </p>
	        <button onClick={() => handleLoading()}>
	          Apply loading
	        </button>
	      </Loading>
      </div>
	)
};

export const WithOnlyButton = () => {
	const [loading, setLoading ] = useState(false);

	const handleLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}

	return (
      <div className="App">
      	<div className="section">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<Loading
				enabled={loading}
				content="Loading..."
			>
				<button onClick={() => handleLoading()}>
					Apply loading
				</button>
			</Loading>
      	</div>
      </div>
	)
};

