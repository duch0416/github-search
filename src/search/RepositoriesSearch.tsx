import * as React from "react";

export interface RepositoriesSearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RepositoriesSearch: React.FC<RepositoriesSearchProps> = ({
  onChange,
}) => <input type="text" onChange={onChange} />;

export default RepositoriesSearch;
