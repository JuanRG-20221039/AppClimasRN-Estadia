import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LatBarAdmin from './LatBarAdmin.js'; // Importa la barra lateral
import '../../CSS/MenuLoginAdmin.css'; // Importa el archivo CSS para los estilos

// Importa los componentes individuales
import Edificios from './ComponentesMenuAdmin/Edificios';
import Aulas from './ComponentesMenuAdmin/Aulas';
import Dispositivos from './ComponentesMenuAdmin/Dispositivos';
import Bitacora from './ComponentesMenuAdmin/Bitacora';
import Reportes from './ComponentesMenuAdmin/Reportes';
import Historial from './ComponentesMenuAdmin/Historial';

const MenuLoginAdmin = () => {
  return (
    <div className="admin-container">
      <LatBarAdmin />
      <main className="content">
        <Routes>
          <Route path="admin-edificios" element={<Edificios />} />
          <Route path="admin-aulas" element={<Aulas />} />
          <Route path="admin-dispositivos" element={<Dispositivos />} />
          <Route path="admin-bitacora" element={<Bitacora />} />
          <Route path="admin-reportes" element={<Reportes />} />
          <Route path="admin-historial" element={<Historial />} />
          <Route path="*" element={<Edificios />} />
        </Routes>
      </main>
    </div>
  );
};

export default MenuLoginAdmin;