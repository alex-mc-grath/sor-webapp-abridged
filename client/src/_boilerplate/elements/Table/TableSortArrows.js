
export const TableSortArrows = ({ sortDirection, setSortDirection}) => {

  return (
    <svg className="table-vertical-arrows"width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path onClick={() => setSortDirection(-1)}
        d="M0.872859 5.93177H10.2244C10.4053 5.93177 10.5619 5.86659 10.694 5.73612C10.8261 5.60569 10.8924 5.45124 10.8924 5.27273C10.8924 5.09422 10.8261 4.93984 10.694 4.80923L6.01826 0.195643C5.88615 0.0653586 5.72965 0 5.54863 0C5.3676 0 5.21111 0.0653586 5.07888 0.195643L0.403114 4.80923C0.270891 4.9397 0.204834 5.09422 0.204834 5.27273C0.204834 5.45121 0.270891 5.60569 0.403114 5.73612C0.535483 5.86659 0.691979 5.93177 0.872859 5.93177Z"
        fill={sortDirection === -1 ? '#A5A5A5' : '#D3D6E4'} style={{cursor: "pointer"}}
      />
      <path onClick={() => setSortDirection(1)}
        d="M10.2244 8.56836H0.872859C0.691833 8.56836 0.535337 8.63357 0.403114 8.76389C0.270891 8.89436 0.204834 9.04877 0.204834 9.22728C0.204834 9.40579 0.270891 9.56032 0.403114 9.69071L5.07888 14.3042C5.21125 14.4347 5.36775 14.5 5.54863 14.5C5.72951 14.5 5.88615 14.4347 6.01826 14.3042L10.694 9.69067C10.8261 9.56032 10.8924 9.40579 10.8924 9.22725C10.8924 9.04877 10.8261 8.89436 10.694 8.76386C10.5619 8.63343 10.4053 8.56836 10.2244 8.56836Z"
        fill={sortDirection === 1 ? '#A5A5A5' : '#D3D6E4'} style={{cursor: "pointer"}}
      />
    </svg>
  );
};
