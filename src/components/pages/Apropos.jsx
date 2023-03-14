/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import Collapse from './Collapse';
import '../sass/styles.scss';

function Apropos() {
  return (
    <React.Fragment>
      <div className='banner'></div>
      <main className='accordion'>
        <Collapse
          about = {true}
          title = 'Fiabilité'
          content = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        />

        <Collapse
          about = {true}
          title = 'Respect'
          content = 'La bienveillance fais partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />

        <Collapse
          about = {true}
          title = 'Service'
          content = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&#39;hésitez pas à nous contacter si vous avez la moindre question.'
        />

        <Collapse
          about = {true}
          title = 'Responsabilité'
          content = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&#39;hôte qu&#39;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
        />
      </main>
    </React.Fragment>
  );
}

export default Apropos;
