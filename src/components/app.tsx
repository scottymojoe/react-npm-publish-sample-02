import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as appInterfaces from "../shapes/interfaces";
import CounterSample from "./routes/counter-sample";
import LongForm from "./routes/long-form";

const SiteRequestApp = (props: appInterfaces.ISiteRequestAppProperties) => {
	const routeProps: appInterfaces.RouteProperties = {
		siteRequestAppProperties: props,
		routeParameters: [],
	};
	return (
		<BrowserRouter basename={props.baseRouteUrl}>
			<Routes>
				<Route path="long-form" element={<LongForm {...routeProps} />} />
				<Route path="counter-sample" element={<CounterSample {...routeProps} value={0} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SiteRequestApp;
