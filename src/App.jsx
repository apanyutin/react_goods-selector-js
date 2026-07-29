import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const Header = ({ good, setSelectedGood }) =>
  good !== '' ? (
    <h1 className="title is-flex is-align-items-center">
      {good} is selected
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => setSelectedGood('')}
      />
    </h1>
  ) : (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

const Table = ({ selectedGood, setSelectedGood }) => (
  <table className="table">
    <tbody>
      {goods.map(good => {
        const isGoodSelected = selectedGood === good;

        return (
          <tr
            data-cy="Good"
            className={isGoodSelected ? 'has-background-success-light' : ''}
            key={good}
          >
            <td>
              {isGoodSelected && (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={() => setSelectedGood('')}
                >
                  -
                </button>
              )}

              {!isGoodSelected && (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setSelectedGood(good)}
                >
                  +
                </button>
              )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <Header good={selectedGood} setSelectedGood={setSelectedGood} />
      <Table
        goods={goods}
        selectedGood={selectedGood}
        setSelectedGood={setSelectedGood}
      />
    </main>
  );
};
