import * as React from "react";

export interface RepositoriesSearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
}

const RepositoriesSearch: React.FC<RepositoriesSearchProps> = ({
  onChange,
  value
}) => <input type="text" onChange={onChange} value={value}/>;

export default RepositoriesSearch;
