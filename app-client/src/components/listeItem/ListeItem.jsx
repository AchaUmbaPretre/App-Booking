import './listeItem.css'

const ListeItem = () => {
  return (
    <>
          <div className="listeResultat">
            <div className="listResultatRow">
              <div className="resultatRow">
                <img src="./../../images/appartement1.jpg" alt="" className="listeImg" />
                <div className="resultatTxt">
                  <h1 className="resultatH1">Tower Street Apartment</h1>
                  <span className="resultatSpan1">500m du centre</span>
                  <span className="resultatSpan2">Taxi aéroport gratuit</span>
                  <span className="resultatSpan3">Studio avec air conditionné </span>
                  <span className='resultatSpan4'>Studio entier . 1 salle de bains . 21m 1 lit complet</span>
                  <span className="resultatSpan5">Annulation gratuite</span>
                  <span className="resultatSpan6">Profitez de ce prix exceptionnel dès aujourd'hui</span>
                </div>
                </div>
                <div className="listeResultatRow2">
                  <div className="Row2">
                    <h2 className='Row2h2'>Excellent</h2>
                    <button className='RowBtn'>8.9</button>
                  </div>
                  <div className="Row3">
                    <span className="spanRow">$110</span>
                    <span className="spanRow2">Comprend les taxes et les frais</span>
                    <button className="spanBtn">Voir disponibilité</button>
                  </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default ListeItem