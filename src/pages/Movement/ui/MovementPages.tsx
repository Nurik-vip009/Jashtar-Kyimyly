import Navpanel from "@/widgets/Navpanel/Navpanel";
import { LegalFrameworkSection } from "./LegalFrameworkSection/LegalFrameworkSection";
import { Management } from "./Management/Management";
import { MovementSection } from "./MovementSection/MovementSection";
import { OurMissionSection } from "./OurMissionSection/OurMissionSection";
import { useTranslation } from "react-i18next";

export function MovementPages() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Navpanel
        text={t("header.home")}
        link="/"
        text2={t("header.aboutTheMovement")}
      />
      <MovementSection />
      <OurMissionSection />
      <LegalFrameworkSection />
      <Management />
    </div>
  );
}
