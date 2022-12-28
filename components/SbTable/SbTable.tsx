import tableStyles from './SbTable.module.css'

interface Props {
  columns: string[];
  children?: React.ReactNode;
}


const SbTable: React.FC<Props> = ({
  columns,
  children
}) => {
  return (
    <table className={tableStyles["data-table"]}>
      <thead>
        <tr>
          {columns.map((headerColumn, index) => {
            return <th key={headerColumn + index} className={tableStyles["data-table--head-cell"]}>{headerColumn}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  );
}

export default SbTable;
