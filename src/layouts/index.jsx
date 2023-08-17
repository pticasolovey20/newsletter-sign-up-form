import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex xs:items-center justify-center text-neutral-charcoal-grey bg-neutral-charcoal-grey">
			{children}
		</div>
	);
};

export default Layout;
