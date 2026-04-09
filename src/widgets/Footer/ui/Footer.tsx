import type { FC } from "react";
import styles from "./Footer.module.scss";
import logo from "@/shared/assets/images/logo.png";
import { MultiContainer, Typography } from "@/shared/ui";
import { FOOTER_SECTIONS } from "@/shared/config/footer-nav";
import { Link } from "react-router-dom";
import { Instagram, Phone, MailCheck, MapPinHouse } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <footer className={styles.footer}>
      <MultiContainer>
        <div className={styles.footerContent}>
          {/* Brand Info */}
          <div className={styles.brandInfo}>
            <img src={logo} alt={t("footer.logo")} className={styles.logo} />
            <Typography
              variant="navigation"
              color="white"
              className={styles.copyright}
            >
              © 2025 {t("footer.allRights")}
            </Typography>
            <Typography
              variant="navigation"
              color="white"
              className={styles.policyLinks}
            >
              <a href="/privacy-policy">{t("footer.privacyPolicy")}</a> |{" "}
              <a href="/terms-of-service">{t("footer.termsOfService")}</a> |{" "}
              <a href="/cookies">{t("footer.cookiesSettings")}</a>
            </Typography>
          </div>

          {/* Footer Navigation */}
          <nav className={styles.footerNav}>
            {FOOTER_SECTIONS.map((section, i) => (
              <div key={i} className={styles.navSection}>
                <ul className={styles.navList}>
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link to={link.url} className={styles.navLink}>
                        <Typography
                          variant="navigation"
                          className={styles.text}
                          color="white"
                        >
                          {t(`footer.${link.titleKey}`)}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Social & Contacts */}
          <div className={styles.nav4}>
            <div>
              <button>
                <Instagram />
              </button>
              <button>
                <Phone />
              </button>
              <button>
                <MailCheck />
              </button>
              <button>
                <MapPinHouse />
              </button>
            </div>
          </div>

          {/* Duplicate Brand Info for Mobile / Layout */}
          <img src={logo} alt={t("footer.logo")} className={styles.logo1} />
          <div className={styles.brandInfo1}>
            <Typography
              variant="navigation"
              color="white"
              className={styles.copyright1}
            >
              © 2025 {t("footer.allRights")}
            </Typography>
            <Typography
              variant="navigation"
              color="white"
              className={styles.policyLinks1}
            >
              <a href="/privacy-policy">{t("footer.privacyPolicy")}</a> |{" "}
              <a href="/terms-of-service">{t("footer.termsOfService")}</a> |{" "}
              <a href="/cookies">{t("footer.cookiesSettings")}</a>
            </Typography>
          </div>
        </div>
      </MultiContainer>
    </footer>
  );
};
