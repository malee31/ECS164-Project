import CheckIcon from "../../assets/icons/Check.svg";
import PropTypes from "prop-types";
import "./CheckBoxLI.css";

export default function CheckBoxLI({ children }) {
	return (
		<li className="text-lg">
			<label className="flex flex-row gap-3 cursor-pointer">
				<div className="inline-block my-0.5">
					<input
						className="w-6 h-6 p-1 rounded-full hidden li-check-box"
						type="checkbox"
					/>
					<span
						className="inline-block w-6 h-6 bg-white border-2 rounded-full cursor-pointer"
					>
					<span className="flex w-full h-full p-0.5 items-center justify-center">
						<img
							className="inline-block check-icon"
							alt="✓"
							src={CheckIcon}
						/>
					</span>
				</span>
				</div>
				<span>
					{children}
				</span>
			</label>
		</li>
	);
}

CheckBoxLI.propTypes = {
	children: PropTypes.node.isRequired,
};