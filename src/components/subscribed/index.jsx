import React from "react";
import Success from "../icons/success";
import { classNames } from "../../utils";

const Subscribed = ({ email, dismiss }) => {
	return (
		<div
			className={classNames(
				"sm:aspect-square xs:w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%] xxl:w-[25%]",
				"flex flex-col justify-center gap-10 p-4 sm:p-10 xs:rounded-2xl",
				"bg-neutral-white"
			)}
		>
			<div className="flex flex-col gap-8 justify-center flex-1">
				<Success />
				<h1 className="text-[44px] leading-[44px] font-bold">Thanks for subscribing!</h1>
				<p>
					A confirmation email has been sent to <span className="font-medium">{email}</span>. Please open it
					and click the button inside to confirm your subscription.
				</p>
			</div>
			<button
				onClick={dismiss}
				className={classNames(
					"px-4 py-4 rounded-lg",
					"text-white text-sm md:text-base",
					"bg-neutral-dark-slate-grey shadow-neutral-dark-slate-grey shadow-[0px_5px_15px]",
					"hover:shadow-primary-tomato hover:bg-primary-tomato duration-300"
				)}
			>
				Dismiss message
			</button>
		</div>
	);
};

export default Subscribed;
