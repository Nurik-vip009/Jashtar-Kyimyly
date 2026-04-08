import Navpanel from "@/widgets/Navpanel/Navpanel";
import { BranchName } from "./BranchName/BranchName";
import { BranchName1 } from "./BranchName1/BranchName1";
import { BranchName2 } from "./BranchName2/BranchName2";
import { Result } from "./Result/Result";
import { useTranslation } from "react-i18next";

export function BranchNamePages() {
	const { t, i18n } = useTranslation();
	return (
		<div>
			<Navpanel
				text={t("regionalOffice.home")}
				link="/"
				text2={t("regionalOffice.regionalOffice")}
			/>
			<BranchName />
			<BranchName1 />
			<BranchName2 />
			<Result />
		</div>
	);
}
