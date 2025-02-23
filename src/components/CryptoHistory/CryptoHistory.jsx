import style from './CryptoHistory.module.css';
import formatDate from '../../helpers/formateDataFns';
const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el, index) => {
          return (
            <tr className={style.tr} key={el.id}>
              <td className={style.td}>№ {index + 1}</td>
              <td className={style.td}>{el.price}</td>
              <td className={style.td}>{el.amount}</td>
              <td className={style.td}>{formatDate(el.date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
