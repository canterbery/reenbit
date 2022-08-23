import styles from "../../styles/common/GoogleButton.module.css";
type Props = {
  label: string;
  onClick(): void;
  disabled?: boolean;
};
export const GoogleButton: React.FC<Props> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={styles.loginWithGoogleBtn}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
