import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DrachenhoehlePage from './pages/DrachenhoehlePage';
import DrachenkidsPage from './pages/DrachenkidsPage';
import EingliederungshilfePage from './pages/EingliederungshilfePage';
import BetreuungsleistungenPage from './pages/BetreuungsleistungenPage';
import ScotsonTherapiePage from './pages/ScotsonTherapiePage';
import KonduktiveFoerderungPage from './pages/KonduktiveFoerderungPage';
import TraegerPage from './pages/TraegerPage';
import TransparenzPage from './pages/TransparenzPage';
import ImpressumPage from './pages/ImpressumPage';
import SpendenPage from './pages/SpendenPage';
import FreiwilligenbereichPage from './pages/FreiwilligenbereichPage';
import SpielstrassePage from './pages/SpielstrassePage';
import NeuigkeitenPage from './pages/NeuigkeitenPage';
import KitaAnmeldungPage from './pages/KitaAnmeldungPage';
import { ROUTES } from './lib/routes';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.DRACHENHOEHLE} element={<DrachenhoehlePage />} />
        <Route path={ROUTES.DRACHENKIDS} element={<DrachenkidsPage />} />
        <Route path={ROUTES.EINGLIEDERUNGSHILFE} element={<EingliederungshilfePage />} />
        <Route path={ROUTES.BETREUUNGSLEISTUNGEN} element={<BetreuungsleistungenPage />} />
        <Route path={ROUTES.SCOTSON_THERAPIE} element={<ScotsonTherapiePage />} />
        <Route path={ROUTES.KONDUKTIVE_FOERDERUNG} element={<KonduktiveFoerderungPage />} />
        <Route path={ROUTES.TRAEGER} element={<TraegerPage />} />
        <Route path={ROUTES.TRANSPARENZ} element={<TransparenzPage />} />
        <Route path={ROUTES.IMPRESSUM} element={<ImpressumPage />} />
        <Route path={ROUTES.SPENDEN} element={<SpendenPage />} />
        <Route path={ROUTES.FREIWILLIGENBEREICH} element={<FreiwilligenbereichPage />} />
        <Route path={ROUTES.SPIELSTRASSE} element={<SpielstrassePage />} />
        <Route path={ROUTES.NEUIGKEITEN} element={<NeuigkeitenPage />} />
        <Route path={ROUTES.KITA_ANMELDUNG} element={<KitaAnmeldungPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
