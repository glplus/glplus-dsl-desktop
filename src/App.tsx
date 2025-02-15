import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import TranslationExample from "./components/TranslationExample";

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h1>{t("salutation", { name: "Rod" })}</h1>
      </div>
      <div>Grocery List Plus Design System Library</div>
      <TranslationExample />
    </div>
  );
};

export default App;
