import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./CustomCheckBox.style";
import { CustomImage } from "../../CustomImage/ui/CustomImage";


interface ICustomCheckBox {
    checkedStatus: boolean;
    onChange: (value: boolean) => void;
};

export const CustomCheckBox: React.FC<ICustomCheckBox> = ({ checkedStatus, onChange }) => {
	const [ isChecked, setIsChecked ] = useState<boolean>(checkedStatus);
	const checkedImg = require("../../../assets/images/checkMark.png");

	const toggleCheckbox = () => {
		const newCheckedState = !isChecked;
		setIsChecked(newCheckedState);
		onChange(newCheckedState);
	};

	return (
		<TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
			{isChecked && <CustomImage path={checkedImg} />}
		</TouchableOpacity>
	);
};

