import Button from 'react-bootstrap/Button';
import { Outlet } from 'react-router-dom';
import React from 'react';
function Boton() {
  return (   
    <React.Fragment>
      <Button  href='https://energiaonline.com.ar/como-calcular-la-huella-de-carbono-que-le-dejas-al-planeta/'>Fuente 1</Button>{''}
      <Button  href='https://www.caranddriver.com/es/coches/planeta-motor/a30780438/emisiones-contaminantes-segun-tipo-coche/'>Fuente 2</Button>{' '}
      <Button  href='https://www.edesur.com.ar/novedades/calefactor-electrico-mas-eficiente-por-consumo/#:~:text=Un%20panel%20est%C3%A1ndar%20consume%20600,aire%20acondicionado%20en%20modo%20calor.'>Fuente 3</Button>{' '}
      <Button  href='https://www.bbva.es/general/sostenibilidad/soluciones-para-personas/huella-de-carbono-personas/repositorio/ducharse-a-diario.html#:~:text=Una%20ducha%20de%20aproximadamente%205,se%20utiliza%20una%20caldera%20el%C3%A9ctrica.'>Fuente 4</Button>{' '}
      <Button  href='https://www.iberdrola.com/sostenibilidad/huella-de-carbono#:~:text=C%C3%93MO%20REDUCIR%20LA%20HUELLA%20DE%20CARBONO&text=Apuesta%20por%20un%20consumo%20responsable,respetuosos%20con%20el%20medio%20ambiente.'>Fuente 5</Button>{' '}
    <Outlet/>
    </React.Fragment>
  );
}

export default Boton;