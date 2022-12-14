import React from "react";
import styles from "../../styles/common/GoBackButton.module.css";

interface GoBackButtonProps {
  onClick?: () => void;
  children?: React.ReactNode | string;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button className={styles.goBackButton} type="button" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 13C7.5 13.3157 7.61459 13.5862 7.86141 13.8207L14.7194 20.6933C14.9133 20.8918 15.1601 21 15.451 21C16.0328 21 16.5 20.531 16.5 19.9267C16.5 19.6291 16.3766 19.3675 16.1827 19.1601L10.0034 13L16.1827 6.83991C16.3766 6.63247 16.5 6.36189 16.5 6.07328C16.5 5.469 16.0328 5 15.451 5C15.1601 5 14.9133 5.10823 14.7194 5.30665L7.86141 12.1702C7.61459 12.4138 7.5 12.6843 7.5 13Z"
          fill="#2A1A1F"
        />
      </svg>

      <div className={styles.label}>{children || "Back"}</div>
    </button>
  );
};
