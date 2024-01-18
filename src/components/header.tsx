import i18next from 'i18next';
import { useState } from 'react';

const Header = () => {
  const [enButtonSelected, setEnButtonSelected] = useState<boolean>(true);
  const [frButtonSelected, setFrButtonSelected] = useState<boolean>(false);

  function changeLanguage(languageName: string) {
    switch (languageName) {
      case 'en':
        setEnButtonSelected(true);
        setFrButtonSelected(false);
        break;

      case 'fr':
        setEnButtonSelected(false);
        setFrButtonSelected(true);
        break;

      default:
        break;
    }
    i18next.changeLanguage(languageName);
  }

  return (
    <div className="flex w-full my-5">
      <div>
        <h1 className="text-4xl mobile-subtitle font-black">Xavier NESMOND</h1>
      </div>
      <div className="flex ml-auto gap-2">
        <button
          className={
            enButtonSelected
              ? 'underline text-4xl mobile-subtitle font-black'
              : 'text-4xl mobile-subtitle font-black'
          }
          onClick={() => {
            changeLanguage('en');
          }}
        >
          En
        </button>
        <button
          className={
            frButtonSelected
              ? 'underline text-4xl mobile-subtitle font-black'
              : 'text-4xl mobile-subtitle font-black'
          }
          onClick={() => {
            changeLanguage('fr');
          }}
        >
          Fr
        </button>
      </div>
    </div>
  );
};
export default Header;
