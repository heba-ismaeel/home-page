import style from "./style.module.css"

const FooterItem = ({ id, title, content }) => {
  return (
    <div className={style.container}>
      <h5>{title}</h5>
      <ul>
        {content.map((cont) => {
          return (
            <>
              <li key={id}>{cont}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItem;