import React, { useState } from "react";
import * as appInterfaces from "../../shapes/interfaces";
import { FluentDefaultButton, FluentPrimaryButton } from "../fluent/buttons";

const CounterSample = (props: appInterfaces.ICounterRouteProperties) => {
	const [counter, setCounter] = useState(props.value ?? 0);

	const onMinus = () => {
		setCounter((prev) => prev - 1);
	};

	const onPlus = () => {
		setCounter((prev) => prev + 1);
	};

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<FluentDefaultButton onClick={onMinus}>-</FluentDefaultButton>
			<FluentPrimaryButton onClick={onPlus}>+</FluentPrimaryButton>
		</div>
	);
};

export default CounterSample;
