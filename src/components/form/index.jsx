import React, { useState } from "react";
import { list } from "../../constants";
import { classNames } from "../../utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import SignUpDesctop from "../icons/sign-up-desctop";
import SignUpMobile from "../icons/sign-up-mobile";
import Subscribed from "../subscribed";
import List from "../icons/list";
import { useForm } from "react-hook-form";

const Form = () => {
	const [subscribed, setSubscribed] = useState(false);

	const { matches: SVG } = useMediaQuery("min-width", 376);

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const onSubmit = () => {
		return () => setSubscribed(true);
	};

	const handleDismiss = () => setSubscribed(false);

	if (subscribed) return <Subscribed email={getValues().email} dismiss={handleDismiss} />;

	return (
		<div
			className={classNames(
				"w-full xs:w-[95%] md:w-[85%] lg:w-[70%] xl:w-[60%] xxl:w-[50%]",
				"flex flex-col-reverse sm:flex-row gap-4 md:gap-6 lg:gap-8",
				"sm:p-6 xs:rounded-2xl",
				"bg-neutral-white"
			)}
		>
			<form
				onSubmit={handleSubmit(onSubmit())}
				className={classNames("flex flex-col flex-1 justify-center gap-6", "p-4")}
			>
				<h1 className="text-[34px] sm:text-[30px] md:text-[34px] xl:text-[36px] font-semibold">
					Stay updated!
				</h1>
				<p>Join 60,000+ product managers receiving monthly updates on:</p>
				<ul className="flex flex-col gap-4 font-medium">
					{list.map((element, index) => (
						<li key={index} className="flex items-center gap-4 text-sm md:text-base">
							<List />
							{element}
						</li>
					))}
				</ul>
				<div className="flex flex-col gap-2">
					<div className="mt-2 flex justify-between text-[12px] font-semibold">
						<label htmlFor="email">Email address</label>
						{errors?.email && <span className="text-primary-tomato">Valid email is required</span>}
					</div>
					<input
						id="email"
						type="email"
						autoComplete="off"
						{...register("email", {
							required: "Valid email is required",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Valid email is required",
							},
						})}
						placeholder="email@company.com"
						className={classNames(
							"px-4 py-3 rounded-lg",
							"border border-neutral-dark-slate-grey",
							"focus:outline-none focus:ring-0"
						)}
					/>
				</div>
				<button
					type="submit"
					className={classNames(
						"px-4 py-4 rounded-lg",
						"text-white text-sm md:text-base",
						"bg-neutral-dark-slate-grey shadow-neutral-dark-slate-grey shadow-[0px_5px_15px]",
						"hover:shadow-primary-tomato hover:bg-primary-tomato duration-300"
					)}
				>
					Subscribe to monthly newsletter
				</button>
			</form>
			{SVG ? <SignUpDesctop /> : <SignUpMobile />}
		</div>
	);
};

export default Form;
