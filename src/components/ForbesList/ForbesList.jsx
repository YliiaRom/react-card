import style from './ForbesList.module.css';
import ForbesListItem from '../ForbesListItem/ForbesListItem';
const ForbesList = ({ list }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
        <ul className={style.list}>
          {list.map(item => {
            return (
              <li className={style.item} key={item.id}>
                <ForbesListItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ForbesList;
